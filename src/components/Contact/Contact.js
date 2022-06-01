import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Contact.css';
const Contact = () => {
  return (
    <div>
      <Header></Header>
      <div className='contact'>
        <h1>
          <span className='contact-color'>Contact</span> Us
        </h1>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
