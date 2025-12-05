import { Link } from 'react-router-dom';
import { FiBook, FiClock, FiCheckCircle, FiTrendingUp, FiActivity, FiPlay, FiLightbulb } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useLearning } from '../contexts/LearningContext';
import curriculum from '../data/curriculum';
import StudyStreak from '../components/learning/StudyStreak';
import CircularProgress from '../components/common/CircularProgress';
import './Dashboard.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

const tips = [
  "Consistency is key! Even 15 minutes a day adds up.",
  "Try explaining what you learned to a rubber duck (or a friend).",
  "Take breaks! Your brain needs time to consolidate memory.",
  "Practice coding by building small projects.",
  "Don't be afraid to break things. That's how you learn!",
  "Read other people's code to learn new techniques.",
  "Focus on understanding concepts, not just memorizing syntax."
];

const Dashboard = () => {
  const { progress, getSectionProgress, getOverallProgress } = useLearning();
  const overallProgress = getOverallProgress();
  
  // Calculate stats
  const totalTopics = curriculum.sections.reduce((sum, section) => sum + section.topics.length, 0);
  const completedTopics = progress.completedLessons.length;
  const totalQuizzes = Object.keys(progress.quizScores).length;

  // Daily Tip
  const randomTip = tips[new Date().getDate() % tips.length];

  // Find next lesson to resume
  let resumeLesson = null;
  let resumeSection = null;

  for (const section of curriculum.sections) {
    const incompleteTopic = section.topics.find(topic => !progress.completedLessons.includes(topic.id));
    if (incompleteTopic) {
      resumeLesson = incompleteTopic;
      resumeSection = section;
      break;
    }
  }

  return (
    <motion.div 
      className="dashboard"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="dashboard-header" variants={itemVariants}>
        <h1>Welcome Back! 👋</h1>
        <p>Your learning journey continues here. Keep up the great work!</p>
      </motion.div>

      {/* Daily Tip & Resume Learning Grid */}
      <div className="dashboard-top-grid">
        {/* Study Streak */}
        <motion.div className="streak-container" variants={itemVariants}>
          <StudyStreak />
        </motion.div>

        {/* Daily Tip */}
        <motion.div 
          className="daily-tip-card" 
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <div className="tip-icon">
            <FiLightbulb />
          </div>
          <div className="tip-content">
            <h3>Daily Tip</h3>
            <p>"{randomTip}"</p>
          </div>
        </motion.div>

        {/* Resume Learning */}
        {resumeLesson && (
          <motion.div 
            className="resume-card" 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="resume-content">
              <h3>Ready to continue?</h3>
              <p>Pick up where you left off:</p>
              <div className="resume-lesson-info">
                <span className="resume-section-title">{resumeSection.title}</span>
                <span className="resume-lesson-title">{resumeLesson.title}</span>
              </div>
            </div>
            <Link to={`/learn/${resumeSection.id}/${resumeLesson.id}`} className="resume-btn">
              <FiPlay /> Resume
            </Link>
          </motion.div>
        )}
      </div>

      {/* Stats Cards */}
      <motion.div className="stats-grid" variants={itemVariants}>
        <motion.div 
          className="stat-card progress-card"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <CircularProgress 
            value={overallProgress} 
            size={80} 
            strokeWidth={8} 
            label="Overall"
          />
        </motion.div>

        <motion.div 
          className="stat-card"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="stat-icon completed">
            <FiCheckCircle />
          </div>
          <div className="stat-info">
            <div className="stat-value">{completedTopics}/{totalTopics}</div>
            <div className="stat-label">Lessons Completed</div>
          </div>
        </motion.div>

        <motion.div 
          className="stat-card"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="stat-icon xp">
            <span>⚡</span>
          </div>
          <div className="stat-info">
            <div className="stat-value">{progress.totalXP}</div>
            <div className="stat-label">Total XP</div>
          </div>
        </motion.div>

        <motion.div 
          className="stat-card"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="stat-icon quizzes">
            <FiActivity />
          </div>
          <div className="stat-info">
            <div className="stat-value">{totalQuizzes}</div>
            <div className="stat-label">Quizzes Taken</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Sections Progress */}
      <motion.div className="sections-container" variants={itemVariants}>
        <h2>Learning Sections</h2>
        <div className="sections-grid">
          {curriculum.sections.map((section, index) => {
            const sectionProgress = getSectionProgress(section.id);
            const completedInSection = section.topics.filter(topic => 
              progress.completedLessons.includes(topic.id)
            ).length;

            return (
              <motion.div 
                key={section.id} 
                className="section-card"
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
              >
                <div className="section-card-header">
                  <span className="section-card-icon">{section.icon}</span>
                  <div className="section-card-title">
                    <h3>{section.title}</h3>
                    <p>{section.description}</p>
                  </div>
                </div>

                <div className="section-card-meta">
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
                    <motion.div 
                      className="progress-fill" 
                      initial={{ width: 0 }}
                      animate={{ width: `${sectionProgress}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </div>

                <Link 
                  to={`/learn/${section.id}/${section.topics[0]?.id || ''}`}
                  className="section-card-btn"
                >
                  {sectionProgress > 0 ? 'Continue Learning' : 'Start Learning'}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
