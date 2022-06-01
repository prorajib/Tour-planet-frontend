import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './ManageBooking.css';
const ManageBooking = () => {
  const [manageBooking, setManageBooking] = useState([]);
  useEffect(() => {
    fetch('https://whispering-tundra-62659.herokuapp.com/manageallorders')
      .then((res) => res.json())
      .then((data) => setManageBooking(data));
  }, [manageBooking]);

  // Delete booking
  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure, you want to delete?');
    if (proceed) {
      const uri = `https://whispering-tundra-62659.herokuapp.com/mybooking/${id}`;
      fetch(uri, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert('Booking Deleted Successfully!');
            const remainingBooking = manageBooking.filter(
              (booking) => booking._id != id
            );
            setManageBooking(remainingBooking);
          }
        });
    }
  };

  // update booking status
  const handleUpdate = (id) => {
    const updateStatus = manageBooking.find((update) => update?._id === id);
    updateStatus.status = 'approved';
    const uri = `https://whispering-tundra-62659.herokuapp.com/mybooking/${id}`;
    fetch(uri, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updateStatus),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert('Status updated successfully');
        }
      });
  };

  return (
    <div>
      <Header></Header>
      <div className='manage-booking'>
        <h2>
          <span className='manage-booking-color'> Manage Your</span> Bookings
        </h2>
        <div className='line'></div>
        <Container>
          <Row xs={1} md={3} className='g-4 py-3'>
            {manageBooking.map((booking) => (
              <Col key={booking?._id}>
                <Card className='managecard'>
                  <Card.Img
                    variant='top'
                    src={booking?.placeImg}
                    className='manage-img'
                  />
                  <Card.Body>
                    <Card.Title>{booking?.name}</Card.Title>
                    <h5>Place: {booking?.placeName}</h5>
                    <Card.Text>
                      {booking?.placeDescriptions.slice(0, 100)}
                      ...
                    </Card.Text>
                    <p>${booking?.placePrice}</p>
                    <p>Status: {booking?.status}</p>
                    <button
                      className='delete-btn'
                      onClick={() => handleDelete(booking?._id)}
                    >
                      Delete
                    </button>
                    <button
                      className='status-btn'
                      onClick={() => handleUpdate(booking?._id)}
                    >
                      {booking?.status}
                    </button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ManageBooking;
