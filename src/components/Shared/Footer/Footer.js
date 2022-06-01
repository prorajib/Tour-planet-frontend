import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
  const user = { name: 'Rajib Das', email: 'rajib9756@gmail.com' };

  return (
    <div className='footer-main py-5'>
      <Container>
        <Row>
          <Col md={3} xs={12}>
            <div>
              <h2>Tour Planet</h2>
              <p>
                “Travel makes one modest. You see what a tiny place you occupy
                in the world” – Gustave Flaubert
              </p>
              <div className='footer-icon'>
                <i className='fab fa-facebook '></i>
                <i className='fab fa-twitter'></i>
                <i className='fab fa-linkedin'></i>
                <i className='fab fa-instagram'></i>
              </div>
            </div>
          </Col>
          <Col md={3} xs={12} className=''>
            <div>
              <h2>Quick Links</h2>
              <div>
                <Link to='/' className='quick-link'>
                  Home
                </Link>
              </div>
              <div className='quick-link'>
                <Link to='/contact' className='quick-link'>
                  contact
                </Link>
              </div>
              <div>
                <Link to='/about' className='quick-link'>
                  about
                </Link>
              </div>
              <div>
                {!user?.email && (
                  <Link to='/login' className='quick-link'>
                    Log In
                  </Link>
                )}
              </div>
            </div>
          </Col>

          <Col md={3} xs={12}>
            <div>
              <h2>Our Address</h2>
              <div>
                <span>Kamal Ataturk Avenue, Banani, Dhaka</span>
              </div>
              <div className='my-2'>
                <span>718-570-8650</span>
              </div>
              <div>
                <span>tourplanet@mail.com</span>
              </div>
              <div className='mt-2'>
                <span>09.00 - 17.00</span>
              </div>
            </div>
          </Col>

          <Col md={3} xs={12}>
            <div>
              <h2>Newsletter</h2>
              <input type='text' placeholder='Email' className='footer-input' />
              <button className='footer-btn'>Subscribe</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
