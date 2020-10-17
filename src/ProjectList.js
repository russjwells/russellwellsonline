import React, {Component} from 'react';
import sittingpic from './sittingicon_lg.png'
import missingimg from './img/imagemissing.png'
import battlehigh2 from './img/battlehigh2.png'
import damnjoan from './img/damnjoan.png'
import galacticzoo from './img/galacticzoo.png'
import sitting from './img/sitting.png'
import chromadrum from './img/chromadrum.png'
import sexyawakening from './img/sexyawakening2.png'
import prometheantemples from './img/prometheantemples.png'
import harmonize from './img/harmonize.png'
import valis from './img/valis.png'

class ProjectList extends Component{
  render(){
    return(
      <div className="ProjectList">
        <div className="ProjectListItem">
            <div className="ProjectPhoto">
              <a target="_blank" href="https://www.sexyawakening.com">
              <img src={sexyawakening} alt="missing image" width="300px" height="300px"/>
              </a>
            </div>
            <div className="ProjectInfo">
              <h2>Sexy Awakening</h2>
              <p><a target="_blank" href="https://www.sexyawakening.com">www.sexyawakening.com</a></p>
              <p>Swipe with intention. The best way to meet people online.</p>
              <p><i>react, react native, serverless aws, firebase, node & more</i></p>
              <p>Available on iOS, Android, and web.</p>
            </div>
        </div>
        <div className="ProjectListItem">
          <div className="ProjectPhoto">
            <a target="_blank" href="https://www.damnjoan.com">
              <img src={damnjoan} alt="missing image" width="300px" height="300px"/>
            </a>
            </div>
          <div className="ProjectInfo">
            <h2>Damn Joan</h2>
            <p><a target="_blank" href="https://www.damnjoan.com">www.damnjoan.com</a></p>
            <p>Alt web mag out of Manhattan.</p>
            <p><i>product design, sketch, zepplin, abstract</i></p>
            <p>See all five editions.</p>
          </div>
        </div>
        <div className="ProjectListItem">
          <div className="ProjectPhoto">
              <a target="_blank" href="https://www.sitting.app">
              <img src={sitting} alt="missing image" width="300px" height="300px"/>
              </a>
            </div>
          <div className="ProjectInfo">
            <h2>Sitting</h2>
            <p><a target="_blank" href="https://www.sitting.app">www.sitting.app</a></p>
            <p>Meditation for the Masses.</p>
            <p><i>react, react native, node, express</i></p>
            <p><a target="_blank" href="https://sitting.app">Web App</a> | <a target="_blank" href="https://github.com/russjwells/sittingweb">Repository</a></p>
            <p><a target="_blank" href="https://itunes.apple.com/us/app/sitting-timer/id1139439714">iOS App</a> | <a target="_blank" href="https://github.com/russjwells/SittingApp">Repository</a></p>
            <p>Android app coming!</p>
          </div>
        </div>
        <div className="ProjectListItem">
          <div className="ProjectPhoto">
            <a target="_blank" href="https://www.behance.net/gallery/78154521/The-VALIS-Mandala">
              <img src={valis} alt="missing image" width="300px" height="300px"/>
            </a>
            </div>
          <div className="ProjectInfo">
            <h2>VALIS Flyer</h2>
            <p><a target="_blank" href="https://www.behance.net/gallery/78154521/The-VALIS-Mandala">The VALIS Mandala</a></p>
            <p>I created this printed digital art piece as the invitation to a metal show with a VR installation in the lobby.</p>
            <p><i>Nikon DSLR, Cinema 4D, Photoshop, Illustrator</i></p>
          </div>
        </div>
        <div className="ProjectListItem">
            <div className="ProjectPhoto">
              <a target="_blank" href="https://www.chromadrum.com">
                <img src={chromadrum} alt="missing image" width="300px" height="300px"/>
              </a>
            </div>
            <div className="ProjectInfo">
              <h2>Chroma Drum</h2>
              <p><a target="_blank" href="https://www.chromadrum.com">www.chromadrum.com</a></p>
              <p>I integrated affirm payments on this shopify store.</p>
              <p><i>shopify, liquid, javascript</i></p>
              <p>Better ecommerce in time for black friday.</p>
            </div>
        </div>
        <div className="ProjectListItem">
          <div className="ProjectPhoto">
              <a target="_blank" href="https://galacticzoo.herokuapp.com">
                <img src={galacticzoo} alt="missing image" width="300px" height="300px"/>
              </a>
            </div>
          <div className="ProjectInfo">
            <h2>The Galactic Zoo</h2>
            <p><a target="_blank" href="https://galacticzoo.herokuapp.com">Galactic Zoo</a></p>
            <p>Share – Learn – Imagine</p>
            <p><i>mongo, angular, express, node</i></p>
          </div>
        </div>
        <div className="ProjectListItem">
          <div className="ProjectPhoto">
          <a target="_blank" href="http://www.battlehigh2.com">
              <img src={battlehigh2} alt="missing image" width="300px" height="300px"/>
          </a>
            </div>
          <div className="ProjectInfo">
            <h2>Battle High 2 Website</h2>
            <p><a target="_blank" href="http://www.battlehigh2.com">www.battlehigh2.com</a></p>
            <p>I created this website for an indie game on xbox arcade.</p>
            <p><i>HTML, CSS, Javascript</i></p>
          </div>
        </div>
        <div className="ProjectListItem">
          <div className="ProjectPhoto">
              <a target="_blank" href="#">
              <img src={prometheantemples} alt="missing image" width="300px" height="300px"/>
              </a>
            </div>
          <div className="ProjectInfo">
            <h2>Promethean Temples</h2>
            <p><a target="_blank" href="#">Promethean Temples</a></p>
            <p>Prodcedural multiplayer first person maze.</p>
            <p><i>Unity3D, C#</i></p>
          </div>
        </div>
        <div className="ProjectListItem">
          <div className="ProjectPhoto">
            <a target="_blank" href="https://www.youtube.com/watch?v=-8szQw0YyBA&t=5s">
              <img src={harmonize} alt="missing image" width="300px" height="300px"/>
            </a>
            </div>
          <div className="ProjectInfo">
            <h2>Harmonize</h2>
            <p><a target="_blank" href="https://www.youtube.com/watch?v=-8szQw0YyBA&t=5s">Harmonize on YouTube</a></p>
            <p>Learn Permaculture through Play</p>
            <p><i>Unity3D, Cinema 4D, JavaScript, Photoshop, Illustrator</i></p>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectList
