const API_KEY = '0e19520d931bd95ebc575d4fa06a5b5a';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
    const response = await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
    return await response.json();
};

export const searchMovies = async (query) => {
    const response = await fetch(
        `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}&include_adult=false`
    );
    return await response.json();
};

export const getMovieDetails = async (movieId) => {
    const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
    return await response.json();
};

export const getMovieCast = async (movieId) => {
    const response = await fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
    return await response.json();
};

export const getMovieReviews = async (movieId) => {
    const response = await fetch(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
    return await response.json();
};
