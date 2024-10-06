import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchTrendingMovies, searchMovies } from '../api';
import SearchForm from '../components/SearchForm';
import '../css/HomePage.css';


const HomePage = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    // Загружаем популярные фильмы по умолчанию
    useEffect(() => {
        const loadTrendingMovies = async () => {
            if (!query) {
                const trendingMovies = await fetchTrendingMovies();
                setMovies(trendingMovies);
            }
        };

        loadTrendingMovies();
    }, [query]);

    const handleSearch = async (event) => {
        event.preventDefault();
        if (query.trim() === '') return;

        const searchedMovies = await searchMovies(query);
        setMovies(searchedMovies);

        navigate(`/movies?query=${query}`);
    };

    return (
        <div>
            <h1>{query ? 'Search Results' : 'Trending Today'}</h1>
            <SearchForm query={query} setQuery={setQuery} handleSearch={handleSearch} />

            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;
