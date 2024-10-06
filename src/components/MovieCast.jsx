import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../api';

const MovieCast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        getMovieCast(movieId).then(data => setCast(data.cast));
    }, [movieId]);

    return (
        <div>
            <h2>Cast</h2>
            <ul>
                {cast.map((actor) => (
                    <li key={actor.id}>
                        {actor.name} as {actor.character}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieCast;
