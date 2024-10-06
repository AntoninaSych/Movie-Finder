import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../api';

const ReviewsPage = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchMovieReviews(movieId).then(setReviews).catch(console.error);
    }, [movieId]);

    return (
        <div>
            <h3>Reviews</h3>
            {reviews.length > 0 ? (
                <ul>
                    {reviews.map((review) => (
                        <li key={review.id}>
                            <p><b>{review.author}</b>: {review.content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No reviews available for this movie.</p>
            )}
        </div>
    );
};

export default ReviewsPage;
