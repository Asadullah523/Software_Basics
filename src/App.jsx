import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { LearningProvider } from './contexts/LearningContext';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Roadmap from './pages/Roadmap';
import LessonView from './pages/LessonView';
import Profile from './pages/Profile';
import Bookmarks from './pages/Bookmarks';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <LearningProvider>
      <BrowserRouter>
        <div className="app">
          <Header onToggleSidebar={toggleSidebar} />
          <div className="app-layout">
            <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/roadmap" element={<Roadmap />} />
                <Route path="/bookmarks" element={<Bookmarks />} />
                <Route path="/learn/:sectionId/:topicId" element={<LessonView />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/about" element={<div className="placeholder-page"><h1>About Us</h1><p>Learn more about CodeFoundations</p></div>} />
                <Route path="*" element={<div className="placeholder-page"><h1>404 - Page Not Found</h1></div>} />
              </Routes>
              <Footer />
            </main>
          </div>
        </div>
      </BrowserRouter>
    </LearningProvider>
  );
}

export default App;
