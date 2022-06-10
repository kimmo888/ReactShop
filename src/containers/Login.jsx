import React from 'react';
import '../styles/Login.scss';
import logo from '../../public/images/logos/logo_yard_sale.svg';

const Login = () => {
    return(
    <div className="login">
        <div className="form-container">
            <img src={logo} alt="logo" className="logo"/>
            <h1 className="title">Create a new Password</h1>
            <p className="subtitle">Enter a new Password for you account</p>
            <form action="/" className="form">
                <label for="password" className="label">Password</label>
                <input type="password" id="password" placeholder="*********" className="input"/>
                <label for="new-password" className="label">Password</label>
                <input type="password" id="new-password" placeholder="*********" className="input"/>
                <input type="submit" value="Confirm" className="primary-button login-button"/>
            </form>
        </div>
    </div>
    );
}
export default Login;