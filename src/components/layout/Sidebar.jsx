import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { FiHome, FiLayout, FiBook, FiCheckCircle, FiBookmark } from 'react-icons/fi';
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
            <Link to="/bookmarks" className={`sidebar-link ${location.pathname === '/bookmarks' ? 'active' : ''}`}>
              <FiBookmark /> Bookmarks
            </Link>
            <Link to="/roadmap" className={`sidebar-link ${location.pathname === '/roadmap' ? 'active' : ''}`}>
              <FiBook /> Roadmap
            </Link>
          </div>

          {/* Learning Sections */}
          <div className="sidebar-section">
            <h3 className="sidebar-title">Learning Path</h3>
            
            {/* Core Foundations Group */}
            <div className="sidebar-group">
              <h4 className="sidebar-category-header">Foundations</h4>
              {curriculum.sections
                .filter(s => s.category === 'foundations')
                .map(section => (
                  <SectionItem 
                    key={section.id} 
                    section={section} 
                    isExpanded={expandedSection === section.id}
                    onToggle={() => toggleSection(section.id)}
                    onClose={onClose}
                    progress={getSectionProgress(section.id)}
                  />
              ))}
            </div>

            {/* Core Engineering Skills Group */}
            <div className="sidebar-group">
              <h4 className="sidebar-category-header">Core Skills</h4>
              {curriculum.sections
                .filter(s => s.category === 'core-skills')
                .map(section => (
                  <SectionItem 
                    key={section.id} 
                    section={section} 
                    isExpanded={expandedSection === section.id}
                    onToggle={() => toggleSection(section.id)}
                    onClose={onClose}
                    progress={getSectionProgress(section.id)}
                  />
              ))}
            </div>

            {/* CS Deep Dive Group */}
            <div className="sidebar-group">
              <h4 className="sidebar-category-header">CS Deep Dive</h4>
              {curriculum.sections
                .filter(s => s.category === 'cs-fundamentals-deep')
                .map(section => (
                  <SectionItem 
                    key={section.id} 
                    section={section} 
                    isExpanded={expandedSection === section.id}
                    onToggle={() => toggleSection(section.id)}
                    onClose={onClose}
                    progress={getSectionProgress(section.id)}
                  />
              ))}
            </div>

            {/* DSA Group */}
            <div className="sidebar-group">
              <h4 className="sidebar-category-header">Data Structures & Algorithms</h4>
              {curriculum.sections
                .filter(s => s.category === 'dsa')
                .map(section => (
                  <SectionItem 
                    key={section.id} 
                    section={section} 
                    isExpanded={expandedSection === section.id}
                    onToggle={() => toggleSection(section.id)}
                    onClose={onClose}
                    progress={getSectionProgress(section.id)}
                  />
              ))}
            </div>

            {/* System Design Group */}
            <div className="sidebar-group">
              <h4 className="sidebar-category-header">System Design</h4>
              {curriculum.sections
                .filter(s => s.category === 'system-design')
                .map(section => (
                  <SectionItem 
                    key={section.id} 
                    section={section} 
                    isExpanded={expandedSection === section.id}
                    onToggle={() => toggleSection(section.id)}
                    onClose={onClose}
                    progress={getSectionProgress(section.id)}
                  />
              ))}
            </div>

            {/* Web Development Group */}
            <div className="sidebar-group">
              <h4 className="sidebar-category-header">Web Development</h4>
              {curriculum.sections
                .filter(s => s.category === 'web-dev')
                .map(section => (
                  <SectionItem 
                    key={section.id} 
                    section={section} 
                    isExpanded={expandedSection === section.id}
                    onToggle={() => toggleSection(section.id)}
                    onClose={onClose}
                    progress={getSectionProgress(section.id)}
                  />
              ))}
            </div>

            {/* Advanced Topics Group */}
            <div className="sidebar-group">
              <h4 className="sidebar-category-header">Advanced Topics</h4>
              {curriculum.sections
                .filter(s => s.category === 'advanced' || s.category === 'system-design')
                .map(section => (
                  <SectionItem 
                    key={section.id} 
                    section={section} 
                    isExpanded={expandedSection === section.id}
                    onToggle={() => toggleSection(section.id)}
                    onClose={onClose}
                    progress={getSectionProgress(section.id)}
                  />
              ))}
            </div>

            {/* Professional Group */}
            <div className="sidebar-group">
              <h4 className="sidebar-category-header">Professional Path</h4>
              {curriculum.sections
                .filter(s => s.category === 'professional')
                .map(section => (
                  <SectionItem 
                    key={section.id} 
                    section={section} 
                    isExpanded={expandedSection === section.id}
                    onToggle={() => toggleSection(section.id)}
                    onClose={onClose}
                    progress={getSectionProgress(section.id)}
                  />
              ))}
            </div>

          </div>
        </div>
      </aside>
    </>
  );
};

// Helper component for clearer code structure
const SectionItem = ({ section, isExpanded, onToggle, onClose, progress }) => (
  <div className="section-item">
    <button className="section-button" onClick={onToggle}>
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

export default Sidebar;
