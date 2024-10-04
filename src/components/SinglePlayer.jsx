import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetPlayerQuery, useDeletePlayerMutation } from '../api/puppyBowlApi';

const SinglePlayer = () => {
  // Get the player ID from the URL parameters
  const { id } = useParams();

  // Fetch the player's data using the ID
  const { data: player, error, isLoading } = useGetPlayerQuery(id);

  // Initialize the mutation hook to delete the player
  const [deletePlayer] = useDeletePlayerMutation();

  // Use navigate to programmatically redirect the user after deleting a player
  const navigate = useNavigate();

  // Function to handle player deletion
  const handleDelete = async () => {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${player.name}?`);
    if (confirmDelete) {
      try {
        await deletePlayer(id).unwrap();
        alert('Player deleted successfully.');
        navigate('/'); // Redirect to home after deletion
      } catch (err) {
        alert('Failed to delete player. Please try again.');
        console.error('Error deleting player:', err);
      }
    }
  };

  // If the data is loading, show a loading message
  if (isLoading) {
    return <p>Loading player details...</p>;
  }

  // If there's an error, show an error message
  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  return (
    <div className="single-player-container">
      {player ? (
        <div className="player-details">
          <h1>{player.name}</h1>
          <p><strong>Team:</strong> {player.team}</p>
          <p><strong>Owner:</strong> {player.owner}</p>
          <p><strong>ID:</strong> {player.id}</p>
          <button className="delete-button" onClick={handleDelete}>Delete Player</button>
        </div>
      ) : (
        <p>Player not found.</p>
      )}
    </div>
  );
};

export default SinglePlayer;
