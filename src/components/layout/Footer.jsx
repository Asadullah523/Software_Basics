import { Link } from 'react-router-dom';
import { FiGithub, FiTwitter, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* About Section */}
          <div className="footer-section">
            <h4 className="footer-title">CodeFoundations</h4>
            <p className="footer-description">
              Your comprehensive platform for mastering software engineering fundamentals.
              Built for learners, by passionate developers.
            </p>
            <div className="footer-social">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FiGithub />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FiTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a href="mailto:contact@codefoundations.dev" aria-label="Email">
                <FiMail />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/roadmap">Learning Roadmap</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>

          {/* Learning Sections */}
          <div className="footer-section">
            <h4 className="footer-title">Popular Topics</h4>
            <ul className="footer-links">
              <li><Link to="/learn/software-fundamentals">Software Fundamentals</Link></li>
              <li><Link to="/learn/programming-basics">Programming Basics</Link></li>
              <li><Link to="/learn/web-architecture">Web Architecture</Link></li>
              <li><Link to="/learn/version-control">Git & Version Control</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h4 className="footer-title">Resources</h4>
            <ul className="footer-links">
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/glossary">Glossary</Link></li>
              <li><Link to="/community">Community</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} CodeFoundations. Made with <FiHeart className="heart-icon" /> for learners worldwide.
          </p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="divider">•</span>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
