import React, {Component} from 'react';
import ProjectListItem from './ProjectListItem.js'

class ProjectList extends Component{
  render(){
    return(
      <div className="ProjectList">
        <ProjectListItem
          title={"Sitting"}
          description={"A multi-platform meditation timer and tracker."}
          pic={"ll"}
        />
        <ProjectListItem
          title={'Galactic Zoo'}
          description={"An educational web game about space."}
          pic={"ll"}
        />
        <ProjectListItem
          title={'Rootless'}
          description={"A peer to peer ride sharing network."}
          pic={"ll"}
        />
      </div>
    )
  }
}

export default ProjectList
