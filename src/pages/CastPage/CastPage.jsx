import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../api.jsx';

const CastPage = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        fetchMovieCast(movieId).then(setCast).catch(console.error);
    }, [movieId]);

    return (
        <div>
            <h3>Cast</h3>
            {cast.length > 0 ? (
                <ul>
                    {cast.map((actor) => (
                        <li key={actor.cast_id}>
                            {actor.name} as {actor.character}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No cast information available.</p>
            )}
        </div>
    );
};

export default CastPage;
