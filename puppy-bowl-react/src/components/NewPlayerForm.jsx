import React, { useState } from 'react';
import { useAddPlayerMutation } from './playerApi'; // Adjust path as per your project structure

const NewPlayerForm = () => {
    const [name, setName] = useState('');
    const [owner, setOwner] = useState('');
    const [team, setTeam] = useState('');
    const [addPlayerMutation] = useAddPlayerMutation();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const newPlayer = { name, owner, team };
            await addPlayerMutation(newPlayer);
            // Optionally, handle success or navigate to player list
            setName('');
            setOwner('');
            setTeam('');
        } catch (error) {
            console.error('Error adding player:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Player Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Owner"
                value={owner}
                onChange={(e) => setOwner(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Team"
                value={team}
                onChange={(e) => setTeam(e.target.value)}
                required
            />
            <button type="submit">Create Player</button>
        </form>
    );
};

export default NewPlayerForm;
