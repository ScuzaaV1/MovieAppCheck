import React from "react";
import StarRating from "./StarRating";


const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <h2>{movie.name}</h2>
      <img src={movie.image} alt={movie.name} />
      <StarRating rating={movie.rating} />
      <h5>{movie.date}</h5>
      <div>
      </div>
    </div>
  );
};

export default MovieCard;
