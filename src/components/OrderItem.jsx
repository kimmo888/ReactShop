import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import '@styles/Other.scss';
import Close from '@icon/icon_close.png';

const OrderItem = ({ product }) => {
    const { removeFromCart } = useContext(AppContext);

const handleRemove = () => {
    removeFromCart(product);
}

    return (
        <div className="shopping-car">
                <figure>
                    <img src={ product.images[0] } alt= {product.title} />
                </figure>
                <p> {product.title}  </p>
                <p> {product.price} </p>
                <img src={Close} alt="close" onClick={()=>handleRemove(product.id)} />
            </div>
    )
}

export default OrderItem;