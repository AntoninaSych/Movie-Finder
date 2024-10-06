import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { searchMovies } from '../api';
import SearchForm from '../components/SearchForm';

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
        <div>
            <h1>Search Movies</h1>
            <SearchForm query={query} setQuery={setQuery} handleSearch={handleSearch} />

            {movies.length > 0 && (
                <ul>
                    {movies.map((movie) => (
                        <li key={movie.id}>
                            <Link to={`/movies/${movie.id}`} state={{ from: `/movies?query=${query}` }}>
                                {movie.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MoviesPage;
