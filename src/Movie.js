// Movie.js
import React from 'react';
import Stars from './Stars';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';

const Movie = ({ movie, onRatingChange, onReviewSubmit }) => {
  const handleRatingChange = (newRating) => {
    onRatingChange(movie.id, newRating);
  };

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} />
      <p>{movie.synopsis}</p>
      <Stars rating={movie.rating} onChangeRating={handleRatingChange} />
      <ReviewForm onReviewSubmit={(reviewText) => onReviewSubmit(movie.id, reviewText)} />
      <ReviewList reviews={movie.reviews} />
    </div>
  );
};

export default Movie;


