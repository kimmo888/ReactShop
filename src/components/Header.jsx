import React from 'react';
import '@styles/Other.scss';
import logo from '../Assets/logos/logo_yard_sale.svg';
import iconMenu from '../Assets/icons/icon_menu.svg';
import iconShoppingCar from '../../public/images/icons/icon_shopping_cart.svg';
//import logo from '@logos/logo_yard_sale.svg'  //usando alias

const Header = () => {
    return (
    <nav>
        <div className="container-menu">
            <img src={iconMenu} alt="menu" className="menu"/>
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
                <li className="navbar-email">your@email.com</li>
                <li className="navbar-shopping-car">
                    <img src={iconShoppingCar} alt="shopping cart"/>
                    <div>2</div>
                </li>
            </ul>
        </div>
        </div>
    </nav>
    );
}

export default Header;