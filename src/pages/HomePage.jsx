import React, { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';
import { getTrendingMovies } from '../api';

const HomePage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTrendingMovies().then(data => setMovies(data.results));
    }, []);

    return (
        <div>
            <h1>Trending today</h1>
            <MovieList movies={movies} />
        </div>
    );
};

export default HomePage;
