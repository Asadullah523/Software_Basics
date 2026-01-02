import { Link } from 'react-router-dom';
import { FiArrowRight, FiCode, FiBook, FiTrendingUp, FiAward, FiUsers, FiZap } from 'react-icons/fi';
import './Home.css';

const Home = () => {
  const features = [
    {
      icon: <FiCode />,
      title: 'Comprehensive Curriculum',
      description: '11 major sections covering everything from basics to advanced concepts'
    },
    {
      icon: <FiBook />,
      title: 'Structured Learning',
      description: 'Step-by-step lessons designed for absolute beginners to advanced learners'
    },
    {
      icon: <FiTrendingUp />,
      title: 'Progress Tracking',
      description: 'Monitor your learning journey with detailed progress indicators'
    },
    {
      icon: <FiAward />,
      title: 'Interactive Quizzes',
      description: 'Test your knowledge with quizzes after each topic'
    },
    {
      icon: <FiUsers />,
      title: 'Real-World Examples',
      description: 'Learn with practical examples from actual software projects'
    },
    {
      icon: <FiZap />,
      title: 'Modern & Fast',
      description: 'Beautiful, responsive interface with smooth performance'
    }
  ];

  const stats = [
    { number: '100+', label: 'Lessons' },
    { number: '11', label: 'Major Topics' },
    { number: '50+', label: 'Quizzes' },
    { number: '30+', label: 'Hours of Content' }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background hero-gradient-bg"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">🚀</span>
            <span>Your Journey Starts Here</span>
          </div>
          
          <h1 className="hero-title">
            Become a <span className="text-gradient">Software Engineer</span>
            <br />from Scratch
          </h1>
          
          <p className="hero-subtitle">
            Master software engineering fundamentals with our comprehensive,
            beginner-friendly curriculum. Build a strong foundation that will
            last throughout your career.
          </p>
          
          <div className="hero-buttons">
            <Link to="/dashboard" className="btn btn-primary btn-lg">
              Start Learning <FiArrowRight />
            </Link>
            <Link to="/roadmap" className="btn btn-secondary btn-lg">
              View Roadmap
            </Link>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose CodeFoundations?</h2>
            <p>Everything you need to master software engineering fundamentals</p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card card-premium">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path Preview */}
      <section className="learning-path-section">
        <div className="container">
          <div className="section-header">
            <h2>Your Learning Journey</h2>
            <p>From absolute beginner to confident software engineer</p>
          </div>
          
          <div className="learning-path">
            <div className="path-item">
              <div className="path-number">1</div>
              <div className="path-content">
                <h3>Software Fundamentals</h3>
                <p>Understand what software is and how it works</p>
              </div>
            </div>
            
            <div className="path-arrow">→</div>
            
            <div className="path-item">
              <div className="path-number">2</div>
              <div className="path-content">
                <h3>Programming Basics</h3>
                <p>Learn core programming concepts and logic</p>
              </div>
            </div>
            
            <div className="path-arrow">→</div>
            
            <div className="path-item">
              <div className="path-number">3</div>
              <div className="path-content">
                <h3>Core Computer Science</h3>
                <p>Master data structures and algorithms</p>
              </div>
            </div>
            
            <div className="path-arrow">→</div>
            
            <div className="path-item">
              <div className="path-number">4</div>
              <div className="path-content">
                <h3>Professional Skills</h3>
                <p>Version control, testing, and best practices</p>
              </div>
            </div>
          </div>
          
          <div className="cta-center">
            <Link to="/roadmap" className="btn btn-primary">
              Explore Full Roadmap <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <h2>Ready to Start Your Journey?</h2>
            <p>
              Join thousands of learners mastering software engineering fundamentals.
              Start learning today, completely free!
            </p>
            <Link to="/dashboard" className="btn btn-primary btn-lg">
              Get Started Now <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
