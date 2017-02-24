import React, {Component} from 'react'
import { Follow } from 'react-twitter-widgets'

class About extends Component {
  render(){
    return(
        <div className="About">
          <div className="AboutSpacer">
            <h2>I Create Exceptional Digital Products</h2>

            <p>I attended high school in Mason, Ohio where I developed an interest in design and technology. I studied several programming languages and began to create digital art and music. In my senior year I developed HTML, CSS, and PHP for masoncomets.org daily.</p>
            <p>I was accepted into the University of Cincinnati's esteemed College of Design Architecture Art and Planning attending the Digital Design program in the College of Design. I graduated in 2014 with 3.5 years of experience, having launched and funded my first startup, a ridesharing social network through the Betaspring accelerator in Providence Rhode Island.</p>
            <p>With my degree, I moved to San Diego and started freelancing digital design and Javascript software engineering. Now I'm in North County launching Digital Hyperspace, my design and technology firm. Contact me if you want to create something together!</p>
            {/*<p>
              I began programming when I was young. In middle school I learned Basic on the TI-83, then HTML from Neopets and began to create my own geocities sites. In high school I took all the programming courses available and created an independent study. Before graduation I had AP computer science credit and a working knowledge of Visual Basic, C, C#, and Java, as well as HTML, CSS, PHP and mySQL.
             </p>
             <p>
              I was accepted into and enrolled in the Digtal Design program in DAAP at the University of Cincinnati. I spent the first year in design fundementals learning the theories of color form and space, the principals of organization, and the elements of design. In my second year I began working extensively in Flash and Actionscript 3, started picking up Javascript, learned jQuery, and some animation libaries. I worked in Venice, CA at a Motion Graphics studio over the Summer. In my third year I lead development on several Flash based apps for smartphones, and founded my first startup.
             </p>*/}
             {/*}
             <p>
              I created my first startup while studying digital design at the University of Cincinnati. I was inspired by public transit debate and the different art scenes in Ohio's biggest cities to create Rootless, a peer to peer ride sharing network. Rootless went on to attend the Betaspring startup accelerator in Fall of 2012. It grew into its place in the startup scene competing with Uber and Lyft (then Zimride). Rootless created three jobs in Rhode Island, and served patrons of music and art festivals across America over the Summer of 2013.
             </p>
             <p>
              After my first startup I left Rhode Island, went back to Cincinnati to finish my Bachelor's of Science in Design, and moved to San Diego to program Javascript for the web.
             </p>

             <p>I have five years of professional design and engineering experience. I have worked on everything from motion graphics for major television networks to product websites for startups, digital storefronts for local businesses, native mobile applications, and 3D games. </p>
             <p>
              I take digital products from inception to completion and bring your dreams and ideas to life. I'd love to work with you! Email me for my current rate.
             </p>
             <p>&nbsp;</p>
             <p>Russell</p>
             */}
             {/*<p>
               In addition to websmithing, I like to program C# in Unity, make beats, and enjoy nature.
             </p>*/}

             <p>
             <Follow
               username={"russellwells"}
             />
             </p>
          </div>
        </div>
    );
  }
}

export default About
