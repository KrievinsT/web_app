import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage'; 
import LoginPage from './Components/LoginPage'; 
import RegisterPage from './Components/RegisterPage';
import UserData from './Components/UserData';

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
