import React from 'react';
import '../Log.css';

const Log = () => {
  return (
    <div>
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="Log.css" />		
      <div className="autentification">
        <div className="count-1">
          <div className="flex-wrapper-twelve">
            <div className="flex-wrapper-five"><p className="font_1">W</p></div>
            <div className="flex-wrapper-six"><p className="font_1">e</p></div>
            <div className="flex-wrapper-seven"><p className="font_1">l</p></div>
            <div className="flex-wrapper-eight"><p className="font_1">l</p></div>
          </div>
          <div className="flex-wrapper-thirteen">
            <div className="flex-wrapper-one"><p className="font_1">c</p></div>
            <div className="flex-wrapper-three"><p className="font_1">o</p></div>
            <div className="flex-wrapper-four"><p className="font_1">m</p></div>
            <div className="flex-wrapper-two"><p className="font_1">e</p></div>
          </div>
        </div>
        <div className="count-2">
          <div className="flex-wrapper-fourteen">
            <div className="flex-wrapper-eleven">
              <p className="font_1">Login:</p>
            </div>
            <input type="text" className="rectangle-13" />
          </div>
          <div className="flex-wrapper-fifteen">
            <div className="flex-wrapper-ten">
              <p className="font_2">Password:</p>
            </div>
            <input type="text" className="rectangle-13" />
          </div>
        </div>
        <div className="count-3">
          <a href="MainAfterLog.html"> <div className="flex-wrapper-nine">
              <p className="font_1">Enter</p>
            </div> </a>
        </div>
      </div>
    </div>
  );
};

export default Log;
     
