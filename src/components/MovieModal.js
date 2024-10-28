import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieModal = ({ movie, onClose }) => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const apiUrl = `https://www.omdbapi.com/?i=${movie}&apikey=3695b132`;
    axios.get(apiUrl)
      .then(response => {
        setMovieDetails(response.data);
      })
      .catch(() => alert("Error fetching movie details"));
  }, [movie]);

  if (!movieDetails) return null;

  return (
    <div className="modal show d-block" role="dialog">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{movieDetails.Title}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <img src={movieDetails.Poster !== "N/A" ? movieDetails.Poster : 'assets/img/notFound.jpg'} alt={movieDetails.Title} className="img-fluid" />
            <p><strong>Genre:</strong> {movieDetails.Genre}</p>
            <p><strong>Released:</strong> {movieDetails.Released}</p>
            <p><strong>Director:</strong> {movieDetails.Director}</p>
            <p><strong>Writer:</strong> {movieDetails.Writer}</p>
            <p><strong>Actors:</strong> {movieDetails.Actors}</p>
            <p><strong>Plot:</strong> {movieDetails.Plot}</p>
            <p><strong>Rating:</strong> {movieDetails.imdbRating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
