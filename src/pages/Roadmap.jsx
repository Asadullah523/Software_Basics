import { Link } from 'react-router-dom';
import { FiCheckCircle, FiCircle } from 'react-icons/fi';
import { useLearning } from '../contexts/LearningContext';
import curriculum from '../data/curriculum';
import './Roadmap.css';

const Roadmap = () => {
  const { getSectionProgress, progress } = useLearning();

  return (
    <div className="roadmap">
      <div className="roadmap-header">
        <h1>Learning Roadmap</h1>
        <p>Your complete journey to software engineering mastery</p>
      </div>

      <div className="roadmap-container">
        {[
          { id: 'foundations', title: 'Foundations' },
          { id: 'core-skills', title: 'Core Skills' },
          { id: 'web-dev', title: 'Web Development' },
          { id: 'cs-fundamentals-deep', title: 'CS Fundamentals Deep' },
          { id: 'dsa', title: 'Data Structures & Algorithms' },
          { id: 'advanced', title: 'Advanced Topics', filters: ['advanced', 'system-design'] },
          { id: 'professional', title: 'Professional Path' }
        ].map(group => {
          const groupSections = curriculum.sections.filter(s => 
            group.filters ? group.filters.includes(s.category) : s.category === group.id
          );
          
          if (groupSections.length === 0) return null;

          return (
            <div key={group.id} className="roadmap-category-group">
              <h2 className="roadmap-category-title">{group.title}</h2>
              <div className="roadmap-sections-list">
                {groupSections.map((section, idx) => {
                  const sectionProgress = getSectionProgress(section.id);
                  const isCompleted = sectionProgress === 100;
                  const completedTopics = section.topics.filter(topic =>
                    progress.completedLessons.includes(topic.id)
                  ).length;

                  return (
                    <div key={section.id} className="roadmap-section">
                      <div className={`roadmap-card ${isCompleted ? 'completed' : ''}`}>
                        <div className="card-badge">
                          <span className="badge-number">{idx + 1}</span>
                          {isCompleted && <FiCheckCircle className="badge-check" />}
                        </div>
                        
                        <div className="card-icon">{section.icon}</div>
                        
                        <h2>{section.title}</h2>
                        <p className="card-description">{section.description}</p>
                        
                        <div className="card-stats">
                          <div className="stat">
                            <span className="stat-label">Topics:</span>
                            <span className="stat-value">{section.topics.length}</span>
                          </div>
                          <div className="stat">
                            <span className="stat-label">Time:</span>
                            <span className="stat-value">{section.estimatedTime}</span>
                          </div>
                          <div className="stat">
                            <span className="stat-label">Completed:</span>
                            <span className="stat-value">{completedTopics}/{section.topics.length}</span>
                          </div>
                        </div>

                        <div className="progress-container">
                          <div className="progress-bar">
                            <div 
                              className="progress-fill"
                              style={{ width: `${sectionProgress}%` }}
                            />
                          </div>
                          <span className="progress-text">{sectionProgress}%</span>
                        </div>

                        <div className="card-topics">
                          <h4>Topics:</h4>
                          <ul>
                            {section.topics.slice(0, 5).map(topic => (
                              <li key={topic.id}>
                                {progress.completedLessons.includes(topic.id) ? (
                                  <FiCheckCircle className="topic-icon completed" />
                                ) : (
                                  <FiCircle className="topic-icon" />
                                )}
                                <span>{topic.title}</span>
                              </li>
                            ))}
                            {section.topics.length > 5 && (
                              <li className="more-topics">+{section.topics.length - 5} more topics</li>
                            )}
                          </ul>
                        </div>

                        <Link 
                          to={`/learn/${section.id}/${section.topics[0]?.id || ''}`}
                          className="card-btn"
                        >
                          {sectionProgress > 0 ? 'Continue' : 'Start Section'}
                        </Link>
                      </div>
                      
                      {idx < groupSections.length - 1 && (
                        <div className="roadmap-connector">
                          <div className="connector-line"></div>
                          <div className="connector-arrow">↓</div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Roadmap;
