import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetPlayersQuery, useDeletePlayerMutation } from './playerApi'; // Adjust path as per your project structure

const AllPlayers = () => {
    const { data: players, error, isLoading } = useGetPlayersQuery();
    const [searchTerm, setSearchTerm] = useState('');
    const [deletePlayerMutation] = useDeletePlayerMutation();

    const handleDelete = async (id) => {
        try {
            await deletePlayerMutation(id);
            // Optionally, handle success or navigate back to player list
        } catch (error) {
            console.error('Error deleting player:', error);
        }
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const filteredPlayers = players.filter(player =>
        player.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h2>All Players</h2>
            <input
                type="text"
                placeholder="Search players..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {filteredPlayers.map(player => (
                    <li key={player.id}>
                        <Link to={`/players/${player.id}`}>
                            {player.name} - {player.owner}
                        </Link>
                        <button onClick={() => handleDelete(player.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AllPlayers;
