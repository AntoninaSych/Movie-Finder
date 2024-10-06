import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy load components
const HomePage = React.lazy(() => import('./pages/HomePage'));
const MoviesPage = React.lazy(() => import('./pages/MoviesPage'));
const MovieDetailsPage = React.lazy(() => import('./pages/MovieDetailsPage'));
const CastPage = React.lazy(() => import('./pages/CastPage'));
const ReviewsPage = React.lazy(() => import('./pages/ReviewsPage'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));

const AppRoutes = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
                    <Route path="cast" element={<CastPage />} />
                    <Route path="reviews" element={<ReviewsPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
