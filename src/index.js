import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import ReactGA from 'react-ga'

ReactGA.initialize('UA-131525485-5', { standardImplementation: true, siteSpeedSampleRate: 100 })

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
