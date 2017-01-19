import React, { Component } from 'react';
import './App.css';

import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Site from './Site.js';
import Resume from './Resume.js';
import Showcase from './Showcase.js'
import About from './About.js'

class App extends Component {
  render() {
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={Site}>
          <IndexRoute component={Resume}></IndexRoute>
          <Route path="showcase" component={Showcase}></Route>
          <Route path="about" component={About}></Route>
        </Route>
      </Router>
    );
  }
}

export default App;
