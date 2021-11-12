import React from 'react';
import '../styles/RecoveryPassword.scss';

const RecoveryPassword = () => {
    return (
        <div className="RecoveryPassword">
            <div className="RecoveryPassword-container">
                <img src="./assets/logos/logo_yard_sale.svg" alt="logo" className="logo" />
                <h1 className="title">
                    Email has been sent!
                </h1>
                <p className="subtitle">
                    Please check your inbox for instructions on how to reset the password
                </p>
                <div className="email-image">
                    <img src="./assets/icons/email.svg" alt="email image" />
                </div>
                <button type='button' className="primary-button login-button">
                    Login
                </button>
                <p className='resend'>
                    Didn't receive the email? <a href="/">Resend</a>
                </p>
            </div>
        </div>
    );
}

export default RecoveryPassword;