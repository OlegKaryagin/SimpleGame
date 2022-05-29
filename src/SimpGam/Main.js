import React from 'react';
import '../Main.css';
import SingleGame from './SingleGame'
import axios from 'axios'

// import '../SimpleGame.css';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

import {
  Link
} from "react-router-dom"
// import { Router } from "react-router-dom"


// function axiosTest() {
//   // create a promise for the axios request
//   const promise = axios.get(url)

//   // using .then, create a new promise which extracts the data
//   const dataPromise = promise.then((response) => response.data)

//   // return it
//   return dataPromise
// }

// // now we can use that data from the outside!
// axiosTest()
//   .then(data => {
//       response.json({ message: 'Request received!', data })
//   })
//   .catch(err => console.log(err))


const Main = () =>{
  // const [comment, setComment] = React.useState(null);
  // React.useEffect(() => {
  //   axios.get('http://51.250.97.189:8080/comment/get',
  //   {
  //     'Signature':'30383a97-8a6f-49d4-9ca5-a02c448e1a44',
  //     'Game-Id': 1
  //   }
  //   ).then((response) => {
  //     setComment(response.data);
  //   });
  // }, []);
  // console.log(comment)
  return (
    <div>
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="Main.css" />
      <div className="main">
        <div className="flex-wrapper-fourteen">
          <div className="flex-wrapper-one">
            <p className="s">S</p>
          </div>
          <div className="flex-wrapper-six"><p className="i">i</p></div>
          <div className="flex-wrapper-seven"><p className="i">m</p></div>
          <div className="flex-wrapper-eight"><p className="i">p</p></div>
          <div className="flex-wrapper-nine"><p className="i">l</p></div>
          <div className="flex-wrapper-ten"><p className="i">e</p></div>
        </div>
        <div className="flex-wrapper-fifteen">
          <div className="flex-wrapper-two"><p className="i">G</p></div>
          <div className="flex-wrapper-four"><p className="i">a</p></div>
          <div className="flex-wrapper-five"><p className="i">m</p></div>
          <div className="flex-wrapper-three"><p className="i">e</p></div>
        </div>
        <div className="flex-wrapper-sixteen">
          <Link to="/single">
            <div className="flex-wrapper-eleven">
                <p className="single-player">
                  Single<br />
                  player
                </p>
              </div>
          </Link>

          <a href="MultiplayerGame.js"><div className="flex-wrapper-twelve">
              <p className="multi-player">
                Multi<br />
                player
              </p>
            </div> </a>
        </div>
        <div className="flex-wrapper-seventeen">
        <Link to="/login"><div className="flex-wrapper-thirteen">
              <p className="log">LogIn</p>
            </div> </Link>
            <Link to="/reg">
              <div className="rectangle-13"><p className="registration">Registration</p>
              </div> 
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;