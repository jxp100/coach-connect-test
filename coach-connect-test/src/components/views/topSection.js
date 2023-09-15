import React from 'react';
import top from '../images/TopImage.png'
import '../styles/Top.css';
import { useState } from 'react';
import About from './about';


const TopSection = ({ activeButton, onFindCoachClick, onIAmCoachClick }) => {

    return (
        <div className="top-section">
            <div className="text">
                <h1>Connecting Employees to Development Coaches</h1>
                <div className="buttons">
                    <button
                        onClick={() => {
                            onFindCoachClick();
                        }}
                        className={`find-coach-button ${activeButton === 'Find a Coach' ? 'active' : ''}`}
                    >
                        Find a Coach
                    </button>
                    <button
                        onClick={() => {
                            onIAmCoachClick();
                        }}
                        className={`i-am-coach-button ${activeButton === 'I am a Coach' ? 'active' : ''}`}
                    >
                        I am a Coach
                    </button>
                </div>
            </div>
            <div className="image">
                <img src= {top} alt="Top Section Image" />
            </div>
            <div className="top-section">

            </div>
        </div>
    );
};
export default TopSection;
