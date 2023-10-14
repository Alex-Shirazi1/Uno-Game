import React, { useState } from 'react';
import axios from 'axios';
import CONFIG from './Config';

function CreateLobby({ onCreate }) {
  const [lobbyName, setLobbyName] = useState('');
  const [playerCount, setPlayerCount] = useState(2);

  const createLobby = async () => {
    try {
        const response = await axios.post(`${CONFIG.API_URL}/lobbies`, {
            name: lobbyName,
            players: [], 
            maxPlayers: playerCount
        });
        console.log('Lobby created:', response.data);
        if (onCreate) {
            onCreate(response.data);
        }
    } catch (error) {
        console.error('There was an error creating the lobby!', error);
    }
};


  return (
    <div>
      <input 
        type="text" 
        value={lobbyName} 
        onChange={(e) => setLobbyName(e.target.value)} 
        placeholder="Lobby Name" 
      />
      <select value={playerCount} onChange={(e) => setPlayerCount(e.target.value)}>
        <option value={2}>2 Players</option>
        <option value={3}>3 Players</option>
        <option value={4}>4 Players</option>
      </select>
      <button onClick={createLobby}>Create Lobby</button>
    </div>
  );
}

export default CreateLobby;
