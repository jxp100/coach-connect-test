import React from 'react';
import logo from '../images/CCLogo.png'
import '../styles/Header.css';
import '../styles/font.css';
import { Link } from 'react-scroll';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="Coach Connect Logo" />
            </div>
            <div className="nav-links">
                <Link
                    to="about-section" // This should match the id of your About section
                    spy={true}
                    smooth={true}
                    offset={20} // Adjust the offset as needed
                    duration={500} // Duration of the scroll animation
                >
                    About
                </Link>
                <Link
                    to="faq-section" // This should match the id of your About section
                    spy={true}
                    smooth={true}
                    offset={-10} // Adjust the offset as needed
                    duration={500} // Duration of the scroll animation
                >
                    FAQs
                </Link>
                <a href="/signup">Sign Up</a>
                <a href="/login">Login</a>
            </div>
        </div>
    );
};

export default Header;
