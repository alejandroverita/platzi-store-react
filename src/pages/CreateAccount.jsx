import React from 'react';

import '../styles/CreateAccount.scss';


const CreateAccount = () => {
    return (
        <div className="CreateAccount">
            <div className="CreateAccount-container">
                <h1 className="title">
                    My account
                </h1>
                
                <form action="" className="form">
                    <label for="name" className="label">
                        Name
                    </label>
                    <input type="text" placeholder='Name' id="name" className="input input-name" />

                    <label for="email" className="label">
                        Email address
                    </label>
                    <input type="email" placeholder='example@mail.com' id="email" className="input input-email" />

                    <label for="password" className="label">
                        Password
                    </label>
                    <input type="password" placeholder='******' id="password" className="input input-password" />

                    
                    <input type='submit' value="Create account" className="primary-button login-button" />
                </form>
            </div>
        </div>
    );
}

export default CreateAccount;