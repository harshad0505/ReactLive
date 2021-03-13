import React from 'react';
import img1 from '../Image/game,png'

function project(){
    return(
        <React.Fragment>
            <h1 className="title"><i class="fas fa-laptop-medical"> PROJECT</i></h1>
      <div className="project" id="4">
        <div className="box3" data-aos="fade-right">
          <div className="pro">
            <img src={require('/Image/harshad.png')}></img>
            <h2>The Portfoli Website</h2>
            <p>This Wesbite Create with the help of html,css,js & also with the help of React</p>
          </div>
        </div>

        <div className="box3" data-aos="zoom-out">
          <div className="pro">
            <img src={require('/Image/weat.png')}></img>
            <h2>WEATHER FORCAST</h2>
            <p>This Wesbite Create with the help of html,css,js & also with the help of React</p>
          </div>
        </div>

        <div className="box3" data-aos="fade-left">
          <div className="pro" >
            <img src={img1}></img>
            <h2>GUESS THE NUMBER</h2>
            <p>This Wesbite Create with the help of html,css,js & also with the help of React</p>
          </div>
        </div>
      </div>
        </React.Fragment>

    )
}
export default project;