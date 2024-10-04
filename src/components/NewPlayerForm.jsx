import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePostPlayerMutation } from '../api/puppyBowlApi';

const NewPlayerForm = () => {
  // Local state to store form input values
  const [name, setName] = useState('');
  const [team, setTeam] = useState('');
  const [owner, setOwner] = useState('');

  // Initialize mutation hook from RTK Query
  const [postPlayer] = usePostPlayerMutation();

  // useNavigate hook to programmatically navigate after form submission
  const navigate = useNavigate();

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new player object based on form inputs
    const newPlayer = { name, team, owner };

    // Send the mutation request to create the player
    try {
      await postPlayer(newPlayer).unwrap(); // Use unwrap to handle promise resolution/rejection
      alert('New player created successfully!');

      // Reset form fields
      setName('');
      setTeam('');
      setOwner('');

      // Navigate back to the All Players view after successful creation
      navigate('/');
    } catch (error) {
      alert('Failed to create new player. Please try again.');
      console.error('Error creating player:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Create a New Player</h2>
      <form onSubmit={handleSubmit} className="player-form">
        <label htmlFor="name">Player Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter player name"
          required
        />

        <label htmlFor="team">Team Name:</label>
        <input
          type="text"
          id="team"
          value={team}
          onChange={(e) => setTeam(e.target.value)}
          placeholder="Enter team name"
          required
        />

        <label htmlFor="owner">Owner Name:</label>
        <input
          type="text"
          id="owner"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
          placeholder="Enter owner name"
          required
        />

        <button type="submit" className="submit-button">Create Player</button>
      </form>
    </div>
  );
};

export default NewPlayerForm;
