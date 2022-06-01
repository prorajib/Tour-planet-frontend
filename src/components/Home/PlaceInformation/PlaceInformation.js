import React from 'react';
import './PlaceInformation.css';
const PlaceInformation = (props) => {
  const { name, description, price, img } = props.booking;
  return (
    <div className='place-order-info'>
      <img src={img} alt='' className='img-fluid' />
      <h3>{name}</h3>
      <h4>${price}</h4>
      <p>{description}</p>
    </div>
  );
};

export default PlaceInformation;
