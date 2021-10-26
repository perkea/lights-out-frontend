import {React, useState} from "react";

const Ratings = () => {
  const [rating, setRating] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= rating ? "on" : "off"}
            onClick={() => setRating(index)}
          >
            <span className="star"><i className="far fa-star"></i></span>
          </button>
        );
      })}
    </div>
  );
};



export default Ratings;