import React, {useState, useContext } from 'react';
import '@styles/Other.scss';
import Menu from '@components/Menu';
import MobileMenu from '@components/MobileMenu';
import MyOrder from '../containers/MyOrder';
import logo from '../Assets/logos/logo_yard_sale.svg';
import AppContext from '../context/AppContext';
import iconMenu from '../Assets/icons/icon_menu.svg';
import iconShoppingCar from '../../public/images/icons/icon_shopping_cart.svg';
//import logo from '@logos/logo_yard_sale.svg'  //usando alias

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const [toggleMobile, setToggleMobile] = useState(false);
    const { state } = useContext(AppContext);

    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu);
    }

    const handleToggleMobile = () => {
        setToggleMobile(!toggleMobile);
    }

    return (
    <nav>
        <div className="container-menu">
            <img src={iconMenu} alt="menu" className="menu"  onClick={handleToggleMobile} />
            {toggleMobile && <MobileMenu />}
        <div className="navbar-left">
            <img src={logo} alt="logo" className="logo1"/>
            <ul>
                <li>
                    <a href="/">all</a>
                </li>
                <li>
                    <a href="/">Clothes</a>
                </li>
                <li>
                    <a href="/">Electronics</a>
                </li>
                <li>
                    <a href="/">Furnitures</a>
                </li>
                <li>
                    <a href="/">Toys</a>
                </li>
                <li>
                    <a href="/">Others</a>
                </li>
            </ul>
        </div>
        <div className="navbar-right">
            <ul>
                <li className="navbar-email" onClick={handleToggleMenu}>your@email.com</li>
                <li className="navbar-shopping-car" onClick={()=> setToggleOrders(!toggleOrders)} > {/* se pone como una function anónima para que no genere error al ser llamada, por que era llamada multiples veces,  de esta forma se llame solo cuando se ejecute
                si el arrow function se pone con {} en vez de () hay que poner return   */}
                    <img src={iconShoppingCar} alt="shopping cart"/>
                    { state.cart.length > 0 ? <div> { state.cart.length} </div> : null } {/* //si el carrito tiene algo, muestra el numero de elementos, si no, no muestra nada */ }
                </li>
            </ul>
        </div>
        </div>
        {toggleMenu ? <Menu /> : ""}
        {toggleOrders ? <MyOrder /> : ""}
    </nav>
    );
}

export default Header;