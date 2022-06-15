import { useState } from "react";


const initialState = {
    cart: [],
}

const useInitialState = ()=>{
    const [state, setState] = useState(initialState);

    const addToCart = (payload)=>{ //payload es el nombre que se pone por convención
        setState({
            ...state,
            cart:[ ...state.cart, {...payload, idCart:state.cart.length+1}, ]
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