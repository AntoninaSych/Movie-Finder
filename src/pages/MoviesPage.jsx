import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { searchMovies } from '../api';

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const queryFromUrl = searchParams.get('query');
        if (queryFromUrl) {
            setQuery(queryFromUrl);
            searchMovies(queryFromUrl).then(setMovies);
        }
    }, [searchParams]);

    const handleSearch = (event) => {
        event.preventDefault();
        if (query.trim() === '') return;
        setSearchParams({ query });
    };

    return (
        <div className="container">
            <h1>Search Movies</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search movies..."
                />
                <button type="submit">Search</button>
            </form>

            {movies.length > 0 ? (
                <ul>
                    {movies.map((movie) => (
                        <li key={movie.id}>
                            <Link to={`/movies/${movie.id}`} state={{ from: `/movies?query=${query}` }}>
                                {movie.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No movies found for your search.</p>
            )}
        </div>
    );
};

export default MoviesPage;
