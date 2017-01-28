import React, { Component } from 'react';
import './App.css';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Site from './Site.js';
import Resume from './Resume.js';
import Showcase from './Showcase.js'
import About from './About.js'

class App extends Component {
  render() {
    return (
      <Router history={ browserHistory }>
        <Route path="/" component={Site}>
          <IndexRoute component={About}></IndexRoute>
          <Route path="showcase" component={Showcase}></Route>
          <Route path="resume" component={Resume}></Route>
        </Route>
      </Router>
    );
  }
}

export default App;
