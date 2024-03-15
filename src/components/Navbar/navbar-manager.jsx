import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function navbarManager(){
    return (
        <div className='navbar-container'>
            <div className='navbar-list'>
                <Link to="/table" className='navbar-item'>Table List</Link>
                <Link to="/menu" className='navbar-item'>Menu</Link>
                <Link to="/invoice" className='navbar-item'>Invoice</Link>
                <Link to="/account" className='navbar-item'>Account</Link>
            </div>
            <div className='navbar-logout'>
                <Link to="/" className='logout-item'>Log Out</Link>
            </div>
        </div>
        )
}
