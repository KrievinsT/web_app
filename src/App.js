import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage'; 
import LoginPage from './components/LoginPage'; 
import RegisterPage from './components/RegisterPage';
import UserData from './components/UserData';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/userdata" element={<UserData />} />
      </Routes>
    </Router>
  );
};

export default App;
