import React from 'react';
import {toIdr} from 'utils/currency';
import './MenuItem.scss';

const MenuItem = ({
  image,
  name,
  category,
  realPrice,
  discountPrice,
  deliveryFee,
  props,
}) => {
  return (
    <div className="item-container">
      <img src={image} alt={name} className="item-img" />
      <div className="item-description">
        <div className="item-info">
          <h4>{name}</h4>
          <span className="item-category">{category.join('•')}</span>
          <span className="item-delivery-fee">
            {deliveryFee > 0 ? `Delivery : ${deliveryFee}` : 'Free Delivery'}
          </span>
        </div>
        <div className="item-price">
          {discountPrice ? (<span className="real-price">{toIdr(discountPrice)}</span>) : ''}
          <span className="final-price">{discountPrice ? toIdr(discountPrice) : toIdr(realPrice)}</span>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
