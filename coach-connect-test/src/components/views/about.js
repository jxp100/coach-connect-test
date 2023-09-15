import React from 'react';
import '../styles/About.css';
import createProfile from '../images/create-profile.png';
import preferences from '../images/preferences.png';
import handshake from '../images/handshake.png'



const About = () => {
    return (
        <div className="about-container">

                <div>
                    <h2>How It Works</h2>

                    <h4>Coach Connect helps to ease the process of matching Employees to Development Coaches based on their goals and requirements to help you invest in your employees so they can reach their highest potential.</h4>

                    <div className="card-container">
                        <div className="card">
                            <p>1. Create Your Profile</p>
                            <img src={createProfile} alt="Image 1" />
                            <h3>Sign Up to join the network of employees to find a coach </h3>


                        </div>
                        <div className="card">
                            <p>2. Set Your Preferences</p>
                            <img src={preferences} alt="Image 2" />
                            <h3>Let us know all about your development goals and learning preferences so that we can find you an appropriate coach</h3>
                        </div>
                        <div className="card">
                            <p>3. Get Connected!</p>
                            <img src={handshake} alt="Image 3" />
                            <h3>Our matching algorithm will provide you with a list of the most compatible coaches for you to get in touch with</h3>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default About;
