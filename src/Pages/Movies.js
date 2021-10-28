import React from "react";
import Ratings from "./ReviewsList";
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
    const [reviews, setReviews] = useState([
      { review: "Very cool movie", rating: 3 },
      { rewiew: "I dint like this movie", rating: 1 },
    ]);

    function addReview(review) {
      setReviews([...reviews, review]);
    }
    console.log("single movie", movie);
    return (
      <div>
        <img src={imageUrl + "/" + movie.poster_path} alt="" />
        <h1>{movie.title}</h1>
        <p>{movie.release_date}</p>
        <p>{movie.overview}</p>
        <Ratings reviews={reviews} />
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
