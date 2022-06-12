import React from 'react';
import Logo from '../../public/images/logos/logo_yard_sale.svg';
import '../styles/Login.scss';

const Login = () => {
    return (
        <div class="login">
            <div class="form-container">
                <img src={Logo} alt="logo" class="logo" />
                <form action="/" class="form">
                    <label for="email" class="label">Email address</label>
                    <input type="text" id="email" placeholder="your@emal.com" class="input input-email" />
                    <label for="new-password" class="label">Password</label>
                    <input type="password" id="new-password" placeholder="*********" class="input" />
                    <input type="submit" value="Log in" class="primary-button login-button" />
                    <a href="/">Forgot my password</a>
                </form>
                <button class="secondary-button signup-button">Sign up</button>
            </div>
        </div>
    )
}

export default Login;