import React from 'react';
import '../Game.css';
import Lin from '../Lin.jpg';

const MGame2 = () => {
    return (
        <div>
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="Game.css" />
          <div className="conteiner_1">
            <div className="name_box">	<p className="name_text"> Lineage  2 </p>	</div>
            <div className="text_box">
              <div className="conteiner_2"> <img src={Lin}></img> </div>
              <div className="conteiner_3"> <p className="font_1"> Cool game about fantasy world!</p> </div>
            </div>
            <div className="comment"> <p className="name_text"> Comment </p> </div> 
            <input type="text" className="comment_box" />
            <div className="button_zone">
              <a href="MultiplayerGame.js"><div className="button_back"> <p className="name_text"> Back </p> </div> </a>
              <a href="Main.js"><div className="button_main"> <p className="name_text"> Main </p> </div></a>
            </div>
          </div>	
        </div>
      );
}

export default MGame2;