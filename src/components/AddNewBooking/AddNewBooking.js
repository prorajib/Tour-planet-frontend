import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './AddNewBooking.css';
const AddNewBooking = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const uri = 'https://whispering-tundra-62659.herokuapp.com/allbookings';

    fetch(uri, {
      mode: 'no-cors',
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert('Destination Added Successfully!!');
          reset();
        }
      });
  };
  return (
    <div className='Add-destination'>
      <Header></Header>
      <div className='add-destination-wraper'>
        <h2>
          <span className='destination-heading'>Add New</span> Destination
        </h2>
        <span className='destination-head-line'></span>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('name', {
              required: true,
              maxLength: 20,
            })}
            placeholder='Place Name'
            required
          />
          <textarea
            {...register('description')}
            placeholder='Place description'
            required
          />
          <input
            type='number'
            {...register('price')}
            placeholder='Price'
            required
          />
          <input {...register('img')} placeholder='Image Url' required />

          <input type='submit' value='submit' className='submit-form' />
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AddNewBooking;
