import React from 'react';
import '../styles/SignUp.css';
import signUpEmployee from '../images/sign-up1.png'
import Header from './header';

const SignUp = () => {
    return (
        <div>
        <Header />
        <div className="sign-up-container">
            <div className="left-section">
                <h7>Searching for a Coach?</h7>
                <h8>Look no further with CoachConnect!</h8>
                <img src= {signUpEmployee} alt="Sign Up Employee" className="bottom" />
            </div>
                <div className="right-section">
                    <h9>Please Select:</h9>
                <div className="buttons">
                    <button>Find a Coach</button>
                    <button>I am a Coach</button>
                </div>
                <h2>Sign Up</h2>
                <form className='form'>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />
                    <button type="submit">Sign Up</button>
                </form>
                <p>Already on CoachConnect? <a href="/login">Log In</a></p>
            </div>
            </div>
        </div>
    );
};

export default SignUp;
