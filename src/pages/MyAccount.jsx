import React from 'react';
import '@styles/Login.scss';
import { useNavigate } from 'react-router-dom';


const MyAccount = () => {

    let navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/NewPassword');
    }

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
            </form>
                <button  className="secondary-button" onClick={handleSubmit} >Edit</button>
        </div>
    </div>
    )
}

export default MyAccount;