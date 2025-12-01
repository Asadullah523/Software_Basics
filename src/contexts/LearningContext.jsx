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
      streak: 0,
      lastVisit: null,
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
      
      return {
        ...prev,
        completedLessons: newCompletedLessons,
        totalXP: prev.totalXP + xpEarned,
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

  // Reset all progress
  const resetProgress = () => {
    setProgress({
      completedLessons: [],
      quizScores: {},
      totalXP: 0,
      streak: 0,
      lastVisit: null,
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
    resetProgress
  };

  return (
    <LearningContext.Provider value={value}>
      {children}
    </LearningContext.Provider>
  );
};
