import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { searchMovies } from '../api';

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const [hasSearched, setHasSearched] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const queryFromUrl = searchParams.get('query');
        if (queryFromUrl) {
            setQuery(queryFromUrl);
            searchMovies(queryFromUrl).then(setMovies);
            setHasSearched(true);
        }
    }, [searchParams]);

    const handleSearch = (event) => {
        event.preventDefault();

        // Валидация: минимум 3 символа
        if (query.trim().length < 3) {
            setErrorMessage('Please enter at least 3 characters.');
            return;
        }

        setErrorMessage('');
        setSearchParams({ query });
        setHasSearched(true);
    };

    return (
        <div>
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

            {/* Сообщение об ошибке */}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            {/* Не отображаем результаты, если нет запроса */}
            {hasSearched && (
                <>
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
                </>
            )}
        </div>
    );
};

export default MoviesPage;
