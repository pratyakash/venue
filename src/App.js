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
        header
      </AppBar>
    );
  }
}

export default App;
