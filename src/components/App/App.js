import React, { Component } from 'react';
// import logo from '../../logo.svg';
import './App.css';

import Nav from '../global/nav/nav';
import Aboutme from '../global/aboutme/aboutme';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav/>
          <Aboutme/>
        </header>
      </div>
    );
  }
}

export default App;
