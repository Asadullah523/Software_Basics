import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight, FiCheckCircle, FiBook } from 'react-icons/fi';
import { useLearning } from '../contexts/LearningContext';
import curriculum from '../data/curriculum';
import Quiz from '../components/learning/Quiz';
import BookmarkButton from '../components/common/BookmarkButton';
import './LessonView.css';

const LessonView = () => {
  const { sectionId, topicId } = useParams();
  const navigate = useNavigate();
  const { completeLesson, isLessonCompleted } = useLearning();
  const [showQuiz, setShowQuiz] = useState(false);

  // Find current section and topic
  const section = curriculum.sections.find(s => s.id === sectionId);
  const topic = section?.topics.find(t => t.id === topicId);
  
  // Find adjacent topics for navigation
  const topicIndex = section?.topics.findIndex(t => t.id === topicId) ?? -1;
  const prevTopic = topicIndex > 0 ? section.topics[topicIndex - 1] : null;
  const nextTopic = topicIndex < (section?.topics.length ?? 0) - 1 ? section.topics[topicIndex + 1] : null;

  const isCompleted = isLessonCompleted(topicId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [topicId]);

  if (!section || !topic) {
    return (
      <div className="lesson-view">
        <div className="lesson-error">
          <h1>Topic  Not Found</h1>
          <Link to="/dashboard" className="btn btn-primary">Back to Dashboard</Link>
        </div>
      </div>
    );
  }

  const handleComplete = () => {
    if (!isCompleted) {
      completeLesson(topicId, 10);
    }
    if (topic.quiz && topic.quiz.length > 0) {
      setShowQuiz(true);
    } else if (nextTopic) {
      navigate(`/learn/${sectionId}/${nextTopic.id}`);
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="lesson-view">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/dashboard">Dashboard</Link>
        <span>/</span>
        <Link to="/dashboard">{section.title}</Link>
        <span>/</span>
        <span>{topic.title}</span>
      </div>

      <div className="lesson-container">
        {/* Lesson Content */}
        <article className="lesson-content">
          <header className="lesson-header">
            <div className="lesson-meta">
              <span className="section-badge">
                {section.icon} {section.title}
              </span>
              {isCompleted && (
                <span className="completed-badge">
                  <FiCheckCircle /> Completed
                </span>
              )}
            </div>
            <div className="lesson-title-row">
              <h1 className="lesson-title">{topic.title}</h1>
              <BookmarkButton lessonId={topicId} />
            </div>
          </header>

          {/* Main Content */}
          <div className="lesson-body">
            {topic.content.split('\n').map((line, index) => {
              // Helper to parse inline formatting
              const parseInlineContent = (text) => {
                // Split by ** or <b> tags
                const parts = text.split(/(\*\*.*?\*\*|<b>.*?<\/b>)/g);
                return parts.map((part, i) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={i}>{part.slice(2, -2)}</strong>;
                  }
                  if (part.startsWith('<b>') && part.endsWith('</b>')) {
                    return <strong key={i}>{part.slice(3, -4)}</strong>;
                  }
                  return part;
                });
              };

              // Handle headers
              if (line.startsWith('### ')) {
                return <h3 key={index}>{line.replace('### ', '')}</h3>;
              }
              if (line.startsWith('## ')) {
                return <h2 key={index}>{line.replace('## ', '')}</h2>;
              }
              if (line.startsWith('# ')) {
                return <h1 key={index}>{line.replace('# ', '')}</h1>;
              }
              
              // Handle code blocks
              if (line.startsWith('```')) {
                return null; // Skip code fence markers
              }
              
              // Handle lists
              if (line.match(/^[-*•]\s/)) {
                return <li key={index}>{parseInlineContent(line.replace(/^[-*•]\s/, ''))}</li>;
              }
              if (line.match(/^\d+\.\s/)) {
                return <li key={index}>{parseInlineContent(line.replace(/^\d+\.\s/, ''))}</li>;
              }
              
              // Handle special markers
              if (line.startsWith('✅') || line.startsWith('❌')) {
                return <p key={index} className="highlight">{parseInlineContent(line)}</p>;
              }
              
              // Regular paragraphs
              if (line.trim()) {
                return <p key={index}>{parseInlineContent(line)}</p>;
              }
              
              return <br key={index} />;
            })}
          </div>

          {/* Code Examples */}
          {topic.examples && topic.examples.length > 0 && (
            <div className="examples-section">
              <h2>Examples</h2>
              {topic.examples.map((example, index) => (
                <div key={index} className="code-example">
                  {example.title && <h3>{example.title}</h3>}
                  <pre>
                    <code>{example.code}</code>
                  </pre>
                </div>
              ))}
            </div>
          )}

          {/* Quiz Section */}
          {showQuiz && topic.quiz && topic.quiz.length > 0 ? (
            <Quiz 
              questions={topic.quiz} 
              topicId={topicId}
              onQuizPass={() => completeLesson(topicId, 10)}
              onComplete={() => {
                if (nextTopic) {
                  navigate(`/learn/${sectionId}/${nextTopic.id}`);
                } else {
                  navigate('/dashboard');
                }
              }}
            />
          ) : (
            <div className="lesson-actions">
              <button 
                className="btn btn-success btn-lg"
                onClick={handleComplete}
              >
                {isCompleted ? (
                  topic.quiz && topic.quiz.length > 0 ? 'Retake Quiz' : 'Next Topic'
                ) : (
                  topic.quiz && topic.quiz.length > 0 ? 'Complete & Take Quiz' : 'Mark as Complete'
                )}
                <FiCheckCircle />
              </button>
            </div>
          )}

          {/* Navigation */}
          <div className="lesson-navigation">
            {prevTopic ? (
              <Link 
                to={`/learn/${sectionId}/${prevTopic.id}`}
                className="nav-btn prev"
              >
                <FiChevronLeft />
                <div>
                  <span className="nav-label">Previous</span>
                  <span className="nav-title">{prevTopic.title}</span>
                </div>
              </Link>
            ) : <div />}

            {nextTopic && (
              <Link 
                to={`/learn/${sectionId}/${nextTopic.id}`}
                className="nav-btn next"
              >
                <div>
                  <span className="nav-label">Next</span>
                  <span className="nav-title">{nextTopic.title}</span>
                </div>
                <FiChevronRight />
              </Link>
            )}
          </div>
        </article>

        {/* Sidebar - Topic List */}
        <aside className="lesson-sidebar">
          <h3><FiBook /> {section.title}</h3>
          <ul className="topic-list">
            {section.topics.map((t, index) => (
              <li key={t.id}>
                <Link 
                  to={`/learn/${sectionId}/${t.id}`}
                  className={`topic-link ${t.id === topicId ? 'active' : ''} ${isLessonCompleted(t.id) ? 'completed' : ''}`}
                >
                  <span className="topic-number">{index + 1}</span>
                  <span className="topic-name">{t.title}</span>
                  {isLessonCompleted(t.id) && <FiCheckCircle className="check-icon" />}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default LessonView;
