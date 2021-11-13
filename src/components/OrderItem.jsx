import React from 'react';

import IconClose from '@icons/icon_close.png'

import '../styles/OrderItem.scss';

const OrderItem = () => {
    return (
        <div className="OrderItem">
            <figure>
                <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Bike" />
            </figure>
            <p>Bike</p>
            <p>$120.00</p>
            <img src={IconClose} alt="close" />
        </div> 
    );
}

export default OrderItem;