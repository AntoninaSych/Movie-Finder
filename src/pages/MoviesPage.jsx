import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from '../components/MovieList';
import SearchForm from '../components/SearchForm';
import { searchMovies } from '../api';

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') || '';

    useEffect(() => {
        if (query) {
            searchMovies(query).then(data => setMovies(data.results));
        }
    }, [query]);

    const handleSearch = (newQuery) => {
        setSearchParams({ query: newQuery });
    };

    return (
        <div>
            <h1>Movies</h1>
            <SearchForm onSubmit={handleSearch} />
            {query && <MovieList movies={movies} />}
        </div>
    );
};

export default MoviesPage;
