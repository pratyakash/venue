import React, { Component } from 'react';
import './resources/styles.css';
import Header from'./components/header_footer/Header';


class App extends Component {
  render() {
    return (
      <div style={{
        height:"1000px",
        background:'cornflowerblue'
      }}>
         <Header />
      </div>
     
    );
  }
}

export default App;
