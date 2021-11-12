import React from 'react';

import Order from '../components/Order';

import '../styles/Checkout.scss'

const Checkout = () => {
    return (
        <div className="Checkout">
        <div className="Checkout-container">
            <h1 className='title'>My order</h1>
            <Order/>

            <div className="shopping-cart">
                <figure>
                    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Bike"/>
                </figure>
                <p>Bike</p>
                <p>$120.00</p>
            </div> 
            <div className="shopping-cart">
                <figure>
                    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Bike"/>
                </figure>
                <p>Bike</p>
                <p>$120.00</p>
            </div> 
            <div className="shopping-cart">
                <figure>
                    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Bike" />
                </figure>
                <p>Bike</p>
                <p>$120.00</p>
            </div> 

        </div>
    </div>
    );
}

export default Checkout;