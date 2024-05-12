// ReviewForm.js
import React, { useState } from 'react';

const ReviewForm = ({ onReviewSubmit }) => {
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!reviewText.trim()) return; // Prevent empty reviews
    onReviewSubmit(reviewText);
    setReviewText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        placeholder="Leave a review..."
        rows={4}
        cols={50}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;
