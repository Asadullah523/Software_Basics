import { FiAlertTriangle, FiTrash2, FiX } from 'react-icons/fi';
import './ResetModal.css';

const ResetModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="reset-modal-overlay">
      <div className="reset-modal">
        <button className="close-btn" onClick={onClose}>
          <FiX size={24} />
        </button>
        
        <div className="reset-icon-container">
          <FiAlertTriangle size={48} />
        </div>
        
        <h2>Reset All Progress?</h2>
        
        <div className="reset-content">
          <p>This action is <strong>irreversible</strong>. You will lose:</p>
          <ul>
            <li>All completed lessons</li>
            <li>All earned XP and badges</li>
            <li>Your current streak</li>
            <li>All quiz scores</li>
          </ul>
        </div>

        <div className="reset-actions">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="confirm-reset-btn" onClick={onConfirm}>
            <FiTrash2 /> Yes, Reset Everything
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetModal;
