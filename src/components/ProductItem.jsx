import React, { useState } from 'react';

import BtAddToCart from '@icons/bt_add_to_cart.svg';

import '../styles/ProductItem.scss';


const ProductItem = ({product}) => {
	const [cart, setCart] = useState(false);

	const addToCartHandler = () => {
		setCart(!cart);
	}

    return (
        <div className="ProductItem">
			<img src={product.images[2]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick ={addToCartHandler}>
					<img src={!cart ? BtAddToCart : "Added To Cart"} alt="Add to cart" />
				</figure>
			</div>
		</div>
    );
}

export default ProductItem; 