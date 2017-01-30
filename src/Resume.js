import React, { Component } from 'react'

class Resume extends Component {
  render(){
    return(
      <div className="Resume">
        <div className="resumeSpacer">
          <h1>Experience</h1>
          <h2>2016 Digital Hyperspace</h2>
          <p>Founder, software engineer</p>
          <h2>2014 - 2015 russdigital</h2>
          <p>Freelance web designer, developer</p>
          <h2>2011 - 2013 Rootless</h2>
          <p>Founder, front end developer, digital designer</p>
          <hr />
          <h1>Education</h1>
          <h2>University of Cincinnati</h2>
          <p>Bachelor’s of Science in Design – Digital Design</p>
          <h2>Betaspring</h2>
          <p>Fall 2012 cohort</p>
          <hr />
          <h1>Skills</h1>
          <h2>Software Engineering</h2>
          <p>Javascript, react, react native, angular, node, mongodb, express</p>
          <h2>Digital Design</h2>
          <p>UX/UI, motion graphics, branding, iconography, typography, graphic design</p>
        </div>
      </div>
    );
  }
}

export default Resume
