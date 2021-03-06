import React, {memo} from 'react';

import './cart-item.styles.scss';

const CartItem = ({item:{imageUrl, name, price, quantity}}) => (
    <div className="cart-item">
        <img src={imageUrl} alt="cart-item"/>
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">{quantity} X ${price}</span>
        </div>
    </div>
);

export default memo(CartItem);