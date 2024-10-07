import React from 'react';
import { NavLink } from 'react-router-dom'; // Вже не потрібен BrowserRouter тут
import AppRoutes from './routes';
import './css/App.css';

function App() {
    return (
        <>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/movies">Movies</NavLink>
            </nav>
            <AppRoutes />
        </>
    );
}

export default App;
