import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './About.css';
import { Col, Container, Row } from 'react-bootstrap';
const About = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div>
      <Header></Header>
      <div className='about-us'>
        <h1>
          <span className='about-color'>About</span> Us
        </h1>
      </div>
      <Container>
        <Row>
          <Col>
            <p className='about-txt'>
              Welcome to Tour Planet. We are one of reputed tourism based
              company in Bangladesh. We help people travel to their dream
              destinations at a affordable price. If you have any complain,
              don't be hesitate, please feel free to contact Us By
              tourplanet@gmail.com Thanks for visiting our Website tourPlanet.
            </p>
          </Col>
        </Row>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default About;
