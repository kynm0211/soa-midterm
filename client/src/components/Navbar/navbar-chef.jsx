import React from 'react';
import '../Navbar/navbar.css'
import { Link } from 'react-router-dom';

export default function navbar() {
    return (
        <div className='navbar-container'>
            <div className='navbar-list'>
                <Link to="/menu" className='navbar-item'>Menu</Link>
                <Link to="/order" className='navbar-item'>Order</Link>
                <Link to="/history" className='navbar-item'>History</Link>
            </div>
            <div className='navbar-logout'>
                <Link to="/" className='logout-item'>Log Out</Link> 
            </div>
        </div>
    )
}