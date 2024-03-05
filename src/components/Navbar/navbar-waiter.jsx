import React from 'react';
import '../Navbar/navbar.css'
import { Link } from 'react-router-dom';

export default function navbar() {
    return (
        <div className='navbar-container'>
            <div className='navbar-list'>
                <Link to="/table" className='navbar-item'>Table List</Link>
                <Link to="/menu" className='navbar-item'>Menu</Link>
                <Link to="/order" className='navbar-item'>Order</Link>
                <Link to="/history" className='navbar-item'>History</Link>
            </div>
            <div className='navbar-logout'>
                <div>Log Out</div>
            </div>
        </div>
    )
}