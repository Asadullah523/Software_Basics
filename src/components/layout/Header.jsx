import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FiSun, FiMoon, FiMenu, FiX, FiUser, FiTrendingUp } from 'react-icons/fi';
import { useLearning } from '../../contexts/LearningContext';
import './Header.css';

const Header = ({ onToggleSidebar }) => {
  const { theme, toggleTheme, getOverallProgress, progress } = useLearning();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const overallProgress = getOverallProgress();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Left Section */}
        <div className="header-left">
          <button className="menu-btn" onClick={onToggleSidebar} aria-label="Toggle Sidebar">
            <FiMenu size={24} />
          </button>
          <Link to="/" className="logo">
            <span className="logo-icon">🎓</span>
            <span className="logo-text">CodeFoundations</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="header-nav desktop-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
          <Link to="/roadmap" className="nav-link">Roadmap</Link>
        </nav>

        {/* Right Section */}
        <div className="header-right">
          {/* Progress Indicator */}
          <div className="header-progress">
            <FiTrendingUp size={18} />
            <span className="progress-text">{overallProgress}%</span>
          </div>

          {/* XP Display */}
          <div className="header-xp">
            <span className="xp-icon">⚡</span>
            <span className="xp-text">{progress.totalXP} XP</span>
          </div>

          {/* Theme Toggle */}
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>

          {/* Profile Icon */}
          <Link to="/profile" className="profile-link">
            <FiUser size={20} />
          </Link>

          {/* Mobile Menu Toggle */}
          <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle Mobile Menu">
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="header-nav mobile-nav">
          <Link to="/" className="nav-link" onClick={toggleMobileMenu}>Home</Link>
          <Link to="/dashboard" className="nav-link" onClick={toggleMobileMenu}>Dashboard</Link>
          <Link to="/roadmap" className="nav-link" onClick={toggleMobileMenu}>Roadmap</Link>
          <Link to="/profile" className="nav-link" onClick={toggleMobileMenu}>Profile</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
