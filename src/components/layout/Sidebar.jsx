import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { FiHome, FiLayout, FiBook, FiCheckCircle } from 'react-icons/fi';
import { useLearning } from '../../contexts/LearningContext';
import curriculum from '../../data/curriculum';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const { getSectionProgress } = useLearning();
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
      
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          {/* Quick Links */}
          <div className="sidebar-section">
            <h3 className="sidebar-title">Navigation</h3>
            <Link to="/" className={`sidebar-link ${location.pathname === '/' ? 'active' : ''}`}>
              <FiHome /> Home
            </Link>
            <Link to="/dashboard" className={`sidebar-link ${location.pathname === '/dashboard' ? 'active' : ''}`}>
              <FiLayout /> Dashboard
            </Link>
            <Link to="/roadmap" className={`sidebar-link ${location.pathname === '/roadmap' ? 'active' : ''}`}>
              <FiBook /> Roadmap
            </Link>
          </div>

          {/* Learning Sections */}
          <div className="sidebar-section">
            <h3 className="sidebar-title">Learning Path</h3>
            {curriculum.sections.map((section) => {
              const progress = getSectionProgress(section.id);
              const isExpanded = expandedSection === section.id;
              
              return (
                <div key={section.id} className="section-item">
                  <button
                    className="section-button"
                    onClick={() => toggleSection(section.id)}
                  >
                    <div className="section-header">
                      <span className="section-icon">{section.icon}</span>
                      <span className="section-name">{section.title}</span>
                    </div>
                    <div className="section-progress">{progress}%</div>
                  </button>
                  
                  {isExpanded && (
                    <div className="section-topics">
                      {section.topics.map((topic) => (
                        <Link
                          key={topic.id}
                          to={`/learn/${section.id}/${topic.id}`}
                          className="topic-link"
                          onClick={onClose}
                        >
                          <span>{topic.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
