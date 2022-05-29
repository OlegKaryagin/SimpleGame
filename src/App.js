import './App.css';
import Main from './SimpGam/Main';
import SingleGame from './SimpGam/SingleGame';
import Game1 from './SimpGam/Game 1';
import Reg from './SimpGam/Reg'
import Log from './SimpGam/Log'
// import SingleGame from './SimpGam/SingleGame';
// import SingleGame from './SimpGam/SingleGame';
// import SingleGame from './SimpGam/SingleGame';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* <Main/> */}
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route exact path="/single" element={<SingleGame/>}/>
        <Route exact path="/game_1" element={<Game1/>}/>
        <Route exact path="/reg" element={<Reg/>}/>
        <Route exact path="/login" element={<Log/>}/>
        {/* <Route exact path="/single" element={<SingleGame/>}/>
        <Route exact path="/single" element={<SingleGame/>}/>
        <Route exact path="/single" element={<SingleGame/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
