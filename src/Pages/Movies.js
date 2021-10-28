import React from "react";
import Ratings from "./ReviewsList";
import { useState, useEffect } from "react";
import Review from "./Review";

const Movies = (props) => {
  const imageWidth = "w300";
  const imageUrl = `https://image.tmdb.org/t/p/${imageWidth}/`;
  console.log("the props", props);
  const movies = props.movies;
  console.log("all the mvies", movies);
  const id = props.match.params.id;
  console.log("the id ", id);
  if (movies === null) {
    return <div></div>;
  } else {
    const movie = movies.find((m) => {
      return m.id === parseInt(id);
    });

    const [formState, setFormState] = useState({
      name: "",
      review: "",
      rating: "",
    });

    //review form helperfunctions
    const handleChange = (event) => {
      setFormState((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }));
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      props.createReview(formState);
      //Add users uid to form;
      setFormState({
        name: "",
        review: "",
        rating: "",
      });
      
    };
    return (
      <div>
        <img src={imageUrl + "/" + movie.poster_path} alt="" />
        <h1>{movie.title}</h1>
        <p>{movie.release_date}</p>
        <p>{movie.overview}</p>
        {/* <Ratings reviews={reviews} /> */}
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={formState.name}
            name="name"
            type="text"
          />
          <input
            onChange={handleChange}
            value={formState.review}
            name="name"
            type="text"
          />
          <input
            onChange={handleChange}
            value={formState.rating}
            name="name"
            type="text"
          />
          <input type="submit" value="Add review" />
        </form>
        <p>
{props.reviews.map((review)=>{
  {review.name}
  {review.review}
  {review.rating}
})}

        </p>
      </div>
    );
  }
  // const movie = movies.find((m) => m._id === id);
  // console.log("single movie", movie);

  //   const movie = movies.find((movie)=>props._id ===id);
  //   console.log("single movie", movie);
  //   const imageWidth = "w300";
  //   const imageUrl = `https://image.tmdb.org/t/p/${imageWidth}/`;
  //   return(
  //     <div className = "individual_movie">
  // <img src = {imageUrl +'/' +movie.poster_path} alt =""/>
  // <h2>{movie.title}</h2>
  // <p>{movie.popularity}</p>
  //     </div>
  //   )
};

export default Movies;

{
  /* <img src = "movie_image" src={imageUrl +'/' +movie.poster_path} alt = "movie"/> */
}
