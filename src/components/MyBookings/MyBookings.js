import React, { useEffect, useState } from 'react';
import './MyBookings.css';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
const MyBookings = () => {
  const [user] = useAuthState(auth);
  const { displayName, email } = user;
  const [mybookings, setMybookings] = useState([]);

  useEffect(() => {
    const uri = `https://whispering-tundra-62659.herokuapp.com/mybooking/${user?.email}`;
    fetch(uri)
      .then((res) => res.json())
      .then((data) => {
        setMybookings(data);
        console.log(data);
      });
  }, [user.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure you want to Delete?');
    if (proceed) {
      const uri = `https://whispering-tundra-62659.herokuapp.com/mybooking/${id}`;
      fetch(uri, {
        mode: 'no-cors',
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert('Booking Deleted Successfully!');
            const remaingBooking = mybookings.filter(
              (mybooking) => mybooking._id != id
            );
            setMybookings(remaingBooking);
          }
        });
    }
  };
  return (
    <div>
      <Header></Header>
      <div className='my-booking'>
        <h2>
          <span className='my-name'>{displayName}</span>, Here is your Booked
          Informations.
        </h2>
        <div className='booking-container'>
          {mybookings.map((mybooking) => (
            <div className='single-booking'>
              <img src={mybooking.placeImg} alt='' />
              <h3>{mybooking.placeName}</h3>
              <h4>${mybooking.placePrice}</h4>
              <h5>Status: {mybooking.status}</h5>
              <button
                className='booking-delete'
                onClick={() => handleDelete(mybooking._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyBookings;
