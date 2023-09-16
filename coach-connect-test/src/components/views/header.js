import React from 'react';
import logo from '../images/CCLogo.png'
import '../styles/Header.css';
import '../styles/font.css';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <RouterLink to= "/">
                    <img src={logo} alt="Coach Connect Logo" />
                </RouterLink>
            </div>
            <div className="nav-links">
                <ScrollLink
                    to="about-section" // This should match the id of your About section
                    spy={true}
                    smooth={true}
                    offset={20} // Adjust the offset as needed
                    duration={500} // Duration of the scroll animation
                >
                    About
                </ScrollLink>
                <ScrollLink
                    to="faq-section" // This should match the id of your About section
                    spy={true}
                    smooth={true}
                    offset={-10} // Adjust the offset as needed
                    duration={500} // Duration of the scroll animation
                >
                    FAQs
                </ScrollLink>
                <a href="/signup">Sign Up</a>
                <a href="/login">Login</a>
            </div>
        </div>
    );
};

export default Header;
