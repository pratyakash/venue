import React, { Component } from 'react';
import './resources/styles.css';
import Header from'./components/header_footer/Header';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu';
import IconButton  from '@material-ui/core/IconButton';

class App extends Component {
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor:'#2f2f2f',
          boxShadow:'none',
          padding:'10px 0px'
        }}
      >
        <Toolbar>
          <div className="header_logo">
            <div className=" font_righteous header_logo_venue">The Venue</div>
            <div className="header_logo_title">Musical Events</div>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default App;
