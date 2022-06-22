import { useState } from "react";


const initialState = {
    cart: [],
}

const useInitialState = ()=>{
    const [state, setState] = useState(initialState);

    const addToCart = (payload)=>{ //payload es el nombre que se pone por convención
        setState({
            ...state,
            cart:[ ...state.cart, {...payload, idCart:state.cart.length+1}, ]  // aca ponemos idCart para que no se repita el id del elemento en el carrito de compras y le sumamos 1 para que no se repita el id del elemento en el carrito de compras, asi si se borra un elemento con el mismo nombre no se borra el elemento anterior.
        });
    };

    const removeFromCart = (payload)=>{
        setState({
            ...state,
            cart: state.cart.filter(item => item.idCart !== payload.idCart),
        });
    }

    return {
        state,
        addToCart,
        removeFromCart
    };
}


export default useInitialState;