import React from 'react';
import OrderItem from '../components/OrderItem';
import '../styles/Other.scss';

const Orders = () => {
    return (
        <div class="my-order">
            <div class="my-order-container">
                <h1 class="title">My Order</h1>
                <div class="my-order-content">
                    <OrderItem />
                </div>
            </div>
        </div>
    )
}

export default Orders;