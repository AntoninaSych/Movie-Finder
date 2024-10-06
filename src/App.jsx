import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import AppRoutes from './routes';
import './css/App.css';

function App() {
    return (
        <Router>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/movies">Movies</NavLink>
            </nav>
            <AppRoutes />
        </Router>
    );
}

export default App;
