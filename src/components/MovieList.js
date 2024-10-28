import React from 'react';

const MovieList = ({ movies, onMovieClick }) => {
  return (
    <div id="movies" className="row">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="card col-12 col-sm-6 col-lg-3" onClick={() => onMovieClick(movie.imdbID)}>
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : 'assets/img/notFound.jpg'}
            alt={movie.Title}
            className="card-img-top"
          />
          <h5 className="card-title">{movie.Title}</h5>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
