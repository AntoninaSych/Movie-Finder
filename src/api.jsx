import axios from 'axios';

const API_KEY = '0e19520d931bd95ebc575d4fa06a5b5a';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
    const response = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
};

export const searchMovies = async (query) => {
    const response = await axios.get(`${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`);
    return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
    return response.data;
};

export const fetchMovieCast = async (movieId) => {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
    return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
    return response.data.results;
};
