import React from 'react';

import '../styles/Login.scss';

const Login = () => {
    return (
        <div className="Login">
        <div className="Login-container">
            <img src="../../assets/logos/logo_yard_sale.svg" alt="logo" className="logo" /> 
            
            <form action="/" className="form">
                <label for="email" className="label">
                    Email address
                </label>
                <input type="text" id="email" className="input input-email" placeholder="example@mail.com"/>

                <label for="password" className="label">
                    Password
                </label>
                <input type="password" id="password" className="input input-password" placeholder='*******'/>

                <input type='submit' value="Log in" className="primary-button login-button" />

                <a href="./screenPassword.html" >Forgot my password</a> 
            </form>

            <button className="signUp">Sign up</button>
         
        </div>
    </div>
    );
}

export default Login;