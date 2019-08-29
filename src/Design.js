import React, { Component } from 'react'
import ProjectList from './ProjectList'

class Design extends Component {
  render(){
    return(
      <div className="ProjectList">
          <h2>Live Websites</h2>
          <p><a target="_blank" href="https://www.damnjoan.com">www.damnjoan.com</a>, <br /><a target="_blank" href="https://www.battlehigh2.com">www.battlehigh2.com</a>, <br /><a target="_blank" href="http://www.sitting.app">www.sitting.app</a>, <br /><a target="_blank" href="https://www.sexyawakening.com">www.sexyawakening.com</a></p>
          <h2>Graphics for the web and print</h2>
          <p>Look at <a target="_blank" href="https://www.behance.net/russjwells">behance</a> and <a target="_blank" href="http://dribbble.com/russjwells">dribbble</a>.</p>
          <h2>Video, motion graphics & animation</h2>
          <p>See my <a target="_blank" href="https://vimeo.com/russjwells">vimeo</a> and <a target="_blank" href="https://www.youtube.com/channel/UCSQZ5c7NsGrk7Vl1pYK4wuw">youtube</a> channels.</p>
          <h2>UX</h2>
          <p>Ask me.</p>
      
      </div>
    );
  }
}

export default Design
