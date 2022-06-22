import React from 'react';
import ProductInfo from '@components/ProductInfo';
import '@styles/Other.scss';
import Close from '@icon/icon_close.png';

const ProductDetail = () => {
    return (
        <aside className="product-detail">
            <div className="product-detail-close">
                <img src={Close} alt="icon_close" />
            </div>
            <ProductInfo />
        </aside>
    )
}

export default ProductDetail;