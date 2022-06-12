import React from 'react';
import '../styles/Other.scss';
import BikePhoto from 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

const ShoppingCartItem = () => {
    return (
        <div class="shopping-car">
                <figure>
                    <img src={BikePhoto} alt="Bike"/>
                </figure>
                <p>Bike</p>
                <p>$30.00</p>
            </div>
    )
}

export default ShoppingCartItem;