import React, { useContext, useState } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import Checkout from '@pages/Checkout';
import '@styles/Other.scss';
import Flecha from '@icon/flechita.svg';
import Orders from '../pages/Orders';

const MyOrder = () => {
    const [ toggle, setToggle ] = useState(false);
    const [ toggleOrders, setToggleOrders ] = useState(false);
    const { state } = useContext(AppContext);

    const sumTotal = () => {
        return state.cart.reduce((total, product) => total + product.price, 0);
    }
    return (
        <aside className="product-detail-cart">
            <div className="title-container" onClick={() => setToggleOrders(true)} >
                <img src={Flecha} alt="arrow"  />
                <p className="title-cart">My order</p>
            </div>
            <div class="my-order-content">
                {state.cart.map(product => <OrderItem key={`orderItem-${product.id}`} product={product} />)}  {/* //se pone key={`orderItem-${product.id}`} para que no se repita el id del elemento */}
                <div className="order">
                    <p>
                        <span>Total:</span>
                    </p>
                    <p>$ {sumTotal()} </p>
                </div>
                <button className="primary-button" onClick={() => setToggle(true)} >Checkout</button>
            </div>
            {toggle && <Checkout setToggle={setToggle}/>}
            {toggleOrders && <Orders setToggleOrders={setToggleOrders}/>}
        </aside>
    )
}

export default MyOrder;