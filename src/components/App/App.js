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
        <header className="App-header">
          <Nav/>
          <Home/>
          <Aboutme/>
        </header>
      </div>
    );
  }
}

export default App;
