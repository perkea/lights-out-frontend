import Ratings from "./Rating";
import Review from "./Review";
import { useState, useEffect } from "react";

const Movie = (props) => {
  const imageWidth = "w300";
  const imageUrl = `https://image.tmdb.org/t/p/${imageWidth}/`;
  console.log("all the movies", props.movies);

  const movie_id = props.match.params.id;
  const movie_url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=553ff4c7632836ac15fb42f83753edfd&language=en-US`;
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState({
    reviews: [],
    newReview: {
      review: "",
      rating: "",
    },
  });

  //helper functions for reviews state
  function handleChange(event) {
    setReviews(({ reviews, newReview }) => ({
      reviews,
      newReview: {
        ...newReview,
        newReview: event.target.value,
      },
    }));
  }

  const getMovieRequest = async () => {
    const response = await fetch(movie_url);
    console.log("the response from the server", response);
    const data = await response.json();
    console.log("response in json", data);
    setMovie(data);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);
  console.log("the movie I chose", movie);
  // console.log("the props", props);
  // const movies = props.movies;
  // console.log("all the mvies", movies);
  // const id = props.match.params.id;
  // console.log("the id ", id);
  // let movie = null;
  // if (movies === null) {
  //   return <div>empty</div>;
  // } else {
  //   movie = movies.find((m) => {
  //     return m.id === parseInt(id);
  //   });
  //   if (movie === null) {
  //     return <div>empty</div>;
  //   }
  //   console.log("the movie i want", movie, movies, id);

  const loaded = (props) => {
    return (
      <div className="movie_component">
        <img src={imageUrl + "/" + movie.poster_path} alt="" />
        <p>{movie.overview}</p>
        <h4>{movie.release_date}</h4>
        <Review review={props.review} />
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading......</h1>;
  };
  // return (
  //   <div>
  //     <img src={imageUrl + "/" + movie.poster_path} alt="" />
  //     <h1>{movie.title}</h1>
  //     <p>{movie.release_date}</p>
  //     <p>{movie.overview}</p>
  //     <Ratings />
  //     <Review />
  //   </div>
  // );
  return movie ? loaded() : loading();
};

export default Movie;
