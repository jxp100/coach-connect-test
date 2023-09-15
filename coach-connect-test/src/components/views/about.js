import React from 'react';
import '../styles/About.css';
import createProfile from '../images/create-profile.png';
import preferences from '../images/preferences.png';
import handshake from '../images/handshake.png';

const About = ({ activeButton }) => {
    return (
        <div className="about-container" id="about-section">
            <div>
                <h2>How It Works</h2>
                <h4>Coach Connect helps to ease the process of matching Employees to Development Coaches based on their goals and requirements to help you invest in your employees so they can reach their highest potential.</h4>

                <div className="card-container">
                    {activeButton === 'Find a Coach' && (
                        <>
                            <div className="card">
                                <p>1. Create Your Profile</p>
                                <img src={createProfile} alt="create-profile" />
                                <h3>Sign Up to join the network of employees to find a coach</h3>
                            </div>
                            <div className="card">
                                <p>2. Set Your Preferences</p>
                                <img src={preferences} alt="preferences" />
                                <h3>Let us know all about your development goals and learning preferences so that we can find you an appropriate coach</h3>
                            </div>
                            <div className="card">
                                <p>3. Get Connected!</p>
                                <img src={handshake} alt="get-connected" />
                                <h3>Our matching algorithm will provide you with a list of the most compatible coaches for you to get in touch with</h3>
                            </div>
                        </>
                    )}

                    {activeButton === 'I am a Coach' && (
                        <>
                            {/* Add your "I am a Coach" content here */}
                            <div className="card">
                                <p>1. Create Your Profile</p>
                                <img src={createProfile} alt="create-profile" />
                                <h3>Sign Up to join the network of coaches looking to coach an employee </h3>
                            </div>
                            <div className="card">
                                <p>2. Set your Preferences</p>
                                <img src={preferences} alt="preferences" />
                                <h3>Let us know all about your development specialities, qualifications and preferences so that we can find you an appropriate employee to coach</h3>
                            </div>
                            <div className="card">
                                <p>3. Get Connected!</p>
                                <img src={handshake} alt="get-connected" />
                                <h3>Our matching algorithm will provide you with a list of the most compatible employees for you to get in touch with</h3>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default About;
