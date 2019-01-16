import React, { Component } from 'react';
import './resources/styles.css';

import {Element} from 'react-scroll';

import Header from'./components/header_footer/Header';
import Featured from './components/featured/index';
import VenueInfo from './components/VenueInfo/VenueInfo';
import Highlights from './components/Highlights/HighLights';
import Pricing from './components/Pricing/Pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer'


class App extends Component {
  render() {
    return (
      <div style={{
        height:"1000px",
        background:'cornflowerblue'
      }}>
         <Header />
         <Featured />
         <VenueInfo />
         <Highlights />
         <Pricing />
         <Location />
         <Footer />
      </div>
     
    );
  }
}

export default App;
