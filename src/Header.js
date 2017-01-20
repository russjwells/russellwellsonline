import React, { Component } from 'react';
import {Link, IndexLink} from 'react-router';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Title">Russell Wells</div>
        <div className="Menu">
          <IndexLink to='/' activeClassName='ActiveMenuItem'><div className='MenuItem'>resume</div></IndexLink>
          <Link to='/showcase' activeClassName='ActiveMenuItem'><div className='MenuItem'>showcase</div></Link>
          <Link to='/about' activeClassName='ActiveMenuItem'><div className='MenuItem'>about</div></Link>
        </div>
      </div>
    );
  }
}

export default Header;
