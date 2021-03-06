import React from 'react';

import logo from '@logos/logo_yard_sale.svg';

import '../styles/NewPassword.scss';

const NewPassword = () => {
    return (
        <div className="NewPassword">
            <div className="NewPassword-container">
                <img src={logo} alt="logo" className="logo" />
                <h1 className="title">
                    Create a new password
                </h1>
                <p className="subtitle">
                    Enter a new password for your account 
                </p>
                <form action="" className="form">
                    <label for="password" className="label">
                        Password
                    </label>
                    <input type="password" id="password" className="input input-password" />

                    <label for="new-password" className="label">
                        Re-enter password
                    </label>
                    <input type="new-password" id="new-password" className="input input-new-password" />
                    <input type='submit' value="Confirm" className="primary-button login-button" />
                </form>
            </div>
        </div> 
    );
}

export default NewPassword;