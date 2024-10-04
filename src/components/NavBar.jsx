import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Puppy Bowl</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">All Players</Link>
        <Link to="/new-player">Create Player</Link>
      </div>
    </nav>
  );
};

export default NavBar;
