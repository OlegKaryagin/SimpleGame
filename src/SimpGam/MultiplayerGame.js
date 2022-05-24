import React from 'react';
import '../SimpleGame.css';


const MultiplayerGame = () => {
    return (
        <div>
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="SingleGame.css" />
          <div className="conteiner_1">
            <div className="conteiner_2">
              <a href="MGame 1.js"> <div className="game_box_1"> <p className="font_1"> Game 1 </p>	</div> </a>
              <a href="MGame 2.js"> <div className="game_box_2">	<p className="font_1"> Game 2 </p>	</div> </a>
            </div>
            <div className="conteiner_3">
              <a href="MGame 3.js"> <div className="game_box_1">	<p className="font_1"> Game 3 </p>	</div> </a>
              <a href="MGame 4.hjs"> <div className="game_box_2">	<p className="font_1"> Game 4 </p>	 </div> </a>
            </div>
            <div className="conteiner_4">
              <a href="Main.js"> <div className="main_button">	<p className="font_1"> Main </p>	</div> </a>
            </div>
          </div>
        </div>
      );
}

export default MultiplayerGame;