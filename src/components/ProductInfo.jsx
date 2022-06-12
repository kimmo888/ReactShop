import React from 'react';
import '../styles/Other.scss';
import BikePhoto from 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
import ButtonAdd from '../../public/images/icons/bt_add_to_cart.svg';

const ProductInfo = () => {
    return (
        <>
        <img src={BikePhoto} alt="bike" />
        <div className="productinfo">
            <p>$35.00</p>
            <p>Bike</p>
            <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
            <button className="primary-button">
                <img src={ButtonAdd} alt="add to cart" />
                Add to cart
            </button>
        </div>
        </>
    )
}

export default ProductInfo;