import React from 'react';

const Stars = ({ rating, onChangeRating }) => {
  const stars = [1, 2, 3, 4, 5];

  const handleRatingChange = (newRating) => {
    onChangeRating(newRating);
  };

  return (
    <div>
      {stars.map((star) => (
        <span
          key={star}
          onClick={() => handleRatingChange(star)}
          style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'gray' }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Stars;
