import { useEffect, useState } from 'react';
import Canvas from './Canvas';
import { Coordinates, Direction, PlayerData } from './lib';
import './style.css';


function App() {
  const [playerData, setPlayerData] = useState<PlayerData>({
    position : {
      x : 10,
      y : 10
    },
    direction : Direction.DOWN
  });


  useEffect(() => {
    const onKeyPress = (ev: KeyboardEvent): void => {
      switch (ev.key) {
        case 'ArrowUp':
          setPlayerData(e => ({
            direction : Direction.UP,
            position : { 
              x: e.position.x, 
              y: e.position.y - 1 
            }
          }))
          break;
        case 'ArrowDown':
          setPlayerData(e => ({
            direction : Direction.DOWN,
            position : { 
              x: e.position.x, 
              y: e.position.y + 1 
            }
          }))
          break;
        case 'ArrowRight':
          setPlayerData(e => ({
            direction : Direction.RIGHT,
            position : { 
              x: e.position.x + 1, 
              y: e.position.y 
            }
          }))
          break;
        case 'ArrowLeft':
          setPlayerData(e => ({
            direction : Direction.LEFT,
            position : { 
              x: e.position.x - 1, 
              y: e.position.y 
            }
          }))
          break;
      }
    };

    window.addEventListener('keydown', onKeyPress);
    return () => {
      window.removeEventListener('keydown', onKeyPress);
    }

  }, []);

  return (
    <div className="App">
      <Canvas playerData={playerData} />
    </div>
  );
}

export default App;
