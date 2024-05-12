import React from 'react';
import Movie from './Movie';

const MovieList = ({ movies, onChangeRating }) => {
  return (
    <div>
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} onChangeRating={onChangeRating} />
      ))}
    </div>
  );
};

export default MovieList;
