import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function JoinLobby() {
  const { id } = useParams();
  const [lobby, setLobby] = useState(null);

  useEffect(() => {
   
    const fetchLobby = async () => {
      try {
        const response = await axios.get(`/lobbies/${id}`);
        setLobby(response.data);
      } catch (error) {
        console.error('There was an error fetching the lobby details!', error);
      }
    };

    fetchLobby();
  }, [id]);

  const joinLobby = async () => {};

  if (!lobby) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <h2>{lobby.name}</h2>
      <p>Players: {lobby.players.length}/{lobby.max_players}</p>
      <button onClick={joinLobby} disabled={lobby.players.length >= lobby.max_players}>
        Join Lobby
      </button>
    </div>
  );
}

export default JoinLobby;
