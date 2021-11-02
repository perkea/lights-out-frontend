import { React, useState } from "react";
import Button from '@mui/material/Button';

const Review = ({ addReview }) => {
  const [review, setReview] = useState({
    review: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    setReview({ review: "" });
    console.log(review)
  }

  function handleChange(event) {
    setReview({ ...review, review: event.target.value });
  }

  return (
    <form className="reviewForm" onSubmit={handleSubmit}>
      <label>Submit a Review</label>
      <textarea
        id="review"
        cols="30"
        rows="10"
        className="reviewForm"
        name="review"
        value={review.review}
        onChange={handleChange}
      ></textarea>

      <button type="submit">Add Review</button>
    </form>
  );
};

export default Review;
