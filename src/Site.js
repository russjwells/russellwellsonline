import React, { Component } from 'react';
import Header from './Header.js'
import Sidebar from './Sidebar.js'

class Site extends Component {
  render(){
    return(
      <div>
        <Header />
        <Sidebar />
        {this.props.children}
      </div>
    )
  }
}

export default Site
