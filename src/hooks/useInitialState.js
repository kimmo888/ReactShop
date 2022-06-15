import { useState } from "react";


const initialState = {
    cart: [],
}

const useInitialState = ()=>{
    const [state, setState] = useState(initialState);

    const addToCart = (payload)=>{ //payload es el nombre que se pone por convención
        setState({
            ...state,
            cart:[ ...state.cart, payload ]
        });
    };

    const removeFromCart = (payload)=>{
        setState({
            ...state,
            cart: state.cart.filter(product => product.id !== payload.id),
        });
    }

    return {
        state,
        addToCart,
        removeFromCart
    };
}


export default useInitialState;