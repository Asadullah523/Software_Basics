import { Link } from 'react-router-dom';
import { FiBook, FiClock, FiCheckCircle, FiTrendingUp } from 'react-icons/fi';
import { useLearning } from '../contexts/LearningContext';
import curriculum from '../data/curriculum';
import StudyStreak from '../components/learning/StudyStreak';
import CircularProgress from '../components/common/CircularProgress';
import './Dashboard.css';

const Dashboard = () => {
  const { progress, getSectionProgress, getOverallProgress } = useLearning();
  const overallProgress = getOverallProgress();
  
  // Calculate stats
  const totalTopics = curriculum.sections.reduce((sum, section) => sum + section.topics.length, 0);
  const completedTopics = progress.completedLessons.length;
  const totalQuizzes = Object.keys(progress.quizScores).length;

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Your Learning Dashboard</h1>
        <p>Track your progress and continue your journey</p>
      </div>

      {/* Study Streak - Prominent Feature */}
      <div className="streak-container">
        <StudyStreak />
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card progress-card">
          <CircularProgress 
            value={overallProgress} 
            size={80} 
            strokeWidth={8} 
            label="Overall"
          />
        </div>

<div className="stat-card">
          <div className="stat-icon completed">
            <FiCheckCircle />
          </div>
          <div className="stat-info">
            <div className="stat-value">{completedTopics}/{totalTopics}</div>
            <div className="stat-label">Lessons Completed</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon xp">
            <span>⚡</span>
          </div>
          <div className="stat-info">
            <div className="stat-value">{progress.totalXP}</div>
            <div className="stat-label">Total XP</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon quizzes">
            <FiBook />
          </div>
          <div className="stat-info">
            <div className="stat-value">{totalQuizzes}</div>
            <div className="stat-label">Quizzes Taken</div>
          </div>
        </div>
      </div>

      {/* Sections Progress */}
      <div className="sections-container">
        <h2>Learning Sections</h2>
        <div className="sections-grid">
          {curriculum.sections.map((section) => {
            const sectionProgress = getSectionProgress(section.id);
            const completedInSection = section.topics.filter(topic => 
              progress.completedLessons.includes(topic.id)
            ).length;

            return (
              <div key={section.id} className="section-card">
                <div className="section-card-header">
                  <span className="section-card-icon">{section.icon}</span>
                  <div className="section-card-title">
                    <h3>{section.title}</h3>
                    <p>{section.description}</p>
                  </div>
                </div>

                <div className=" section-card-meta">
                  <div className="meta-item">
                    <FiBook size={16} />
                    <span>{section.topics.length} topics</span>
                  </div>
                  <div className="meta-item">
                    <FiClock size={16} />
                    <span>{section.estimatedTime}</span>
                  </div>
                </div>

                <div className="progress-container">
                  <div className="progress-info">
                    <span>{completedInSection}/{section.topics.length} completed</span>
                    <span className="progress-percentage">{sectionProgress}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${sectionProgress}%` }}
                    ></div>
                  </div>
                </div>

                <Link 
                  to={`/learn/${section.id}/${section.topics[0]?.id || ''}`}
                  className="section-card-btn"
                >
                  {sectionProgress > 0 ? 'Continue Learning' : 'Start Learning'}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
