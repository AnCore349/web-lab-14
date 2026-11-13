import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const showPreviousReview = () => {
    setIndex((currentIndex) =>
      currentIndex === 0 ? people.length - 1 : currentIndex - 1
    );
  };

  const showNextReview = () => {
    setIndex((currentIndex) =>
      currentIndex === people.length - 1 ? 0 : currentIndex + 1
    );
  };

  const showRandomReview = () => {
    if (people.length < 2) {
      return;
    }

    const offset = Math.floor(Math.random() * (people.length - 1)) + 1;
    setIndex((currentIndex) => (currentIndex + offset) % people.length);
  };

  return (
    <article className="review" aria-live="polite">
      <div className="img-container">
        <img className="person-img" src={image} alt={name} />
        <span className="quote-icon" aria-hidden="true">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div>
        <button
          className="prev-btn"
          type="button"
          onClick={showPreviousReview}
          aria-label="Previous review"
        >
          <FaChevronLeft />
        </button>
        <button
          className="next-btn"
          type="button"
          onClick={showNextReview}
          aria-label="Next review"
        >
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" type="button" onClick={showRandomReview}>
        Surprise me
      </button>
    </article>
  );
};

export default Review;
