import React, { useContext} from 'react';

import AppContext from '@context/AppContext';

import OrderItem from '@components/OrderItem';

import arrow from '@icons/flechita.svg';

import '@styles/MyOrder.scss';

const MyOrder = () => {
	
	const {state, toggleOrder} = useContext(AppContext);

	
	

	const sumTotal = () => {
		const reducer = (accum, currentVal) => accum + currentVal.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}
	
	

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img className='pointer' src={arrow} alt="arrow" onClick={()=>toggleOrder()} />
				<p className="title">My order</p>
			</div>
			<div className="MyOrder-content">
				{state.cart.map(product => (
					<OrderItem product={product} key={`orderItem-${product.id}`}/>
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
			
		</aside>
	);
}

export default MyOrder;