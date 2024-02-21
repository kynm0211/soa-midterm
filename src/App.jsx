// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login'; // Import the Login component

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Login />} /> {/* Use element prop */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};
