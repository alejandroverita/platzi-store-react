import { useState } from 'react';

const initialState = {
    cart: [],
    total:0,
    orderIsOpen: false,
    menuIsOpen: false,
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        if(!state.cart.includes(payload)){
            setState({
                ...state,
                cart: [...state.cart, payload],
                total: state.total + payload.price
            });
        }
    };

    const removeFromCart = (payload) => {
        const newArray = state.cart.filter(product => product != payload);
        setState({
            ...state,
            cart:[...newArray],
            total: state.total - payload.price
        });
    }

    const toggleOrder = () => {
        setState({
            ...state,
            orderIsOpen: !state.orderIsOpen,
        });
    };

    const toggleMenu = () => {
        setState({
            ...state,
            menuIsOpen: !state.menuIsOpen,
        });
    };

    return {
        state,
        addToCart,
        removeFromCart,
        toggleOrder,
        toggleMenu,
    }

}

export default useInitialState
