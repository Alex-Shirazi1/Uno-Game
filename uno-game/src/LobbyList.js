import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateLobby from './CreateLobby';

function LobbyList() {
  const [lobbies, setLobbies] = useState([]);

  useEffect(() => {
    const fetchLobbies = async () => {
      try {
        const response = await axios.get('http://localhost:4000/lobbies/');
        console.log('Lobbies:', response.data);
        setLobbies(response.data);
      } catch (error) {
        console.error('There was an error fetching the lobbies!', error);
      }
    };

    fetchLobbies();
}, []);


  const handleLobbyCreated = (newLobby) => {
    setLobbies([...lobbies, newLobby]);
  };

  return (
    <div>
      <CreateLobby onCreate={handleLobbyCreated} />
      <ul>
        {lobbies.map((lobby) => (
          <li key={lobby._id}>{lobby.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default LobbyList;
