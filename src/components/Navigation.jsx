import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Navigation.css';

const Navigation = () => {
    return (
        <nav>
            <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
                Home
            </NavLink>
            <NavLink
                to="/movies"
                className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
                Movies
            </NavLink>
        </nav>
    );
};

export default Navigation;
