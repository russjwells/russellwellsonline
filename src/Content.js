import React, { Component } from 'react';
import Leftside from './Leftside.js';
import Rightside from './Rightside.js';

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <Leftside />
        <Rightside />
      </div>
    );
  }
}

export default Content;
