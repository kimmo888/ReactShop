import React from 'react';
import '../styles/Other.scss';
import Close from '../../public/images/icons/icon_close.png';

const OrderItem = ({ product }) => {
    return (
        <div className="shopping-car">
                <figure>
                    <img src={ product.images[0] } alt= {product.title} />
                </figure>
                <p> {product.title} </p>
                <p> {product.price} </p>
                <img src={Close} alt="close"/>
            </div>
    )
}

export default OrderItem;