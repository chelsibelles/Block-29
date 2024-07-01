import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useGetPlayerQuery, useDeletePlayerMutation } from '../playerApi';

const SinglePlayer = () => {
    const { id } = useParams();
    const { data: player, error, isLoading } = useGetPlayerQuery(id);
    const [deletePlayerMutation] = useDeletePlayerMutation();
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            await deletePlayerMutation(id);
            navigate('/'); // Navigate back to player list or another appropriate route
        } catch (error) {
            console.error('Error deleting player:', error);
        }
    };

    if (isLoading) return <div>Loading player...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h2>Player Details</h2>
            <h3>{player.name}</h3>
            <p>Owner: {player.owner}</p>
            <p>Team: {player.team}</p>
            <button onClick={handleDelete}>Delete Player</button>
            <Link to="/">Back to Players List</Link>
        </div>
    );
};

export default SinglePlayer;
