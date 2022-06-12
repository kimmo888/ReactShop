import React from 'react';
import '../styles/Other.scss';
import Flecha from '../../public/images/icons/flechita.svg';

const Order = () => {
    return (
        <div class="orders">
                    <p>
                        <span>03.25.21</span>
                        <span>6 articles</span>
                    </p>
                    <p>$560.00</p>
                    <img src={Flecha} alt="arrow"/>
                </div>
    )
}

export default Order;