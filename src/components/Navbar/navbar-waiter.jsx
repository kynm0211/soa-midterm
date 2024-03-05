import React from 'react';
import '../Navbar/navbar.css'

export default function navbar() {
    return (
        <div className='navbar-container'>
            <div className='navbar-list'>
                <div className='navbar-item'>Table List</div>
                <div className='navbar-item'>Menu</div>
                <div className='navbar-item'>Order</div>
                <div className='navbar-item'>History</div>
            </div>
            <div className='navbar-logout'>
                <div>Log Out</div>
            </div>
        </div>
    )
}