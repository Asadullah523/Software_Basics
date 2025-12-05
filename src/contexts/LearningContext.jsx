import { createContext, useContext, useState, useEffect } from 'react';
import curriculum from '../data/curriculum';

const LearningContext = createContext();

export const useLearning = () => {
  const context = useContext(LearningContext);
  if (!context) {
    throw new Error('useLearning must be used within LearningProvider');
  }
  return context;
};

export const LearningProvider = ({ children }) => {
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('learningProgress');
    return saved ? JSON.parse(saved) : {
      completedLessons: [],
      quizScores: {},
      totalXP: 0,
      currentStreak: 0,
      longestStreak: 0,
      lastVisit: null,
      bookmarkedLessons: [],
      sectionProgress: {}
    };
  });

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || 'light';
  });

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('learningProgress', JSON.stringify(progress));
  }, [progress]);

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Calculate and update streak on mount
  useEffect(() => {
    updateStreak();
  }, []);

  // Calculate streak based on last visit
  const updateStreak = () => {
    setProgress(prev => {
      if (!prev.lastVisit) return prev;

      const now = new Date();
      const lastVisit = new Date(prev.lastVisit);
      const hoursDiff = (now - lastVisit) / (1000 * 60 * 60);

      // If visited within 24 hours, maintain streak
      if (hoursDiff <= 24) {
        return prev;
      }
      // If visited within 48 hours, it's been one day
      else if (hoursDiff <= 48) {
        return prev;
      }
      // If gap is more than 48 hours, reset streak
      else {
        return {
          ...prev,
          currentStreak: 0
        };
      }
    });
  };

  // Toggle theme
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Mark lesson as complete
  const completeLesson = (lessonId, xpEarned = 10) => {
    setProgress(prev => {
      if (prev.completedLessons.includes(lessonId)) {
        return prev; // Already completed
      }

      const newCompletedLessons = [...prev.completedLessons, lessonId];
      
      // Calculate new section progress
      const newSectionProgress = { ...prev.sectionProgress };
      
      // Find which section this lesson belongs to and update its progress
      curriculum.sections.forEach(section => {
        const lessonCount = section.topics.filter(topic => 
          newCompletedLessons.includes(topic.id)
        ).length;
        
        newSectionProgress[section.id] = {
          completed: lessonCount,
          total: section.topics.length
        };
      });

      // Calculate streak
      const now = new Date();
      const lastVisit = prev.lastVisit ? new Date(prev.lastVisit) : null;
      let newStreak = prev.currentStreak || 0;
      let newLongestStreak = prev.longestStreak || 0;

      if (lastVisit) {
        const hoursSinceLastVisit = (now - lastVisit) / (1000 * 60 * 60);
        const daysSinceLastVisit = Math.floor(hoursSinceLastVisit / 24);

        // If it's been less than 24 hours, same day - no change
        // If it's been 24-48 hours, it's the next day - increment
        if (hoursSinceLastVisit > 24 && hoursSinceLastVisit <= 48) {
          newStreak += 1;
        }
        // If gap is more than 48 hours, reset streak
        else if (hoursSinceLastVisit > 48) {
          newStreak = 1;
        }
      } else {
        // First lesson ever
        newStreak = 1;
      }

      // Update longest streak if current is higher
      if (newStreak > newLongestStreak) {
        newLongestStreak = newStreak;
      }
      
      return {
        ...prev,
        completedLessons: newCompletedLessons,
        totalXP: prev.totalXP + xpEarned,
        currentStreak: newStreak,
        longestStreak: newLongestStreak,
        lastVisit: new Date().toISOString(),
        sectionProgress: newSectionProgress
      };
    });
  };

  // Save quiz score
  const saveQuizScore = (quizId, score, totalQuestions) => {
    setProgress(prev => ({
      ...prev,
      quizScores: {
        ...prev.quizScores,
        [quizId]: { score, totalQuestions, date: new Date().toISOString() }
      },
      totalXP: prev.totalXP + (score * 5) // 5 XP per correct answer
    }));
  };

  // Update section progress
  const updateSectionProgress = (sectionId, completed, total) => {
    setProgress(prev => ({
      ...prev,
      sectionProgress: {
        ...prev.sectionProgress,
        [sectionId]: { completed, total }
      }
    }));
  };

  // Check if lesson is completed
  const isLessonCompleted = (lessonId) => {
    return progress.completedLessons.includes(lessonId);
  };

  // Get section progress percentage
  const getSectionProgress = (sectionId) => {
    const section = progress.sectionProgress[sectionId];
    if (!section || section.total === 0) return 0;
    return Math.round((section.completed / section.total) * 100);
  };

  // Get overall progress
  const getOverallProgress = () => {
    const sections = Object.values(progress.sectionProgress);
    if (sections.length === 0) return 0;
    const totalCompleted = sections.reduce((sum, s) => sum + s.completed, 0);
    const totalLessons = sections.reduce((sum, s) => sum + s.total, 0);
    if (totalLessons === 0) return 0;
    return Math.round((totalCompleted / totalLessons) * 100);
  };

  // Get current streak
  const getCurrentStreak = () => {
    return progress.currentStreak || 0;
  };

  // Get longest streak
  const getLongestStreak = () => {
    return progress.longestStreak || 0;
  };

  // Toggle bookmark
  const toggleBookmark = (lessonId) => {
    setProgress(prev => ({
      ...prev,
      bookmarkedLessons: prev.bookmarkedLessons.includes(lessonId)
        ? prev.bookmarkedLessons.filter(id => id !== lessonId)
        : [...prev.bookmarkedLessons, lessonId]
    }));
  };

  // Check if lesson is bookmarked
  const isLessonBookmarked = (lessonId) => {
    return progress.bookmarkedLessons?.includes(lessonId) || false;
  };

  // Reset all progress
  const resetProgress = () => {
    setProgress({
      completedLessons: [],
      quizScores: {},
      totalXP: 0,
      currentStreak: 0,
      longestStreak: 0,
      lastVisit: null,
      bookmarkedLessons: [],
      sectionProgress: {}
    });
  };

  const value = {
    progress,
    theme,
    toggleTheme,
    completeLesson,
    saveQuizScore,
    updateSectionProgress,
    isLessonCompleted,
    getSectionProgress,
    getOverallProgress,
    getCurrentStreak,
    getLongestStreak,
    toggleBookmark,
    isLessonBookmarked,
    resetProgress
  };

  return (
    <LearningContext.Provider value={value}>
      {children}
    </LearningContext.Provider>
  );
};
