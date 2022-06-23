import React, {useRef} from 'react';
import Logo from '@logos/logo_yard_sale.svg';
import '@styles/Login.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const form = useRef(null);

    const handleSubmit = ()=>{  //si no se pone type="button" en el botón manda la info y no se ve la captura de la info pra esto podemos, poner como valor en el const handleSubmit = (event)=>{, y en la parte de abajo ponemos event.preventDefault(); para que no mande la información y se mantenga en la misma pagina, pero es mas sencillo poner en la etiqueta del button que ejecuta la accion type="button"
        const formData = new FormData(form.current);
        const data = {
            username: formData.get('email'),
            password: formData.get('new-password')
        }
        console.log(data);
    }

    let navigate = useNavigate();

    const handleClick = () => {
        navigate('/Signup');
    }

    const handleUrl = ()=>{
        navigate('/');
    }


    return (
        <div className="login">
            <div className="form-container">
                <img src={Logo} alt="logo" className="logo" />
                <form action="/" className="form" ref ={form} >
                    <label htmlFor="email" className="label">Email address</label>
                    <input type="text" name="email" placeholder="your@emal.com" className="input input-email" />
                    <label htmlFor="new-password" className="label">Password</label>
                    <input type="password" name="new-password" placeholder="*********" className="input" />
                    <button type="button" className="primary-button login-button" onClick={handleUrl} onClickCapture={handleSubmit} > Log In</button>
                    <Link to="/PasswordRecovery">Forgot my password</Link>
                </form>
                <button className="secondary-button signup-button" onClick={handleClick}> Sign up </button>
            </div>
        </div>
    )
}

export default Login;