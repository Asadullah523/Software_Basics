import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight, FiCheckCircle, FiBook } from 'react-icons/fi';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion } from 'framer-motion';
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
    setShowQuiz(false); // Reset quiz state when topic changes
  }, [topicId]);

  if (!section || !topic) {
    return (
      <div className="lesson-view">
        <div className="lesson-error">
          <h1>Topic Not Found</h1>
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
        <motion.article 
          className="lesson-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          key={topicId} // Force re-animation on topic change
        >
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
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                code({node, inline, className, children, ...props}) {
                  const match = /language-(\w+)/.exec(className || '')
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={vscDarkPlus}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  )
                }
              }}
            >
              {topic.content}
            </ReactMarkdown>
          </div>

          {/* Code Examples - Kept for backward compatibility if data has separate examples array */}
          {topic.examples && topic.examples.length > 0 && (
            <div className="examples-section">
              <h2>Examples</h2>
              {topic.examples.map((example, index) => (
                <div key={index} className="code-example">
                  {example.title && <h3>{example.title}</h3>}
                  <SyntaxHighlighter
                    style={vscDarkPlus}
                    language={example.language || 'javascript'}
                  >
                    {example.code}
                  </SyntaxHighlighter>
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
        </motion.article>

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
