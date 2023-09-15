import React from 'react';
import logo from './images/CCLogo.png'
import './styles/Header.css';
import './styles/font.css'

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="Coach Connect Logo" />
            </div>
            <div className="nav-links">
                <a href="/about">About</a>
                <a href="/signup">Sign Up</a>
                <a href="/login">Login</a>
            </div>
        </div>
    );
};

export default Header;
