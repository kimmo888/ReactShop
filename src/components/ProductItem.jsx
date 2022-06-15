import React, {useContext} from 'react';
import '../styles/Other.scss';
import AppContext from '../context/AppContext';
import ButtonAdd from '@icon/bt_add_to_cart.svg';

const ProductItem = ( {product} ) => { // poner el parámetro a iterar en este caso product que es el resultado de el hooks useGetProducts.js
    //?const [cart, setCart] = useState([]); //este es de useState, pero se cambio por useContext
    // se declara el valor inicial del elemento setCart, los valores por defecto son vacíos, por que si no se muestra en la web con el valor que se ponga.
    const { addToCart } = useContext(AppContext);

    const handleClick = item => { // por, sobre el evento  onClick
        addToCart(item);
    }
    const { id, title, price, images } = product; //forma para desestructurar los props de react en este caso product.

    return (
        <div className="products-card">
                <img src={images} alt={title} />
                <div className="product-info">
                    <div>
                        <p>$ {price} </p>
                        <p> {title} </p>
                    </div>
                    <figure onClick={()=> handleClick(product)}>
                        <img src={ButtonAdd} alt="button Add" />
                    </figure>
                </div>
            </div>
    )
}

export default ProductItem;