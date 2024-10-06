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

    if (!movie) {
        return <p>Loading...</p>;
    }

    const { title, release_date, vote_average, overview, genres, poster_path } = movie;
    const posterUrl = poster_path
        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
        : 'https://via.placeholder.com/500x750?text=No+Image';

    return (
        <div>
            <Link to={backLink.current}>Go back</Link> {/* Используем сохранённый маршрут для возврата */}

            {movie && (
                <>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <img src={posterUrl} alt={title} width="300" />
                        <div>
                            <h1>{title} ({release_date.slice(0, 4)})</h1>
                            <p>User Score: {vote_average * 10}%</p>
                            <p>{overview}</p>
                            <p><b>Genres:</b> {genres.map(genre => genre.name).join(', ')}</p>
                        </div>
                    </div>

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
