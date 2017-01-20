import React, {Component} from 'react'
import headshot from './rwo_headshot.png'

class Sidebar extends Component {
  render(){
    return (
      <div className="Sidebar">
        <img src={headshot} alt="headshot" width="394" height="526"/>
        <div className="Oneliner">Full Stack Javascript Engineer</div>
        <div className="PublicRepos">
          <p>Public repositories:</p>
          <p>github.com/russjwells</p>
        </div>
        <div className="Message">
          MESSAGE ME NOW
        </div>
        <div className="QuickContacts">
          <p>or Contact:</p>
          <p>russ@russdigital.com</p>
          <p>(513) 332-5252</p>
        </div>
      </div>
    );
  }
}

export default Sidebar
