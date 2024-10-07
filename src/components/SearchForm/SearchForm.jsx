import React from 'react';
import './SearchForm.module.css';

const SearchForm = ({ query, setQuery, handleSearch }) => {
    return (
        <form className="search-form" onSubmit={handleSearch}>
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
