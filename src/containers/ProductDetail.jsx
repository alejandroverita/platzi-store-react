import React from 'react';

import ProductInfo from '../components/ProductInfo';

import arrow from '@icons/flechita.svg';

import '../styles/ProductDetail.scss';

const ProductDetail = () => {
    return (
        <aside className='ProductDetail'>
            <div className="ProductDetail-title-container">
                <img src={arrow} alt="Back" />
                <p className="title">My order</p>

            </div>
            
            <ProductInfo/>
            
        </aside>
    );
}

export default ProductDetail;