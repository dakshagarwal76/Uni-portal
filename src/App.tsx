import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Attendance } from './pages/Attendance';  // Named import for Attendance
import { Calendar } from './pages/Calendar';      // Named import for Calendar
import { TimeTable } from './pages/TimeTable';    // Named import for TimeTable
import NavLink from './components/Navlink';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-500">
        {/* Header with toggle button */}
        <header className="flex items-center justify-between px-6 py-4 bg-gray-100 dark:bg-gray-800 shadow-md">
          <h1 className="text-2xl font-bold">📊 USAR Attendance</h1>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-300"
          >
            {isDarkMode ? '🌞' : '🌙'}
          </button>
        </header>

        {/* Sidebar + Pages */}
        <div className="flex flex-1">
          {/* Sidebar */}
          <aside className="w-64 bg-gray-50 dark:bg-gray-800 p-4 space-y-2">
            <NavLink to="/" icon={<span>🏠</span>} text="Dashboard" />
            <NavLink to="/attendance" icon={<span>📋</span>} text="Attendance" />
            <NavLink to="/calendar" icon={<span>📅</span>} text="Calendar" />
            <NavLink to="/timetable" icon={<span>⏰</span>} text="TimeTable" />
          </aside>

          {/* Page Content */}
          <main className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/timetable" element={<TimeTable />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
