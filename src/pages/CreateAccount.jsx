import React from 'react';
import '@styles/Login.scss';
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {

    let navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/Login');
    }

    return (
        <div class="login">
            <div class="form-container">
                <h1 class="title-ac">My Account</h1>
                <form action="/" class="form">
                    <div>
                        <label for="name" class="label">Name</label>
                        <input type="text" id="name" placeholder="your name" class="input input-name" />
                        <label for="email" class="label">Email</label>
                        <input type="text" id="email" placeholder="your@email.com" class="input input-email" />
                        <label for="password" class="label">Password</label>
                        <input type="password" id="password" placeholder="*********" class="input input-password" />
                    </div>
                    <input type="submit" value="Create" class="primary-button login-button" onClick={handleSubmit} />
                </form>
            </div>
        </div>
    );
}

export default CreateAccount;