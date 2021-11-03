import { useState, useEffect } from "react";
import { auth } from "../services/firebase";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { palette } from "@mui/system";

const Movie = (props) => {
  // const [mode, toggleMode] = useDarkMode();
  // const theme = createTheme(
  //   {
  //     palatte: {
  //       mode: mode,
  //     },
  //   },
  //   [mode]
  // );

  const imageWidth = "w300";
  const imageUrl = `https://image.tmdb.org/t/p/${imageWidth}/`;
  console.log("all the movies", props.movies);

  const movie_id = props.match.params.id;
  const movie_url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=553ff4c7632836ac15fb42f83753edfd&language=en-US`;
  const [user, setUser] = useState(null);
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState({
    comment: "",
    rating: "5",
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setUser(user));
    return () => unsubscribe();
  }, []);
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

 
  async function handleSubmit(event) {
    event.preventDefault();

    let toSaveReview = {
      ...review,
      movieId: movie_id,
    };
    console.log("my review", toSaveReview);
    await fetch(`http://localhost:4000/reviews`, {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(toSaveReview),
    });

    getReviews();
    setReview((prevState) => ({
      ...prevState,
      comment: "",
      rating: "",
    }));
  }
  function handleChangeReview(event) {
    setReview({ ...review, comment: event.target.value });
  }

  function handleChangeRating(event) {
    setReview({ ...review, rating: event.target.value });
  }
 

  async function getReviews() {
    const response = await fetch(
      `http://localhost:4000/reviews/moviesearch/${movie_id}`
    );
    const result = await response.json();
    console.log("all the reviews", result);
    setReviews(result.review);
  }

  useEffect(() => {
    getReviews();
  }, []);
  console.log("all the reviews", reviews);
  const loaded = (props) => {
    console.log("render loaded ", reviews);
    return (
      // <ThemeProvider theme={mode}>
      //   <Swt>
          <div className="movie_component">
            <img src={imageUrl + "/" + movie.poster_path} alt="" />
            <p>{movie.overview}</p>
            <h4>{movie.release_date}</h4>
            {/* {reviews} */}
            <h2>Reviews</h2>
            <hr />
            <ul>
              {reviews.length <= 0
                ? ""
                : reviews.map((r, index) => (
                    <li>
                      <article key={index}>
                        <div>{r.comment}</div>
                        <div>{r.rating}</div>
                      </article>
                    </li>
                  ))}
            </ul>

            <h2>Would you like to leave a Rating</h2>
            <hr />

            <Box display="flex" justifyContent="center" alignContent="center">
              <Paper variant="outlined" square>
                <form onSubmit={handleSubmit}>
                  <TextareaAutosize
                    type="text"
                    name="comment"
                    value={review.comment}
                    className="reviewForm"
                    maxRows={6}
                    aria-label="maximum height"
                    placeholder="Write a Review"
                    style={{ width: 200 }}
                    label="comment"
                    onChange={handleChangeReview}
                  />
                  <Typography component="legend">
                    Would you like to leave a Rating
                  </Typography>
                  <Rating
                    name="rating"
                    value={review.rating}
                    label="rating"
                    onChange={handleChangeRating}
                  />
                  <Button variant="contained" type="submit">
                    Add Review
                  </Button>
                </form>
              </Paper>
            </Box>
          </div>
      //   </Swt>
      // </ThemeProvider>
    );
  };

  const loading = () => {
    return <h1>Loading......</h1>;
  };
  
  return movie ? loaded() : loading();
};

export default Movie;
