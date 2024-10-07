import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchTrendingMovies, searchMovies } from '../../api.jsx';
import SearchForm from '../../components/SearchForm/SearchForm.jsx';
import MovieList from '../../components/MovieList/MovieList.jsx'; // Импортируем компонент MovieList
import './HomePage.module.css';

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

            {/* Используем компонент MovieList для отображения списка фильмов */}
            <MovieList movies={movies} />
        </div>
    );
};

export default HomePage;
