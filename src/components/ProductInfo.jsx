import React from 'react';

import ShoppingCartItem from './ShoppingCartItem';

import '../styles/ProductInfo.scss';

const ProductInfo = () => {
    return (
        <div className="ProductInfo">       
            
            <ShoppingCartItem />
            
            <div class="product-info">
            <p>$35,00</p>
            <p>Bike</p>
            <p>With its funcional and practical interio, this refrigerator also fulfills a decorative function, adding personality and a retro-vintage aesthetic to your kitchen or workspace</p>
            <button class='primary-button add-to-cart-button'>
                <img src="./assets/icons/bt_add_to_cart.svg" alt="" />
                Add to cart
            </button>
        </div>
        </div>
    );
}

export default ProductInfo;