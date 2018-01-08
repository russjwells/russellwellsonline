import React, {Component} from 'react'
import headshot from './self_color_portrait_green.png'

class Sidebar extends Component {
  render(){
    var divStyle = {
      backgroundImage: 'url(' + headshot + ')'
    }
    var linkStyle = {
      color: 'white',
      textDecoration: 'none'
    }
    var hoverStyle = {
      color: 'white',
      textDecoration: 'underline'
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
            <p><a target="_blank" href="http://github.com/russjwells" style={linkStyle} hoverStyle={hoverStyle}>Software</a></p>
            <p><a target="_blank" href="http://behance.net/russdigital" style={linkStyle}>Design</a></p>
            <p><a target="_blank" href="http://vimeo.com/russjwells" style={linkStyle}>Video</a></p>
            <p><a target="_blank" href="https://www.flickr.com/photos/29084693@N03/" style={linkStyle}>Photography</a></p>
            <p><a target="_blank" href="https://soundcloud.com/lightofnature" style={linkStyle}>Music</a></p>
          </div>

          <div className="QuickContacts">
            <p>Contact me:</p>
            <p>russjwells@gmail.com</p>
            <p>760.936.1704</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar
