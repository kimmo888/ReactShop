import React, {useContext, useState} from 'react';
import Orders from '@pages/Orders';
import AppContext from '@context/AppContext';
import '@styles/Other.scss';

const Menu = () => {
    const [ toggleOrders, setToggleOrders ] = useState(false);
    const { state } = useContext(AppContext);
    return (
        <div className="desktop-menu">
        <ul>
            <li>
                <a href="" className="title2" onClick={() => setToggleOrders(true)} >My orders</a>
            </li>
            <li>
                <a href="/" className="title2">My account</a>
            </li>
            <li>
                <a href="/">Sign out</a>
            </li>
        </ul>
        <div>
        {state.toggleOrders && <Orders setToggleOrders={setToggleOrders}/>}
        </div>
        </div>
    )
}

export default Menu;