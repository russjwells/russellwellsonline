import React, {Component} from 'react'
import headshot from './rwo_headshot.png'

class Sidebar extends Component {
  render(){
    return (
      <div className="Sidebar">
        <img src={headshot} alt="headshot" width="394" height="526"/>
        <div className="Oneliner">Full Stack Javascript Engineer</div>
        <p>github.com/russjwells</p>
        <div className="QuickContacts">
          <p>russ@russdigital.com</p>
          <p>(513) 332-5252</p>
        </div>
        <div className="Message">
          MESSAGE ME NOW
        </div>
      </div>
    );
  }
}

export default Sidebar
