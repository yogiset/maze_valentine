import React from 'react';
import ReactDOM from 'react-dom/client';
import Maze from './Maze';
import Audio from './Audio';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Audio />
    <Maze />
  </React.StrictMode>
);