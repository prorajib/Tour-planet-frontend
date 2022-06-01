import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import PlaceInformation from '../PlaceInformation/PlaceInformation';
import PlaceForm from '../PlaceForm/PlaceForm';
import './PlaceOrder.css';
const PlaceOrder = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState({});
  useEffect(() => {
    const uri = `https://whispering-tundra-62659.herokuapp.com/allbookings/${id}`;
    fetch(uri)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, [id]);
  return (
    <div>
      <Header></Header>
      <div className='placeOrder-container'>
        <h2 className='text-center my-2'>
          <span className='confirm-color'>Confirm</span> Your Booking
        </h2>
        <span className='placeorder-line'></span>
        <Container>
          <Row>
            <Col md={6} xs={12}>
              <PlaceInformation booking={booking}></PlaceInformation>
            </Col>
            <Col md={6} xs={12}>
              <PlaceForm booking={booking}></PlaceForm>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default PlaceOrder;
