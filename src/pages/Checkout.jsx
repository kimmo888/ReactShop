import React, {useContext} from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import '@styles/Other.scss';

const Checkout = ({ setToggle }) => {
    const { state } = useContext(AppContext);

    const today = new Date(Date.now()).toLocaleString().split(', ')[0];
    const sumTotal = () => {
        return state.cart.reduce((total, product) => total + product.price, 0);
    }

    return (
        <div className="my-order">
            <div className="my-order-container">
            <div className="title-container" onClick={() => setToggle(false)}>
					<h1 className="title">My order</h1>
				</div>
                <div className="my-order-content">
                    <div className="order">
                        <p>
                            <span> {today} </span>
                            <span> {state.cart.length} articles</span>
                        </p>
                        <p>$ {sumTotal()}</p>
                    </div>
                </div>
                {state.cart.map(product => <OrderItem key={`orderItem-${product.id}`} product={product} />)}
            </div>
            <div className='bottomCheckout'></div>
        </div>
    );
}

export default Checkout;