import React from 'react';
import './HomePage.css';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import SpecialPlace from '../SpecialPlace/SpecialPlace';
import Destinations from '../Destinations/Destinations';
import Experience from '../Experience/Experience';
import { Router, Routes } from 'react-router-dom';
import Banner from '../Banner/Banner';
const HomePage = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <SpecialPlace></SpecialPlace>
      <Destinations></Destinations>
      <Experience></Experience>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
