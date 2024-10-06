import React, { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../api';

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    const backLink = location.state?.from || '/movies';

    useEffect(() => {
        getMovieDetails(movieId).then(setMovie);
    }, [movieId]);

    if (!movie) return null;

    return (
        <div>
            <Link to={backLink}>&larr; Go back</Link>
            <h1>{movie.title} ({movie.release_date.split('-')[0]})</h1>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>{movie.genres.map(genre => genre.name).join(', ')}</p>

            <h3>Additional Information</h3>
            <ul>
                <li><Link to="cast" state={{ from: backLink }}>Cast</Link></li>
                <li><Link to="reviews" state={{ from: backLink }}>Reviews</Link></li>
            </ul>

            <Outlet />
        </div>
    );
};

export default MovieDetailsPage;
