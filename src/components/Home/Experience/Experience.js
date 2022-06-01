import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Experience.css';
const Experience = () => {
  return (
    <div className='experience'>
      <h2>
        <span className='ex-head-color'>WHY</span>CHOOSE US
      </h2>
      <div className='ex-head'></div>

      <Container>
        <Row>
          <Col md={3} xs={12} lg={3} className='my-2'>
            <div className='ex-card'>
              <i className='fas fa-compass'></i>
              <h2>Experienced</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                voluptas esse maiores optio! Error esse quia nesciunt! Nobis,
                ipsa distinctio!
              </p>
            </div>
          </Col>
          <Col md={3} xs={12} lg={3} className='my-2'>
            <div className='ex-card'>
              <i className='fas fa-globe'></i>
              <h2>Afordable</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                voluptas esse maiores optio! Error esse quia nesciunt! Nobis,
                ipsa distinctio!
              </p>
            </div>
          </Col>
          <Col md={3} lg={3} xs={12} className='my-2'>
            <div className='ex-card'>
              <i className='fas fa-wallet'></i>
              <h2>Worldwide</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                voluptas esse maiores optio! Error esse quia nesciunt! Nobis,
                ipsa distinctio!
              </p>
            </div>
          </Col>
          <Col md={3} lg={3} xs={12} className='my-2'>
            <div className='ex-card'>
              <i className='fas fa-headphones'></i>
              <h2>24/7 Service</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                voluptas esse maiores optio! Error esse quia nesciunt! Nobis,
                ipsa distinctio!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Experience;
