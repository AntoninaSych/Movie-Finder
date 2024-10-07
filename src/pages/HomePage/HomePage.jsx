import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchTrendingMovies, searchMovies } from '../../api.jsx';
import SearchForm from '../../components/SearchForm/SearchForm.jsx';
import MovieList from '../../components/MovieList/MovieList.jsx'; // Импортируем компонент MovieList
import './HomePage.module.css';

const HomePage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const loadTrendingMovies = async () => {
                const trendingMovies = await fetchTrendingMovies();
                setMovies(trendingMovies);
        };

        loadTrendingMovies();
    }, []);

    return (
        <div>
            <h1>  Trending Today  </h1>

             <MovieList movies={movies} />
        </div>
    );
};

export default HomePage;
