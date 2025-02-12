import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Maze from './Maze';
import GameOver from './GameOver';
import ValentineDay from './ValentineDay';
import BackgroundAudio from './BackgroundAudio.Jsx';
import './App.css';

function App() {
  return (
    <Router>
      <BackgroundAudio />
      <Routes>
        <Route path="/" element={<Maze />} />
        <Route path="/game-over" element={<GameOver />} />
        <Route path="/valentine-day" element={<ValentineDay />} />
      </Routes>
    </Router>
  );
}
