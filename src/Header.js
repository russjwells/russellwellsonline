import React, { Component } from 'react';
import {Link} from 'react-router';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Title">Russell Wells</div>
        <div className="Menu">
          <Link to='/'><div>resume</div></Link>
          <Link to='/showcase'><div>showcase</div></Link>
          <Link to='/about'><div>about</div></Link>
        </div>
      </div>
    );
  }
}

export default Header;
