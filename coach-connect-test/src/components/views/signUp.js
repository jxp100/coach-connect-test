import React from 'react';
import '../styles/SignUp.css';
import signUpEmployee from '../images/sign-up1.png'

const SignUp = () => {
    return (
        <div className="sign-up-container">
            <div className="left-section">
                {/* Logo and headings */}
                <img src="your-logo.png" alt="Logo" />
                <h1>Searching for a Coach?</h1>
                <h2>Look no further with CoachConnect!</h2>
                <img src= {signUpEmployee} alt="Sign Up Employee" className="bottom" />
            </div>
            <div className="right-section">
                {/* Buttons, sign-up form, and text */}
                <div className="buttons">
                    <button>Find a Coach</button>
                    <button>I am a Coach</button>
                </div>
                <h2>Sign Up</h2>
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />
                    <button type="submit">Sign Up</button>
                </form>
                {/* <p>Already on CoachConnect? <a href="#">Log In</a></p> */}
            </div>
        </div>
    );
};

export default SignUp;
