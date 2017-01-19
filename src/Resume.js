import React, { Component } from 'react'

class Resume extends Component {
  render(){
    return(
      <div className="resume">
        <h1>Experience</h1>
        <h2>Digital Hyperspace</h2>
        <p>Founder, software engineer</p>
        <h2>russdigital</h2>
        <p>Freelance web designer and developer</p>
        <h2>Rootless</h2>
        <p>Founder, front end developer, digital designer</p>
        <h1>Education</h1>
        <h2>University of Cincinnati</h2>
        <p>Bachelor’s of Science in Design – Digital Design</p>
        <h2>Betaspring</h2>
        <p>Fall 2012 Cohort</p>
        <hr />
        <h1>Skills</h1>
        <h2>Software Engineering</h2>
        <p>javascript, react, react native, angular, node, mongodb, express</p>
        <h2>Digital Design</h2>
        <p>ux/ui, motion graphics, branding, iconography, typography, graphic design</p>
      </div>
    );
  }
}

export default Resume
