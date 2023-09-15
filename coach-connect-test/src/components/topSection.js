import React from 'react';
import top from './images/TopImage.png'
import './styles/Top.css';


const TopSection = () => {
    return (
        <div className="top-section">
            <div className="text">
                <h1>Connecting Employees to Development Coaches</h1>
                <div className="buttons">
                    <button className="find-coach-button" >Find a Coach</button>
                    <button className="i-am-coach-button">I am a Coach</button>
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
