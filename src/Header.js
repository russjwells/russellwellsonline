import React, { Component } from 'react';
import {Link} from 'react-router';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Title">Russell Wells</div>
        <div className="Menu">
          <Link to='/' activeClassName='ActiveMenuItem'><div>resume</div></Link>
          <Link to='/showcase' activeClassName='ActiveMenuItem'><div>showcase</div></Link>
          <Link to='/about' activeClassName='ActiveMenuItem'><div>about</div></Link>
        </div>
      </div>
    );
  }
}

export default Header;
