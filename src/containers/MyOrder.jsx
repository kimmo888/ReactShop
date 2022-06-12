import React from 'react';
import OrderItem from '../components/OrderItem';
import '../styles/Other.scss';
import Flecha from '../../public/images/icons/flechita.svg';

const MyOrder = () => {
    return (
        <aside className="product-detail-cart">
            <div className="title-container">
                <img src={Flecha} alt="arrow" />
                <p className="title-cart">My order</p>
            </div>
            <div class="my-order-content">
                <OrderItem />
                <div className="order">
                    <p>
                        <span>Total:</span>
                    </p>
                    <p>$560.00</p>
                </div>
                <button className="primary-button">Checkout</button>
            </div>
        </aside>
    )
}

export default MyOrder;