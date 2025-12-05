import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiBook, FiChevronRight } from 'react-icons/fi';
import curriculum from '../../data/curriculum';
import './SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim().length === 0) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const searchResults = [];
    const searchTerm = value.toLowerCase();

    curriculum.sections.forEach(section => {
      section.topics.forEach(topic => {
        if (
          topic.title.toLowerCase().includes(searchTerm) ||
          topic.content.toLowerCase().includes(searchTerm)
        ) {
          searchResults.push({
            ...topic,
            sectionId: section.id,
            sectionTitle: section.title,
            sectionIcon: section.icon
          });
        }
      });
    });

    setResults(searchResults.slice(0, 5)); // Limit to 5 results
    setIsOpen(true);
  };

  const handleNavigate = (sectionId, topicId) => {
    navigate(`/learn/${sectionId}/${topicId}`);
    setQuery('');
    setIsOpen(false);
  };

  return (
    <div className="search-container" ref={searchRef}>
      <div className="search-input-wrapper">
        <FiSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search lessons..."
          value={query}
          onChange={handleSearch}
          onFocus={() => query.length > 0 && setIsOpen(true)}
          className="search-input"
        />
      </div>

      {isOpen && results.length > 0 && (
        <div className="search-dropdown">
          {results.map((result) => (
            <div
              key={result.id}
              className="search-result-item"
              onClick={() => handleNavigate(result.sectionId, result.id)}
            >
              <div className="result-icon">
                {result.sectionIcon}
              </div>
              <div className="result-info">
                <div className="result-title">{result.title}</div>
                <div className="result-section">{result.sectionTitle}</div>
              </div>
              <FiChevronRight className="result-arrow" />
            </div>
          ))}
        </div>
      )}

      {isOpen && query.length > 0 && results.length === 0 && (
        <div className="search-dropdown">
          <div className="no-results">
            No lessons found for "{query}"
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
