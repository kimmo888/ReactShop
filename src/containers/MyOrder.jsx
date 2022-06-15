import React, { useContext } from 'react';
import OrderItem from '../components/OrderItem';
import AppContext from '../context/AppContext';
import '../styles/Other.scss';
import Flecha from '../../public/images/icons/flechita.svg';

const MyOrder = () => {
    const { state } = useContext(AppContext);
    return (
        <aside className="product-detail-cart">
            <div className="title-container">
                <img src={Flecha} alt="arrow" />
                <p className="title-cart">My order</p>
            </div>
            <div class="my-order-content">
                {state.cart.map(item => <OrderItem key={`orderItem-${item.id}`} item={item} />)}  {/* //se pone key={`orderItem-${item.id}`} para que no se repita el id del elemento */}
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