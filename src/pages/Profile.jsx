import { useState } from 'react';
import { useLearning } from '../contexts/LearningContext';
import curriculum from '../data/curriculum';
import { FiUser, FiTrash2, FiAward, FiActivity } from 'react-icons/fi';
import ResetModal from '../components/common/ResetModal';
import './Profile.css';

const Profile = () => {
  const { progress, resetProgress, getOverallProgress } = useLearning();
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const overallProgress = getOverallProgress();

  const handleResetClick = () => {
    setIsResetModalOpen(true);
  };

  const handleConfirmReset = () => {
    resetProgress();
    setIsResetModalOpen(false);
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>My Profile</h1>
        <p>Manage your account and progress</p>
      </div>

      <div className="profile-container">
        {/* User Info Card */}
        <div className="profile-card user-card">
          <div className="profile-avatar">
            <FiUser size={40} />
          </div>
          <div className="profile-info">
            <h2>Student</h2>
            <p>Learning Software Engineering</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon xp">
              <FiAward />
            </div>
            <div className="stat-details">
              <h3>{progress.totalXP}</h3>
              <p>Total XP</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon progress">
              <FiActivity />
            </div>
            <div className="stat-details">
              <h3>{overallProgress}%</h3>
              <p>Overall Progress</p>
            </div>
          </div>
        </div>



        {/* Settings Section */}
        <div className="profile-section">
          <h2>Settings</h2>
          <div className="danger-zone">
            <div className="danger-info">
              <h3>Reset Progress</h3>
              <p>This will delete all your progress, XP, and completed lessons. This action cannot be undone.</p>
            </div>
            <button className="reset-btn" onClick={handleResetClick}>
              <FiTrash2 /> Reset All Progress
            </button>
          </div>
        </div>
      </div>

      <ResetModal 
        isOpen={isResetModalOpen} 
        onClose={() => setIsResetModalOpen(false)} 
        onConfirm={handleConfirmReset} 
      />
    </div>
  );
};

export default Profile;
