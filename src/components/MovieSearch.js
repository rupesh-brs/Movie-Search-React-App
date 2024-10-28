import React, { useState } from 'react';
import axios from 'axios';

const MovieSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      const apiUrl = `https://www.omdbapi.com/?s=${query}&apikey=3695b132`;
      axios.get(apiUrl)
        .then(response => {
          if (response.data.Search) {
            onSearch(response.data.Search);
          } else {
            alert("No movies found");
          }
        })
        .catch(() => alert("Error fetching data"));
    }
  };

  return (
    <div className="input-group mb-3">
      <input 
        type="text" 
        className="form-control" 
        placeholder="Search for a movie..." 
        value={query}
        onChange={(e) => setQuery(e.target.value)} 
      />
      <button className="btn btn-primary" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default MovieSearch;
