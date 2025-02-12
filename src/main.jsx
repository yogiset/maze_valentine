import React from 'react';
import ReactDOM from 'react-dom/client';
import Maze from './Maze';
import BackgroundAudio from './BackgroundAudio.Jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BackgroundAudio />
    <Maze />
  </React.StrictMode>
);