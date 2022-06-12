import React from 'react';
import '../styles/Login.scss';
import Logo from '../../public/images/logos/logo_yard_sale.svg';

const NewPassword = () => {
    return(
    <div className="login">
        <div className="form-container">
            <img src={Logo} alt="logo" className="logo"/>
            <h1 className="title1">Create a new Password</h1>
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
export default NewPassword;