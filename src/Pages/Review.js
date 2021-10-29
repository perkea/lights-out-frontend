import { React, useState } from "react";

const Review = ({ addReview }) => {
  const [review, setReview] = useState({
    review: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    addReview(review);
    setReview({ review: "" });
  }

  function handleChange(event) {
    setReview({ ...review, [event.target.name]: event.target.value });
  }

  return(
<form className = "reviewForm" onSubmit = {handleSubmit}>
<label>Submit a Review</label>
<textarea name="
" id="review" cols="30" rows="10"></textarea>
<input 
className = "reviewForm"
name = "review"
value = {review.review}
onChange = {handleChange}
/>
<button type = "submit">Add Review</button>



</form>



  );
};

export default Review;
