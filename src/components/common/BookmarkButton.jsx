import { FiBookmark } from 'react-icons/fi';
import { useLearning } from '../../contexts/LearningContext';
import './BookmarkButton.css';

const BookmarkButton = ({ lessonId }) => {
  const { toggleBookmark, isLessonBookmarked } = useLearning();
  const isBookmarked = isLessonBookmarked(lessonId);

  const handleClick = () => {
    toggleBookmark(lessonId);
  };

  return (
    <button
      className={`bookmark-btn ${isBookmarked ? 'bookmarked' : ''}`}
      onClick={handleClick}
      aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark this lesson'}
      title={isBookmarked ? 'Remove bookmark' : 'Bookmark this lesson'}
    >
      <FiBookmark className="bookmark-icon" />
      <span className="bookmark-text">
        {isBookmarked ? 'Bookmarked' : 'Bookmark'}
      </span>
    </button>
  );
};

export default BookmarkButton;
