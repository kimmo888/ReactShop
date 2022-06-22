import React, {useContext, useState} from 'react';
import Orders from '@pages/Orders';
import AppContext from '@context/AppContext';
import '@styles/Other.scss';
import { Link } from 'react-router-dom';

const Menu = ({ toggleOrders, setToggleOrders }) => {
    const { state } = useContext(AppContext);
    return (
        <div className="desktop-menu">
            <ul>
                <li className="title2" onClick={() => setToggleOrders(true)}>
                    <a href=''   >My orders</a>
                </li>
                <li>
                    <Link to="/Login" className="title2">My account</Link>
                </li>
                <li>
                    <a href="/">Sign out</a>
                </li>
            </ul>
            <div>
            {state.toggleOrders && <Orders setToggleOrders={setToggleOrders}/>}
            </div>
            {toggleOrders ? <Orders /> : ""}
        </div>
    )
}

export default Menu;