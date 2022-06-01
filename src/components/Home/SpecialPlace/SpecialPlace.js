import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './SpecialPlace.css';
import Image from 'react-bootstrap/Image';
const SpecialPlace = () => {
  return (
    <div className='special-place' bg='dark'>
      <Container>
        <Row className='d-flex align-items-center'>
          <Col md={6} xs={12}>
            <h3>WELCOME TO, TOUR PLANET</h3>
            <h1>Nature Awaits For You</h1>
            <p>
              Tourism is defined as travelling to and staying in places outside
              their usual environment for not more than one consecutive year for
              leisure, business and other purposes. Tourism is commonly
              associated with international travel as well as refers to travel
              to another place within the same country.
            </p>
            <div className='d-flex align-items-start py-3'>
              <button className='special-btn'>Learn more</button>
            </div>
          </Col>
          <Col md={6} xs={12}>
            <Image
              className='special-img'
              fluid
              src='https://images.unsplash.com/photo-1553787762-b5f5721f3270?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            ></Image>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SpecialPlace;
