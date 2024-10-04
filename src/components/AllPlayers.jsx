// src/components/AllPlayers.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { useGetPlayersQuery } from '../api/puppyBowlApi';

const AllPlayers = () => {
  const { data, error, isLoading } = useGetPlayersQuery();

  // Handle loading state
  if (isLoading) return <p>Loading players...</p>;

  // Handle error state
  if (error) return <p>An error occurred: {error.message}</p>;

  // Extract players from the data object
  const players = data?.data?.players;

  return (
    <div className="players-container">
      <h1>All Players</h1>
      <div className="players-list">
        {players && players.length ? (
          players.map((player) => (
            <div key={player.id} className="player-card">
              <img src={player.imageUrl} alt={player.name} className="player-image" />
              <h3>{player.name}</h3>
              <p>{player.breed}</p>
              <p>Status: {player.status}</p>
              <Link to={`/player/${player.id}`}>
                <button>See Details</button>
              </Link>
            </div>
          ))
        ) : (
          <p>No players found.</p>
        )}
      </div>
    </div>
  );
};

export default AllPlayers;
