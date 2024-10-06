import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from '../api';

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    const backLink = useRef(location.state?.from ?? '/movies'); // сохраняем откуда пришли

    useEffect(() => {
        fetchMovieDetails(movieId).then(setMovie).catch(console.error);
    }, [movieId]);

    return (
        <div>
            <Link to={backLink.current}>Go back</Link> {/* Используем сохранённый маршрут для возврата */}

            {movie && (
                <>
                    <h1>{movie.title} ({movie.release_date.slice(0, 4)})</h1>
                    <p>User Score: {movie.vote_average * 10}%</p>
                    <p>{movie.overview}</p>
                    <p><b>Genres:</b> {movie.genres.map(genre => genre.name).join(', ')}</p>

                    <h3>Additional Information</h3>
                    <ul>
                        <li>
                            <Link to="cast" state={{ from: backLink.current }}>Cast</Link>
                        </li>
                        <li>
                            <Link to="reviews" state={{ from: backLink.current }}>Reviews</Link>
                        </li>
                    </ul>

                    <Outlet />
                </>
            )}
        </div>
    );
};

export default MovieDetailsPage;
