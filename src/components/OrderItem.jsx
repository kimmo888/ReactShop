import React from 'react';
import '../styles/Other.scss';
import Close from '../../public/images/icons/icon_close.png';

const OrderItem = () => {
    return (
        <div className="shopping-car">
                <figure>
                    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                </figure>
                <p>Bike</p>
                <p>$30.00</p>
                <img src={Close} alt="close"/>
            </div>
    )
}

export default OrderItem;