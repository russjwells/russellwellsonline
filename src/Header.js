import React, { Component } from 'react';
import {Link, IndexLink} from 'react-router';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Title">Russell Wells</div>
        <div className="Menu">
          <IndexLink to='/' style={{ textDecoration: 'none' }} activeClassName='ActiveMenuItem'><div className='MenuItem'>resume</div></IndexLink>
          <Link to='/showcase' style={{ textDecoration: 'none' }} activeClassName='ActiveMenuItem'><div className='MenuItem'>showcase</div></Link>
          <Link to='/about' style={{ textDecoration: 'none' }} activeClassName='ActiveMenuItem'><div className='MenuItem'>about</div></Link>
        </div>
      </div>
    );
  }
}

export default Header;
