import { useState } from 'react';
import './Maze.css';
import GameOver from './GameOver';
import ValentineDay from './ValentineDay';
import Footer from "./Footer";

const maze = [
  [1, 3, 1, 1, 1, 1, 1, 2, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 0, 1, 0, 1, 0, 0, 1], // 2 = Broken Heart
  [1, 0, 1, 1, 0, 1, 0, 0, 1], // 3 = Full Heart
  [1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
];

// Find center dynamically
const findCenter = () => {
  let centerY = Math.floor(maze.length / 2);
  let centerX = Math.floor(maze[centerY].length / 2);

  while (maze[centerY][centerX] !== 0) {
    centerX--; 
    if (centerX < 0) {
      centerX = Math.floor(maze[centerY].length / 2);
      centerY--;
    }
  }
  
  return { x: centerX, y: centerY };
};

function Maze() {
  const [playerPosition, setPlayerPosition] = useState(findCenter());
  const [brokenHeartPosition, setBrokenHeartPosition] = useState({ x: 7, y: 0 }); // Initial position of the broken heart
  const [moveCount, setMoveCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [valentineDay, setValentineDay] = useState(false);

  const handleCellClick = (x, y) => {
    const { x: playerX, y: playerY } = playerPosition;
    const cellValue = maze[y][x];
  
    // Check if the clicked cell is adjacent
    const isAdjacent =
      (Math.abs(playerX - x) === 1 && playerY === y) ||
      (Math.abs(playerY - y) === 1 && playerX === x);
  
    if (isAdjacent && cellValue !== 1) {
      // ✅ First, update the player's position
      setPlayerPosition({ x, y });
  
      // ✅ Then, check for broken heart movement
      setTimeout(() => {
        const isNearBrokenHeart =
          (Math.abs(x - brokenHeartPosition.x) === 1 && y === brokenHeartPosition.y) || 
          (Math.abs(y - brokenHeartPosition.y) === 1 && x === brokenHeartPosition.x);
  
        if (isNearBrokenHeart && moveCount < 3) {
          let newX, newY;
          do {
            newX = Math.floor(Math.random() * maze[0].length);
            newY = Math.floor(Math.random() * maze.length);
          } while (maze[newY][newX] !== 0 || (newX === x && newY === y));
  
          // ✅ Move the "Game Over" (2) along with the broken heart
          maze[brokenHeartPosition.y][brokenHeartPosition.x] = 0; // Clear old position
          maze[newY][newX] = 2; // Set new "Game Over" position
  
          setBrokenHeartPosition({ x: newX, y: newY });
          setMoveCount((prev) => prev + 1);
        }
      }, 50);
  
      // Check win/loss conditions
      if (cellValue === 2) {
        setGameOver(true);
      } else if (cellValue === 3) {
        setValentineDay(true);
      }
    }
  };  
  

  const restartGame = () => {
    // Clear the old "Game Over" (2) position
    if (brokenHeartPosition) {
      maze[brokenHeartPosition.y][brokenHeartPosition.x] = 0;
    }
  
    // Reset the player's position
    const newPlayerPosition = findCenter();
    setPlayerPosition(newPlayerPosition);
  
    // Reset the broken heart position
    const initialBrokenHeartPosition = { x: 7, y: 0 };
    setBrokenHeartPosition(initialBrokenHeartPosition);
    maze[initialBrokenHeartPosition.y][initialBrokenHeartPosition.x] = 2; // Set "Game Over" (2) here
  
    // Reset move count and game state
    setMoveCount(0);
    setGameOver(false);
    setValentineDay(false);
  };
  

  if (gameOver) {
    return <GameOver onRestart={restartGame} />;
  }

  if (valentineDay) {
    return <ValentineDay onRestart={restartGame} />;
  }

  return (
    <div className="maze-container">
      <h1>Will You Be My Valentine?</h1>
      <div className="maze">
        {maze.map((row, y) => (
          <div key={y} className="maze-row">
            {row.map((cell, x) => (
              <div
                key={x}
                className={`maze-cell ${
                  playerPosition.x === x && playerPosition.y === y ? 'player' : ''
                } ${cell === 1 ? 'wall' : ''} ${
                  brokenHeartPosition.x === x && brokenHeartPosition.y === y ? 'broken-heart' : ''
                } ${
                  cell === 3 ? 'full-heart' : ''
                }`}
                onClick={() => handleCellClick(x, y)}
              >
                {brokenHeartPosition.x === x && brokenHeartPosition.y === y && <img src="/broken-heart.png" alt="Broken Heart" />}
                {cell === 3 && <img src="/full-heart.png" alt="Full Heart" />}
              </div>
            ))}
          </div>
        ))}
      </div>
      <p>Maju selangkah demi selangkah!</p>

      <Footer />
    </div>
  );
}

export default Maze;