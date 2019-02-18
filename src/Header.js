import React, { Component } from 'react';
import {Link, IndexLink} from 'react-router';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Title">Russell Wells</div>
        <div className="Menu">
          <IndexLink to='/' style={{ textDecoration: 'none' }} activeClassName='ActiveMenuItem' className='MenuItem'>About Me</IndexLink>
          <Link to='/software' style={{ textDecoration: 'none' }} activeClassName='ActiveMenuItem' className='MenuItem'>Software</Link>
          <Link to='/design' style={{ textDecoration: 'none' }} activeClassName='ActiveMenuItem' className='MenuItem'>Design</Link>
          <Link to='/resume' style={{ textDecoration: 'none' }} activeClassName='ActiveMenuItem' className='MenuItem'>Resume</Link>
        </div>
      </div>
    );
  }
}

export default Header;
