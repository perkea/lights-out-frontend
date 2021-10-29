
import Ratings from "./Rating";
// import { useState, useEffect } from "react";
import Review from "./Review";

const Movie = (props) => {
  const imageWidth = "w300";
  const imageUrl = `https://image.tmdb.org/t/p/${imageWidth}/`;
  console.log("the props", props);
  const movies = props.movies;
  console.log("all the mvies", movies);
  const id = props.match.params.id;
  console.log("the id ", id);
  if (movies === null) {
    return <div>empty</div>;
  } else {
    const movie = movies.find((m) => {
      return m.id === parseInt(id);
    });

   
    return (
      <div>
          <img src={imageUrl + "/" + movie.poster_path} alt="" />
        <h1>{movie.title}</h1>
        <p>{movie.release_date}</p>
        <p>{movie.overview}</p>
        <Ratings/>
        <Review />
        </div>
        )}}
        
       
export default Movie;

