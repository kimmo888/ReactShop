import React from 'react';
import '@styles/PasswordRecovery.scss';
import logo from '@logos/logo_yard_sale.svg'
import { useNavigate } from 'react-router-dom';

const PasswordRecovery = () => {

	let navigate = useNavigate();

	const handleClick = () => {
		navigate('/SendEmail');
	}

	return (
		<div className="PasswordRecovery">
			<div className="PasswordRecovery-container">
				<img src={logo} alt="logo" className="logo" />
				<h1 className="title">Password recovery</h1>
				<p className="subtitle">Inform the email address used to create your account</p>
				<form action="/" className="form">
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" id="email" className="input input-email" />
					<input type="submit" value="Confirm" className="primary-button login-button" onClick={handleClick} />
				</form>
			</div>
		</div>
	);
}

export default PasswordRecovery;