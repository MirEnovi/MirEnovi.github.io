import React, { Component } from 'react';
// import logo from '../../logo.svg';
import './App.css';

import Nav from '../global/nav/nav';
import Aboutme from '../global/aboutme/aboutme';
import Home from '../global/home/home';
import Projects from '../global/projects/projects';
import Contact from '../global/contact/contact';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Home/>
        <div id='aboutme'></div>
        <Aboutme/>
        <div id='projects'></div>
        <Projects/>
        <div  id='contact'></div>
        <Contact/>
      </div>
    );
  }
}

export default App;
