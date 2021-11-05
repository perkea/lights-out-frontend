import { useState, useEffect } from "react";
import { auth } from "../services/firebase";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles((theme) => ({
  title: {
    paddingTop: 10,
    color: "crimson",
    fontFamily: "fantasy",
  },
  date: {
    color: "lightgrey",
  },
  plot: {
    color: "white",
    paddingTop: 10,
  },
  button: {
    margin: 10,
    fontWeight: "bolder",
  },
  poster: {
    maxWidth: 250,
    margin: 20,
    borderBlockColor: "red",
    display: "inline-block",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "80%",
    },
  },
  box: {
    [theme.breakpoints.down("xs")]: {
      flexWrap: "wrap",
    },
  },
  link: {
    color: "white",
    padding: 10,
  },

  people: {
    maxWidth: 150,
    margin: 15,
    [theme.breakpoints.down("xs")]: {
      maxWidth: 60,
    },
  },
  heading: {
    fontSize: 30,
    color: "crimson",
    margin: 15,
    fontFamily: "monospace",
  },
  rating: {
    margin: "0px 0px 20px 20px",
  },

  postButton: {
    border: "2px solid white",
    fontWeight: "bolder",
    borderRadius: 17,
  },
  reviewBox: {
    maxWidth: 500,
    fontSize: 20,
    fontWeight: "bolder",
    width: "250%",
    background: "rgb(30,30,30)",
    border: "none",
    padding: 15,
    color: "white",
    borderRadius: 30,
    letterSpacing: 3,
    wordSpacing: 7,

    "&:focus": {
      outline: "none",
    },
  },

  list: {
    background: "#121212",
    color: "white",
    margin: 30,
  },
  container: {
    border: "12px solid #930521",
    borderRadius: "10px",
    marginTop: "15px",
    marginBottom: "15px",
  },
}));

const Movie = (props) => {
  const classes = useStyles();
  const API_URL = "https://lights-out-project3.herokuapp.com/reviews";
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

  console.log(user);
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
    await fetch(`${API_URL}`, {
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
    const response = await fetch(`${API_URL}/moviesearch/${movie_id}`);
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
      <div>
        <div className={classes.container}>
          <CircularProgress
            style={{ display: movie ? "none" : "block", margin: "20px auto" }}
          />
          <Box
            display="flex"
            className={classes.box}
            justifyContent="flex-start"
            m={1}
            p={1}
          >
            <Box p={1}>
              <img
                className={classes.poster}
                src={imageUrl + "/" + movie.poster_path}
              />
            </Box>
            <Box>
              <Typography variant="h3" gutterBottom className={classes.title}>
                {movie.title}
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                className={classes.date}
              >
                {movie.release_date}
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                className={classes.plot}
              >
                {movie.overview}
              </Typography>
            </Box>
          </Box>
          <Box display="flex" justifyContent="center" alignContent="center">
            <form onSubmit={handleSubmit}>
              <Typography className={classes.heading}>Post Review</Typography>
              <TextareaAutosize
                name="comment"
                label="comment"
                value={review.comment}
                maxLength={300}
                className={classes.reviewBox}
                boxShadow={3}
                rowsMin={6}
                placeholder={"Post something"}
                onChange={handleChangeReview}
              />
              <Typography component="legend">
                Would you like to leave a Rating
              </Typography>
              <Rating
                name="rating"
                label="rating"
                value={review.rating}
                className={classes.rating}
                onChange={handleChangeRating}
              />
              <Button
                variant="contained"
                type="submit"
                className={classes.postButton}
              >
                Post Review
              </Button>
            </form>
          </Box>
          <Typography className={classes.heading}>Reviews</Typography>
          <CircularProgress
            style={{ display: reviews ? "none" : "block", margin: "20px auto" }}
          />
          <List component="nav" className={classes.list}>
            {reviews.map((review, index) => (
              <ListItem button>
                <Typography className={classes.text}>
                  {review.comment}
                </Typography>
                <Typography className={classes.text}>
                  <Rating value={review.rating} />
                </Typography>
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading......</h1>;
  };

  return movie ? loaded() : loading();
};

export default Movie;
