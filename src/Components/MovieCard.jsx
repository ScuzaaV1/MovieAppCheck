import React from "react";
import StarRating from "./StarRating";


const MovieCard = ({ movie, functionDelete,  }) => {
  return (
    <div className="movie-card">
      <h3>{movie.name}</h3>
      <img src={movie.image} alt={movie.name} />
      <StarRating rating={movie.rating} />
      <h5>{movie.date}</h5>
      <div>
      
      </div>
    </div>
  );
};

export default MovieCard;
