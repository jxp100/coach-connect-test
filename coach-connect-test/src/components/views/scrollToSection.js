import React from 'react';
import '../styles/ScrollToSection.css';
import '../styles/font.css';
import chevronBlue from '../images/down-chevron-blue.svg';
import chevronWhite from '../images/down-chevron-white.svg';

import { useState } from 'react';


const ScrollToSection = ({ text, targetPage }) => {

    const [isHovered, setIsHovered] = useState(false);

    const scrollToPage = () => {
        const element = document.getElementById(targetPage);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={`scroll-to-section ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={scrollToPage}
>
            <span>{text}</span>
            <div className='down-image'>
                {isHovered ? <img src={chevronWhite} alt="Hover Chevron" /> : <img src={chevronBlue} alt="Down Chevron" />}
            </div>
        </div>
    );
};

export default ScrollToSection;
