import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { createBrowserHistory } from 'history';
import Site from './Site.js';
import Resume from './Resume.js';
import Software from './Software.js'
import Design from './Design.js'
import About from './About.js'



import ReactGA from 'react-ga'
//const history = createBrowserHistory();

// Initialize google analytics page view tracking
browserHistory.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});


class App extends Component {
  render() {
    return (
      <Router history={ browserHistory }>
        <Route path="/" component={Site}>
          <IndexRoute component={About}></IndexRoute>
          <Route path="software" component={Software}></Route>
          <Route path="design" component={Design}></Route>
          <Route path="resume" component={Resume}></Route>
        </Route>
      </Router>
    );
  }
}

export default App;
