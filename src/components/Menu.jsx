import React, {useState} from 'react';
import Orders from '@pages/Orders';
import '@styles/Other.scss';
import { Link } from 'react-router-dom';

const Menu = () => {
    const [ toggleOrders, setToggleOrders ] = useState(false);
    return (
        <div className="desktop-menu">
            <ul>
                <li>
                    <Link to='/' className="title2" onClick={() => setToggleOrders(true)} >My orders</Link>
                </li>
                <li>
                    <Link to="/Account" className="title2">My account</Link>
                </li>
                <li>
                    <Link to="/Login">Sign out</Link>
                </li>
            </ul>
            <div>
            {toggleOrders && <Orders setToggleOrders={setToggleOrders}/>}
            </div>
        </div>
    )
}

export default Menu;