import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

import './PlaceForm.css';
const PlaceForm = (props) => {
  const { name, description, price, img } = props.booking;
  const [user] = useAuthState(auth);

  const nameRef = useRef();
  const emailRef = useRef();
  const placeNameRef = useRef();
  const desRef = useRef();
  const priceRef = useRef();
  const imgRef = useRef();
  const statusRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();
  const handleSubmit = (e) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const placeName = placeNameRef.current.value;
    const placeDescriptions = desRef.current.value;
    const placePrice = priceRef.current.value;
    const placeImg = imgRef.current.value;
    const status = statusRef.current.value;
    const address = addressRef.current.value;
    const phone = phoneRef.current.value;
    const storeBooking = {
      name,
      email,
      placeName,
      placeDescriptions,
      placePrice,
      placeImg,
      status,
      address,
      phone,
    };

    const uri = 'https://whispering-tundra-62659.herokuapp.com/placebooking';

    fetch(uri, {
      mode: 'no-cors',
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(storeBooking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert('Booking Confirmed Successfully!');
        }
      });
    e.preventDefault();
  };
  return (
    <div className='confirm-booking-form'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          ref={placeNameRef}
          placeholder='Place Name'
          value={name || ''}
          readOnly
        />
        <textarea
          type='text'
          ref={desRef}
          placeholder='description'
          value={description || ''}
          readOnly
        />
        <input
          type='number'
          ref={priceRef}
          placeholder='Price'
          value={price || ''}
          readOnly
        />
        <input
          placeholder='Image Url'
          ref={imgRef}
          value={img || ''}
          readOnly
        />
        <input
          type='text'
          ref={nameRef}
          placeholder='User Name'
          value={user?.displayName || ''}
          readOnly
        />
        <input
          type='email'
          ref={emailRef}
          placeholder='Email'
          value={user?.email || ''}
          readOnly
        />
        <input type='text' ref={addressRef} placeholder='Address' required />
        <input type='number' ref={phoneRef} placeholder='phone' required />
        <input
          type='text'
          ref={statusRef}
          value='pending'
          className='disableinput'
          readOnly
        />
        <input
          type='submit'
          value='confirm booking'
          className='confirmbutton'
        />
      </form>
    </div>
  );
};

export default PlaceForm;
