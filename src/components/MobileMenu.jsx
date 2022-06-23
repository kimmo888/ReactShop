import React, {useState} from 'react';
import '@styles/Other.scss';
import {Link} from 'react-router-dom';
import Orders from '@pages/Orders';

const MobileMenu = () => {

    const [ toggleOrders, setToggleOrders ] = useState(false);
    return (
        <div>
            <div class="mobile-menu">
                <ul>
                    <li>
                        <Link to="/">CATEGORIES</Link>
                    </li>
                    <li>
                        <Link to="/">all</Link>
                    </li>
                    <li>
                        <Link to="/">Clothes</Link>
                    </li>
                    <li>
                        <Link to="/">Electronics</Link>
                    </li>
                    <li>
                        <Link to="/">Furnitures</Link>
                    </li>
                    <li>
                        <Link to="/">Toys</Link>
                    </li>
                    <li>
                        <Link to="/">Others</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/" onClick={() => setToggleOrders(true)} >My orders</Link>
                    </li>
                    <li>
                        <Link to="/Account">My account</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/NewPassword" class="email">your@email.com</Link>
                    </li>
                    <li>
                        <Link to="/Login" class="sign-out">Sign out</Link>
                    </li>
                </ul>
            </div>
            {toggleOrders && <Orders setToggleOrders={setToggleOrders}/>}
        </div>
    )
}

export default MobileMenu;