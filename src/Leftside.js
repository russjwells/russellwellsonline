import React, { Component } from 'react';
import headshot from './rwo_headshot.png';

class Leftside extends Component {
  render() {
    return (
      <div className="Leftside">
        <img src={headshot} alt="headshot" width="394" height="526"/>
        <p>russ@russdigital.com</p>
        <p>github.com/russjwells</p>
      </div>
    );
  }
}

export default Leftside;
