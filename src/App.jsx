import React from 'react';
import AppRoutes from './routes';
import Navigation from './components/Navigation';
import './css/App.css';

function App() {
    return (
        <div>
            <Navigation />
            <AppRoutes />
        </div>
    );
}

export default App;
