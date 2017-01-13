import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Leftside from './Leftside.js';
import Content from './Content.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Leftside />
        <Content />
      </div>
    );
  }
}

export default App;
