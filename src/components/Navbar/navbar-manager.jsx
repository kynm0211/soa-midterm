import React from "react";
import "./navbar.css";

export default function navbarManager(){
    return (
        <div className='navbar-container'>
            <div className='navbar-list'>
                <div className='navbar-item'>Table List</div>
                <div className='navbar-item'>Menu</div>
                <div className='navbar-item'>Invoice</div>
                <div className='navbar-item'>History</div>
                <div className='navbar-item'>Account</div>
            </div>
            <div className='navbar-logout'>
                <div>Log Out</div>
            </div>
        </div>
        )
}
