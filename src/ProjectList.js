import React, {Component} from 'react';
import sittingpic from './sittingicon_lg.png'

class ProjectList extends Component{
  render(){
    return(
      <div className="ProjectList">
      <div className="ProjectListItem">
          <div className="ProjectPhoto"></div>
          <div className="ProjectInfo">
            <h2>Sexy Awakening</h2>
            <p>Swipe with intention.</p>
            <p><i>react, react native, serverless aws, firebase & more</i></p>
            <p><a target="_blank" href="https://www.sexyawakening.com">www.sexyawakening.com</a></p>
          </div>
      </div>
        <div className="ProjectListItem">
          <div className="ProjectPhoto"></div>
          <div className="ProjectInfo">
            <h2>Sitting</h2>
            <p>Meditation for the Masses.</p>
            <p><i>react, react native, node, express</i></p>
            <p><a target="_blank" href="https://sitting.app">Web App</a> | <a target="_blank" href="https://github.com/russjwells/sittingweb">Repository</a></p>
            <p><a target="_blank" href="https://itunes.apple.com/us/app/sitting-timer/id1139439714">iOS App</a> | <a target="_blank" href="https://github.com/russjwells/SittingApp">Repository</a></p>
            <p>Android app coming soon!</p>
          </div>
        </div>

        <div className="ProjectListItem">
          <div className="ProjectPhoto"></div>
          <div className="ProjectInfo">
            <h2>Reddit Clone</h2>
            <p>Authentication, Upvotes, Comments, Comment Upvotes</p>
            <p><i>mongo, angular, express, node</i></p>
            <p><a target="_blank" href="https://redditcl0ne.herokuapp.com/">Web App</a> | <a target="_blank" href="https://github.com/russjwells/redditclone">Repository</a></p>
          </div>
        </div>

        <div className="ProjectListItem">
          <div className="ProjectPhoto"></div>
          <div className="ProjectInfo">
            <h2>Twitter Clone</h2>
            <p>I recreated the functionality of Twitter.</p>
            <p><i>mongo, angular, express, node</i></p>
            <p><a target="_blank" href="https://twittercl0ne.herokuapp.com/">Web App</a> | <a htarget="_blank" ref="https://github.com/russjwells/sittingweb">Repository</a></p>
          </div>
        </div>

        <div className="ProjectListItem">
          <div className="ProjectPhoto"></div>
          <div className="ProjectInfo">
            <h2>Many Timers</h2>
            <p>You can time everything at once with this.</p>
            <p><i>react</i></p>
            <p><a target="_blank" href="https://github.com/russjwells/time_tracking_app">Repository</a></p>
          </div>
        </div>

        <div className="ProjectListItem">
          <div className="ProjectPhoto"></div>
          <div className="ProjectInfo">
            <h2>Voting App</h2>
            <p>upvotes and downvotes</p>
            <p><i>react</i></p>
            <p><a target="_blank" href="https://github.com/russjwells/voting_app">Repository</a></p>
          </div>
        </div>

        <div className="ProjectListItem">
          <div className="ProjectPhoto"></div>
          <div className="ProjectInfo">
            <h2>Github Notetaker</h2>
            <p>Search github by username. Take notes on users locally.</p>
            <p><i>react</i></p>
            <p><a target="_blank" href="https://github.com/russjwells/notetaker">Repository</a></p>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectList
