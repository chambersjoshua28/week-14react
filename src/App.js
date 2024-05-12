import React, { useState } from 'react';
import MovieList from './MovieList';

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Star Wars',
      image: 'images/star wars.jpg',
      synopsis: 'A tale of intergalactic adventure.',
      rating: 0,
      reviews: [],
    },
    {
      id: 2,
      title: 'Forrest Gump',
      image: 'images/forrest.jpg',
      synopsis: 'A feel-good movie.',
      rating: 0,
      reviews: [],
    },
    {
      id: 3,
      title: 'The Goonies',
      image: 'images/goonies.jpg',
      synopsis: 'A coming-of-age movie.',
      rating: 0,
      reviews: [],
    },
  ]);

  const handleRatingChange = (movieId, newRating) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) => (movie.id === movieId ? { ...movie, rating: newRating } : movie))
    );
  };

  const handleAddReview = (movieId, reviewText) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === movieId ? { ...movie, reviews: [...movie.reviews, reviewText] } : movie
      )
    );
  };

  return (
    <div className="App">
      <h1>Movie Review App</h1>
      <MovieList movies={movies} onRatingChange={handleRatingChange} onReviewSubmit={handleAddReview} />
    </div>
  );
};

export default App;
