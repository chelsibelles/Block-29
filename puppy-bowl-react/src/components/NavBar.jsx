import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

function NavBar() {
    return (
        <header className="nav-bar">
            <h1>Puppy Bowl</h1>
            <nav className="nav-links">
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
                <NavLink to="/new" activeClassName="active">New Player Form</NavLink>
                <NavLink to="/players" activeClassName="active">List of Players</NavLink>
            </nav>
        </header>
    );
}

export default NavBar;
