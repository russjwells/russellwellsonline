import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Title">Russell Wells</div>
        <div className="Menu">
          <div>resume</div>
          <div>showcase</div>
          <div>about</div>
        </div>
      </div>
    );
  }
}

export default Header;
