import React from 'react';
import '../SimpleGame.css';

const SingleGame = () => {
    return (
        <div>
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="SingleGame.css" />
          <div className="conteiner_1">
            <div className="conteiner_2">
              <a href="Game 1.js"> <div className="game_box_1"> <p className="font_1"> Game 1 </p>	</div> </a>
              <a href="Game 2.js"> <div className="game_box_2">	<p className="font_1"> Game 2 </p>	</div> </a>
            </div>
            <div className="conteiner_3">
              <a href="Game 3.js"> <div className="game_box_1">	<p className="font_1"> Game 3 </p>	</div> </a>
              <a href="Game 4.js"> <div className="game_box_2">	<p className="font_1"> Game 4 </p>	 </div> </a>
            </div>
            <div className="conteiner_4">
              <a href="Main.js"> <div className="main_button">	<p className="font_1"> Main </p>	</div> </a>
            </div>
          </div>
        </div>
      );
}
      
export default SingleGame;