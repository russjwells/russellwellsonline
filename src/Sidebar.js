import React, {Component} from 'react'
import headshot from './self_color_portrait_green.png'

class Sidebar extends Component {
  render(){
    var divStyle = {
      backgroundImage: 'url(' + headshot + ')',
      backgroundSize: 'cover',
      backgroundColor: 'white',
      backgroundPosition: 'center bottom'
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
          <div className="Oneliner">Digital Designer &<br /> Software Engineer</div>
          <div className="PublicRepos">
            <p><b>More of my work</b></p>
            <p><a target="_blank" href="http://github.com/russjwells" style={linkStyle} hoverStyle={hoverStyle}>Github</a></p>
            <p><a target="_blank" href="http://dribbble.com/russjwells" style={linkStyle}>Dribbble</a></p>
            <p><a target="_blank" href="http://behance.net/russjwells" style={linkStyle}>Behance</a></p>
            <p><a target="_blank" href="http://vimeo.com/russjwells" style={linkStyle}>Vimeo</a></p>
            <p><a target="_blank" href="https://www.flickr.com/photos/29084693@N03/" style={linkStyle}>Flickr</a></p>
            <p><a target="_blank" href="https://soundcloud.com/lightofnature" style={linkStyle}>Soundcloud</a></p>
          </div>

          <div className="QuickContacts">
            <p><b>Points of Contact</b></p>
            <p>russjwells@gmail.com</p>
            <p><a target="_blank" href="https://t.me/russellwells" style={linkStyle}>Telegram</a></p>
            <p><a target="_blank" href="https://www.linkedin.com/in/russjwells/" style={linkStyle}>LinkedIn</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar
