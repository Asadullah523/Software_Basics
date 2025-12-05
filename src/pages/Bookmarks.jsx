import { Link } from 'react-router-dom';
import { FiBook, FiBookmark, FiArrowRight } from 'react-icons/fi';
import { useLearning } from '../contexts/LearningContext';
import curriculum from '../data/curriculum';
import './Bookmarks.css';

const Bookmarks = () => {
  const { progress } = useLearning();
  const bookmarkedLessons = progress.bookmarkedLessons || [];

  // Find all bookmarked topics with their section info
  const bookmarkedTopics = bookmarkedLessons.map(lessonId => {
    for (const section of curriculum.sections) {
      const topic = section.topics.find(t => t.id === lessonId);
      if (topic) {
        return {
          ...topic,
          sectionId: section.id,
          sectionTitle: section.title,
          sectionIcon: section.icon
        };
      }
    }
    return null;
  }).filter(Boolean);

  return (
    <div className="bookmarks-page">
      <div className="bookmarks-header">
        <h1>
          <FiBookmark /> Bookmarked Lessons
        </h1>
        <p>Quick access to your favorite lessons</p>
      </div>

      {bookmarkedTopics.length === 0 ? (
        <div className="empty-bookmarks">
          <div className="empty-icon">
            <FiBookmark />
          </div>
          <h2>No bookmarks yet</h2>
          <p>Bookmark lessons as you learn to easily access them later!</p>
 <Link to="/dashboard" className="btn btn-primary">
            Browse Lessons <FiArrowRight />
          </Link>
        </div>
      ) : (
        <div className="bookmarks-grid">
          {bookmarkedTopics.map(topic => (
            <Link
              key={topic.id}
              to={`/learn/${topic.sectionId}/${topic.id}`}
              className="bookmark-card"
            >
              <div className="bookmark-section-badge">
                {topic.sectionIcon} {topic.sectionTitle}
              </div>
              <h3>{topic.title}</h3>
              <div className="bookmark-card-footer">
                <FiBook size={14} />
                <span>Continue Learning</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookmarks;
