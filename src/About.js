import React, {Component} from 'react'
import { Follow } from 'react-twitter-widgets'

class About extends Component {
  render(){
    return(
        <div className="About">
          <div className="AboutSpacer">
            <h1>Hi, I'm Russ. <br /><br />I create amazing experiences with design, media and technology.</h1>
              <p>I am passionate about creating beautiful, useful, and elegant things. I like to create digital products, apps and games.</p>
              <p>&nbsp;</p>
              <p>
               I completed my Bachelor of Science in Design at the University of Cincinnati's College of Design Architecture Art and Planning. 
              </p>
              <p>&nbsp;</p>
                <p>
                To reach out contact me via any of my links.
                </p>
            <p>&nbsp;</p>
          </div>
        </div>
    );
  }
}

export default About
