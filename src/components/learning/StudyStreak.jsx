import { useLearning } from '../../contexts/LearningContext';
import { FiZap } from 'react-icons/fi';
import './StudyStreak.css';

const StudyStreak = () => {
  const { getCurrentStreak, getLongestStreak } = useLearning();
  const currentStreak = getCurrentStreak();
  const longestStreak = getLongestStreak();

  return (
    <div className="study-streak-card">
      <div className="streak-header">
        <div className="streak-icon-wrapper">
          <FiZap className={`streak-icon ${currentStreak > 0 ? 'active' : ''}`} />
        </div>
        <div className="streak-title">
          <h3>Study Streak</h3>
          <p>Keep it going!</p>
        </div>
      </div>

      <div className="streak-stats">
        <div className="streak-stat">
          <div className="streak-number current">
            {currentStreak}
            <span className="streak-unit">days</span>
          </div>
          <div className="streak-label">Current Streak</div>
        </div>

        <div className="streak-divider"></div>

        <div className="streak-stat">
          <div className="streak-number best">
            {longestStreak}
            <span className="streak-unit">days</span>
          </div>
          <div className="streak-label">Best Streak</div>
        </div>
      </div>

      {currentStreak > 0 && (
        <div className="streak-message">
          {currentStreak >= 7 ? (
            <span>🔥 You're on fire! {currentStreak} days strong!</span>
          ) : currentStreak >= 3 ? (
            <span>💪 Great job! Keep the momentum going!</span>
          ) : (
            <span>⚡ Nice start! Build your streak!</span>
          )}
        </div>
      )}

      {currentStreak === 0 && (
        <div className="streak-message inactive">
          <span>Complete a lesson today to start your streak!</span>
        </div>
      )}
    </div>
  );
};

export default StudyStreak;
