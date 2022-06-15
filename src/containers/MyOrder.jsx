import React, { useContext } from 'react';
import OrderItem from '../components/OrderItem';
import AppContext from '../context/AppContext';
import '../styles/Other.scss';
import Flecha from '../../public/images/icons/flechita.svg';

const MyOrder = () => {
    const { state } = useContext(AppContext);
    const sumTotal = () => {
        return state.cart.reduce((total, product) => total + product.price, 0);
    }
    return (
        <aside className="product-detail-cart">
            <div className="title-container">
                <img src={Flecha} alt="arrow" />
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
                <button className="primary-button">Checkout</button>
            </div>
        </aside>
    )
}

export default MyOrder;