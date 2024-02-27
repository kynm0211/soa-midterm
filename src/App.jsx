import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Footer from '../src/components/Footer/footer'
import Navbar from './components/Navbar/navbar';
import Table from './pages/TableList/index'
import TableOrder from './pages/TableOrder/index';
export default function App() {
  return (
    <Router>
      <div>
        {/* <Navbar/> */}
        <Routes>
          <Route path="" element={<Login />} />
          {/* <Route path="" element= {<Waiter/>}/> */}
          <Route path="/table" element={<Table />} />
          <Route path="/tableOrder" element={<TableOrder />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};
