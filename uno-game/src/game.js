import React, { useEffect } from 'react';
import socket from './socket';

function Game() {
  useEffect(() => {
    socket.on('response', (data) => {
      console.log(data);
    });

    return () => {
      socket.off('response');
    };
  }, []);

  return <div>Game</div>;
}

export default Game;
