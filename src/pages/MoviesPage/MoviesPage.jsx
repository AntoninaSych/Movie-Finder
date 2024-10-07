import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../api.jsx';
import MovieList from '../../components/MovieList/MovieList.jsx'; // Импортируем компонент MovieList
import SearchForm from '../../components/SearchForm/SearchForm.jsx'; // Импортируем компонент SearchForm

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

            {/* Используем компонент SearchForm */}
            <SearchForm query={query} setQuery={setQuery} handleSearch={handleSearch} />

            {/* Сообщение об ошибке */}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            {/* Не отображаем результаты, если нет запроса */}
            {hasSearched && (
                <>
                    {movies.length > 0 ? (
                        <MovieList movies={movies} />
                    ) : (
                        <p>No movies found for your search.</p>
                    )}
                </>
            )}
        </div>
    );
};

export default MoviesPage;
