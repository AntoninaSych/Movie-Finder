// src/components/SearchForm.jsx
import React from 'react';

const SearchForm = ({ query, setQuery, handleSearch }) => {
    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search movies..."
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchForm;
