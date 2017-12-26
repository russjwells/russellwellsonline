import React, {Component} from 'react'
import headshot from './rwo_headshot.png'

class Sidebar extends Component {
  render(){
    var divStyle = {
      backgroundImage: 'url(' + headshot + ')'
    }
    return (
      <div className="Sidebar">
        <div className="Headshot" style={divStyle}></div>
        {/*
          <img src={headshot} alt="headshot" width="394" height="526"/>
          */}
        <div className="Sidebardata">
          <div className="Oneliner">Software Engineer &<br/> Digital Designer</div>
          <div className="PublicRepos">
            <p>My work:</p>
            <p>github.com/russjwells</p>
            <p>behance.net/russdigital</p>
          </div>

          <div className="QuickContacts">
            <p>Contact me:</p>
            <p>russjwells@gmail.com</p>
            <p>760.936.1704</p>
          </div>
          <div></div>
          <div></div>

          {/*<div className="Message">
            MESSAGE ME NOW
          </div>*/}
        </div>
      </div>
    );
  }
}

export default Sidebar
