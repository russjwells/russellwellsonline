import React, { Component } from 'react';
import headshot from './rwo_headshot.png';

class Leftside extends Component {
  render() {
    return (
      <div className="Leftside">
        <img src={headshot} alt="headshot" width="394" height="526"/>
        <div className="QuickContacts">
          <p>russjwells@gmail.com</p>
          <p>(760) 936 1704</p>
          <p>github.com/russjwells</p>
          <p>behance.net/russdigital</p>
        </div>
        <div className="Message">
          message
        </div>
      </div>
    );
  }
}

export default Leftside;
