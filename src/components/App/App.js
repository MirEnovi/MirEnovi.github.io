import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';

import Nav from '../global/nav/nav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav/>

        </header>
      </div>
    );
  }
}

export default App;
