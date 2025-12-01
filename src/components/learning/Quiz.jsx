import { useState } from 'react';
import { FiCheckCircle, FiXCircle, FiRefreshCw } from 'react-icons/fi';
import { useLearning } from '../../contexts/LearningContext';
import './Quiz.css';

const Quiz = ({ questions, topicId, onComplete, onQuizPass }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  const { saveQuizScore } = useLearning();

  const question = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;

  const handleAnswerSelect = (index) => {
    if (showExplanation) return; // Prevent changing answer after submission

    setSelectedAnswer(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === question.correct;
    setShowExplanation(true);
    
    if (isCorrect) {
      setScore(score + 1);
    }

    setAnsweredQuestions([...answeredQuestions, {
      question: question.question,
      correct: isCorrect,
      selectedAnswer,
      correctAnswer: question.correct
    }]);
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      // Quiz complete
      const finalScore = score + (selectedAnswer === question.correct ? 1 : 0);
      saveQuizScore(topicId, finalScore, questions.length);
      
      // Check if passed and trigger callback
      const percentage = Math.round((finalScore / questions.length) * 100);
      if (percentage >= 70 && onQuizPass) {
        onQuizPass();
      }
      setQuizCompleted(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handleRetake = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnsweredQuestions([]);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    const percentage = Math.round((score / questions.length) * 100);
    const passed = percentage >= 70;

    return (
      <div className="quiz-results">
        <div className={`results-card ${passed ? 'passed' : 'failed'}`}>
          <div className="results-icon">
            {passed ? <FiCheckCircle size={64} /> : <FiXCircle size={64} />}
          </div>
          <h2>{passed ? 'Congratulations!' : 'Keep Learning!'}</h2>
          <p className="results-message">
            {passed 
              ? 'You passed the quiz! Great job on mastering this topic.'
              : 'Don\'t worry! Review the material and try again.'}
          </p>
          
          <div className="score-display">
            <div className="score-circle">
              <span className="score-percentage">{percentage}%</span>
              <span className="score-fraction">{score}/{questions.length}</span>
            </div>
          </div>

          <div className="results-actions">
            <button className="btn btn-secondary" onClick={handleRetake}>
              <FiRefreshCw /> Retake Quiz
            </button>
            <button className="btn btn-primary" onClick={onComplete}>
              Continue Learning
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h2>Quiz Time!</h2>
        <div className="quiz-progress">
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="quiz-question">
        <h3>{question.question}</h3>
        
        <div className="quiz-options">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={`quiz-option ${
                selectedAnswer === index ? 'selected' : ''
              } ${
                showExplanation
                  ? index === question.correct
                    ? 'correct'
                    : selectedAnswer === index
                    ? 'incorrect'
                    : ''
                  : ''
              }`}
              onClick={() => handleAnswerSelect(index)}
              disabled={showExplanation}
            >
              <span className="option-letter">{String.fromCharCode(65 + index)}</span>
              <span className="option-text">{option}</span>
              {showExplanation && index === question.correct && (
                <FiCheckCircle className="option-icon correct-icon" />
              )}
              {showExplanation && selectedAnswer === index && index !== question.correct && (
                <FiXCircle className="option-icon incorrect-icon" />
              )}
            </button>
          ))}
        </div>

        {showExplanation && question.explanation && (
          <div className={`explanation ${selectedAnswer === question.correct ? 'correct-exp' : 'incorrect-exp'}`}>
            <strong>
              {selectedAnswer === question.correct ? '✅ Correct!' : '❌ Incorrect'}
            </strong>
            <p>{question.explanation}</p>
          </div>
        )}

        <div className="quiz-actions">
          {!showExplanation ? (
            <button 
              className="btn btn-primary" 
              onClick={handleSubmitAnswer}
              disabled={selectedAnswer === null}
            >
              Submit Answer
            </button>
          ) : (
            <button className="btn btn-primary" onClick={handleNextQuestion}>
              {isLastQuestion ? 'View Results' : 'Next Question'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
