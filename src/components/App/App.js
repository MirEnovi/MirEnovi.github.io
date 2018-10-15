import React, { Component } from 'react';
// import logo from '../../logo.svg';
import './App.css';

import Nav from '../global/nav/nav';
import Inicio from '../global/inicio/lnicio';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav/>
          <Inicio/>
        </header>
      </div>
    );
  }
}

export default App;
