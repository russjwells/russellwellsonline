import React, {Component} from 'react';

class ProjectListItem extends Component{
  render(){
    return(
      <div className="ProjectListItem">
        <div className="ProjectImage">
          <img src="http://www.placekitten.com/100/100" alt="img" width="400" height="400" />
        </div>
        <div className="ProjectInfo">
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
        </div>
      </div>
    )
  }
}

export default ProjectListItem
