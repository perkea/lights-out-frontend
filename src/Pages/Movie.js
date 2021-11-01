import { useState, useEffect } from "react";

const Movie = (props) => {
  const imageWidth = "w300";
  const imageUrl = `https://image.tmdb.org/t/p/${imageWidth}/`;
  console.log("all the movies", props.movies);

  const movie_id = props.match.params.id;
  const movie_url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=553ff4c7632836ac15fb42f83753edfd&language=en-US`;
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState({ comment: "", rating: "5" });

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

  //helper functions for reviews state
  // function handleChange(event) {
  //   setReviews(({ reviews, newReview }) => ({
  //     reviews,
  //     newReview: {
  //       ...newReview,
  //       [event.target.name]: event.target.value,
  //     },
  //   }));
  // }

  // async function handleSubmit(event) {
  //   event.preventDefault();
  //   await fetch("http://localhost:4000/reviews/", {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "Application/json",
  //     },
  //     body: JSON.stringify(reviews.newReview),
  //   });
  // }
  // We need to make an HTTP request to localhost:3001/reviews
  // once we recieve the data we will use it to set our component state with reviews data
  // async function getReviews() {
  //   const response = await fetch("http://localhost:4000/reviews/");
  //   const reviews = await response.json();

  //   setReviews((prevState) => ({
  //     reviews,
  //     newReview: prevState.newReview,
  //   }));
  // }

  // useEffect(() => {
  //   getReviews(); // we're calling this during the initial load phase
  //   // this way out component has data as soon as the user lands on the page
  // }, []);

  async function getReviews() {
    const response = await fetch("http://localhost:4000/reviews/");
    const reviews = await response.json();
    console.log("all the reviews", reviews);
    setReviews(reviews);
  }

  useEffect(()=>{
    getReviews();
  }, []);
  console.log("all the reviews", reviews);

  const loaded = (props) => {
    return (
      <div className="movie_component">
        <img src={imageUrl + "/" + movie.poster_path} alt="" />
        <p>{movie.overview}</p>
        <h4>{movie.release_date}</h4>

        {/* <h2>Reviews</h2>
        <hr />
        <ul>
          <li> {reviews.reviews}</li>
        </ul>

        <h3>Add a rating</h3>
        <hr />
        {reviews.reviews.map((r) => {
          <article key={r.review}>
            <div>{r.review}</div>
            <div>{r.rating}</div>
          </article>;
        })}
        <form className="reviewForm" onSubmit={handleSubmit}>
          <label>
            <span>Leave a Rating</span>
            <select
              name="rating"
              value={reviews.newReview.rating}
              onChange={handleChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
          <label>Submit a Review</label>
          <textarea
            id="review"
            cols="30"
            rows="10"
            className="reviewForm"
            name="review"
            value={reviews.newReview.review}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Add Review</button>
        </form>
        <section /> */}
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
