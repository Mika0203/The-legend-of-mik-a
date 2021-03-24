import { useEffect, useState } from 'react';
import Canvas from './Canvas';
import { Coordinates, Direction, PlayerData } from './lib';
import './style.css';
import {mapData} from './MapData';

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
      setPlayerData(e => {
        let newPosition = e.position;
        let newDirection = e.direction;

        switch (ev.key) {
          case 'ArrowUp':
            newDirection = Direction.UP;
            newPosition = {
              x : newPosition.x,
              y : newPosition.y - 1
            }
            break;
          case 'ArrowDown':
            newDirection = Direction.DOWN;
            newPosition = {
              x : newPosition.x,
              y : newPosition.y + 1
            }
            break;
          case 'ArrowRight':
            newDirection = Direction.RIGHT;
            newPosition = {
              x : newPosition.x + 1,
              y : newPosition.y
            }
            break;
          case 'ArrowLeft':
            newDirection = Direction.LEFT;
            newPosition = {
              x : newPosition.x - 1,
              y : newPosition.y
            }
            break;
        }

        const isobs = mapData[newPosition.y][newPosition.x][2] === 1;
        return isobs ? {
          ...e,
          direction : newDirection
        } : {
          direction : newDirection,
          position : newPosition
        };
      });
      
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
