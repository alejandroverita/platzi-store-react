import React from 'react';

import ProductInfo from '../components/ProductInfo';

import '../styles/ProductDetail.scss';

const ProductDetail = () => {
    return (
        <aside className='ProductDetail'>
            <div className="ProductDetail-title-container">
                <img src="../../assets/icons/flechita.svg" alt="Back" />
                <p className="title">My order</p>

            </div>
            
            <ProductInfo/>
            
        </aside>
    );
}

export default ProductDetail;