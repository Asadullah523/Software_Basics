import React from 'react';
import './CircularProgress.css';

const CircularProgress = ({ 
  value, 
  max = 100, 
  size = 120, 
  strokeWidth = 10, 
  color = 'var(--primary-600)',
  trackColor = 'var(--bg-tertiary)',
  label = 'Progress',
  showValue = true
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const progress = Math.min(Math.max(value, 0), max);
  const percentage = (progress / max) * 100;
  const dashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="circular-progress-container" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="circular-progress"
      >
        {/* Background Circle */}
        <circle
          className="circular-progress-bg"
          stroke={trackColor}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        {/* Progress Circle */}
        <circle
          className="circular-progress-value"
          stroke={color}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={dashoffset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      {showValue && (
        <div className="circular-progress-text">
          <span className="progress-value">{Math.round(percentage)}%</span>
          {label && <span className="progress-label">{label}</span>}
        </div>
      )}
    </div>
  );
};

export default CircularProgress;
