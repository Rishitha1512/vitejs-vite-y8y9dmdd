import { useState } from 'react';

function RatingWidget({ productId, onRatingSubmit }) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
    onRatingSubmit(productId, value);
  };

  const handleMouseEnter = (value) => {
    setHoveredRating(value);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= (hoveredRating || rating) ? 'filled' : ''}`}
          onClick={() => handleClick(i)}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="rating-widget">
      <div className="stars">{renderStars()}</div>
      <button
        onClick={() => rating > 0 && onRatingSubmit(productId, rating)}
        disabled={rating === 0}
      >
        Submit Rating
      </button>
    </div>
  );
}

export default RatingWidget;
