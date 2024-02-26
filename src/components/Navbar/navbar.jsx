import React from 'react';
import '../Navbar/navbar.css'

export default function navbar() {
    return (
        <div className='navbar-container'>
            <div className='navbar-list'>
                <div>Table List</div>
                <div>Menu</div>
                <div>Order</div>
                <div>History</div>
            </div>
            <div>
                <div>Log Out</div>
            </div>
        </div>
    )
}