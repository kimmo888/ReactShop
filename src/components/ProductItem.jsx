import React from 'react';
import '../styles/Other.scss';
import BikePhoto from 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
import ButtonAdd from '../../public/images/icons/bt_add_to_cart.svg';

const ProductItem = () => {
    return (
        <div className="products-card">
                <img src={BikePhoto} alt="Bike" />
                <div className="product-info">
                    <div>
                        <p>$120.00</p>
                        <p>Bike</p>
                    </div>
                    <figure>
                        <img src={ButtonAdd} alt="button Add" />
                    </figure>
                </div>
            </div>
    )
}

export default ProductItem;