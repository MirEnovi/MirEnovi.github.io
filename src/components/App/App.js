import React, { Component } from 'react';
// import logo from '../../logo.svg';
import './App.css';

import Nav from '../global/nav/nav';
import Aboutme from '../global/aboutme/aboutme';
import Home from '../global/home/home';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Home/>
        <Aboutme/>
      </div>
    );
  }
}

export default App;
