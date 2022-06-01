import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Destinations.css';
const Destinations = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    const uri = 'https://whispering-tundra-62659.herokuapp.com/allbookings';
    fetch(uri)
      .then((res) => res.json())
      .then((data) => {
        setPlaces(data);
      });
  }, []);
  return (
    <div className='destination-main'>
      <h1>
        {' '}
        <span className='des-head-color'>All</span>Destinations
      </h1>
      <div className='des-head'></div>
      <Container>
        <Row xs={1} md={2} lg={4} className='g-4'>
          {places.map((place) => (
            <Col key={place._id} className='card-col'>
              <Card className='card-style'>
                <Card.Img variant='top' src={place.img} className='card-img' />
                <Card.Body className='card-body'>
                  <Card.Title className='card-title'>{place.name}</Card.Title>
                  <Card.Text className='card-description'>
                    {place.description.slice(0, 80)}...
                  </Card.Text>
                  <Card.Text className='card-price'>${place.price}</Card.Text>
                  <Link to={`/placeorder/${place._id}`}>
                    <button className='card-button'>Book Now</button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Destinations;
