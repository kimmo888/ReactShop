import React from 'react';
import '@styles/Login.scss';

const MyAccount = () => {
    return (
        <div className="login">
        <div className="form-container">
            <h1 className="title-ac">My Account</h1>
            <form action="/" className="form">
                <div>
                    <label for="name" className="label">Name</label>
                    <p className="value">Camila Yoko</p>
                    <label for="email" className="label">Email</label>
                    <p className="value">camilayoko@gmail.com</p>
                    <label for="password" className="label">Password</label>
                    <p className="value">*********</p>
                </div>
                <input type="submit" value="Edit" className="secondary-button" />
            </form>
        </div>
    </div>
    )
}

export default MyAccount;