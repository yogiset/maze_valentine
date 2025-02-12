import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Maze from './Maze';
import GameOver from './GameOver';
import ValentineDay from './ValentineDay';
import Audio from './Audio';
import './App.css';

function App() {
  return (
    <Router>
      <Audio />
      <Routes>
        <Route path="/" element={<Maze />} />
        <Route path="/game-over" element={<GameOver />} />
        <Route path="/valentine-day" element={<ValentineDay />} />
      </Routes>
    </Router>
  );
}
