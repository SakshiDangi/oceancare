import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Quiz from './pages/Quiz';
import Calculator from './pages/Calculator';
import Volunteer from './pages/Volunteer';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <BrowserRouter>
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={
          isAuthenticated ? <Navigate to="/" replace /> : <Login onLogin={handleLogin} />
        } />
        <Route path="/signup" element={
          isAuthenticated ? <Navigate to="/" replace /> : <Signup onLogin={handleLogin} />
        } />
        <Route path="/profile" element={
          isAuthenticated ? <Profile /> : <Navigate to="/login" replace />
        } />
        <Route path="/quiz" element={
          isAuthenticated ? <Quiz /> : <Navigate to="/login" replace />
        } />
        <Route path="/calculator" element={
          isAuthenticated ? <Calculator /> : <Navigate to="/login" replace />
        } />
        <Route path="/volunteer" element={
          isAuthenticated ? <Volunteer /> : <Navigate to="/login" replace />
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;