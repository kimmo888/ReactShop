import React from 'react';
import OrderItem from '../components/OrderItem';
import Menu from '../components/Menu';
import MobileMenu from '../components/MobileMenu';
import '../styles/Other.scss';

const Checkout = () => {
    return (
        <div className="my-order">
            <div className="my-order-container">
                <h1 className="title">My Order</h1>
                <div className="my-order-content">
                    <div className="order">
                        <p>
                            <span>03.25.21</span>
                            <span>6 articles</span>
                        </p>
                        <p>$560.00</p>
                    </div>
                </div>
                <OrderItem />
            </div>
        </div>
    );
}

export default Checkout;