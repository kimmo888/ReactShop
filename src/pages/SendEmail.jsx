import React from 'react';
import '@styles/Login.scss';
import logo from '@logos/logo_yard_sale.svg';
import email from '@icon/email.svg'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



const SendEmail = () => {

    let navigate = useNavigate();

	const handleClick = () => {
		navigate('/Login');
	}

    return (
        <div className="login">
        <div className="form-container">
            <img src={logo} alt="logo" className="logo"/>
            <h1 className="title1">Email has been sent!</h1>
            <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
            <div className="email-image">
                <img src={email} alt="email"/>
            </div>
            <button className="primary-button login-button" onClick={handleClick} >Login</button>
            <p className="resend">
                <span>Didnt receive the email?</span>
                <Link to="/PasswordRecovery"> Resend</Link>
            </p>
        </div>
    </div>
    )
}

export default SendEmail