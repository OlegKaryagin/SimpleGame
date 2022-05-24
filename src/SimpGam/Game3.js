import React from 'react';
import '../Game.css';
import KCD from '../KCD.jpg';

const Game3 = () => {
    return (
        <div>
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="Game.css" />
          <div className="conteiner_1">
            <div className="name_box">	<p className="font_2"> Kingdome Come Deliverance </p>	</div>
            <div className="text_box">
              <div className="conteiner_2"> <img src={KCD}></img> </div>
              <div className="conteiner_3"> <p className="font_1"> Cool game about mediavel!</p> </div>
            </div>
            <div className="comment"> <p className="name_text"> Comment </p> </div> 
            <input type="text" className="comment_box" />
            <div className="button_zone">
              <a href="SingleGame.js"><div className="button_back"> <p className="name_text"> Back </p> </div> </a>
              <a href="Main.js"><div className="button_main"> <p className="name_text"> Main </p> </div></a>
            </div>
          </div>	
        </div>
      );
}

export default Game3;