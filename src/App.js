import React, { Component } from 'react';
import './resources/styles.css';
import Header from'./components/header_footer/Header';
import Featured from './components/featured/index';
import VenueInfo from './components/VenueInfo/VenueInfo';
import Highlights from './components/Highlights/HighLights'


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
      </div>
     
    );
  }
}

export default App;
