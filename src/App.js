import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Registration from './Registration/Registration';
import Login from './Login/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registration />} /> {/* Registration page as home */}
        <Route path="/login" element={<Login />} /> {/* Login page */}
      </Routes>
    </Router>
  );
}

export default App;

