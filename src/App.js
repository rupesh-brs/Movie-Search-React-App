import React, { useState } from 'react';
import MovieSearch from './components/MovieSearch';
import MovieList from './components/MovieList';
import MovieModal from './components/MovieModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const searchMovies = (movies) => {
    setMovies(movies);
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center text-center min-vh-100">
      <h2>Movie Search App</h2>
      <MovieSearch onSearch={searchMovies} />
      <MovieList movies={movies} onMovieClick={handleMovieClick} />
      {selectedMovie && <MovieModal movie={selectedMovie} onClose={closeModal} />}
    </div>
  );
}

export default App;
