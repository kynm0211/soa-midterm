import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Footer from '../src/components/Footer/footer'

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};
