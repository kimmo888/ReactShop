import React, {useContext} from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import '@styles/Other.scss';

const Orders = ({setToggleOrders}) => {
    const { state } = useContext(AppContext);
    return (
        <div className="my-order">
            <div className="my-order-container">
                <h1 className="title" onClick={() => setToggleOrders(false)} >My Orders </h1>
                <div className="my-order-content">
                {state.cart.map(product => <OrderItem key={`orderItem-${product.id}`} product={product} />)}
                </div>
            </div>
            <div className='bottomCheckout'></div>
        </div>
    )
}

export default Orders;