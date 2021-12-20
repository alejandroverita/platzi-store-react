import React, { useState, useContext } from 'react';
import AppContext from '@context/AppContext';
import BtAddToCartImage from '@icons/bt_add_to_cart.svg';
import iconClose from '@icons/icon_close.png'

import '@styles/ProductItem.scss';


const ProductItem = ({product}) => {
	const { addToCart, removeFromCart } = useContext(AppContext);

	const [addedToCart, setAddedToCart] = useState(false);

	const addToCartHandler = (item) => {
		addToCart(item);
		setAddedToCart(true);
		console.log(item)
	}

	const removefromCartHandler = (item)=>{
		removeFromCart(item);
		setAddedToCart(false)
	}

    return (
        <div className="ProductItem">
			<img src={product.images[2]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				{!addedToCart ?
					<figure onClick ={()=>addToCartHandler(product)}>
						<img className='pointer' src={BtAddToCartImage} alt="Add to cart" />
					</figure>
				:
				<figure onClick={()=>removefromCartHandler(product)}>
					<img className='pointer' src={iconClose} alt="Close" />
				</figure>
				}
				
			</div>
		</div>
    );
}

export default ProductItem; 