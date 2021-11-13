import React from 'react';

import logo from '@logos/logo_yard_sale.svg';

import '../styles/Login.scss';

const Login = () => {
    return (
        <div className="Login">
        <div className="Login-container">
            <img src={logo} alt="logo" className="logo" /> 
            
            <form action="/" className="form">
                <label for="email" className="label">
                    Email address
                </label>
                <input type="text" id="email" className="input input-email" placeholder="example@mail.com"/>

                <label for="password" className="label">
                    Password
                </label>
                <input type="password" id="password" className="input input-password" placeholder='*******'/>
            </form>
            <div className="button-container">
                <button type='button' value='Log in' className="primary-button login-button">Sign up</button>
                <a href="./recovery-password" >Forgot my password</a> 
            </div>
        </div>
    </div>
    );
}

export default Login;