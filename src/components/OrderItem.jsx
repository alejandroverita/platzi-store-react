import React from 'react';

import IconClose from '@icons/icon_close.png'

import '../styles/OrderItem.scss';

const OrderItem = ({product}) => {
    
    return (
        <div className="OrderItem">
            <figure>
                <img src={product.images[2]} alt={product.title} />
            </figure>
            <p>{product.title}</p>
            <p>${product.price}</p>
            <img src={IconClose} alt="close" />
        </div> 
    );
}

export default OrderItem;