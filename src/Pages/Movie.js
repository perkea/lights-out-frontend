import { useState, useEffect } from "react";
import { auth } from "../services/firebase";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import MovieCard from "./MovieCard";
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import { shadows } from '@material-ui/system';





const useStyles = makeStyles((theme) => ({
  title: {
  	color: "white",
  	paddingTop: 10
  },
  date: {
  	color: "lightgrey"
  },
  plot: {
  	color: "white",
  	paddingTop: 10
  },
  button: {
  	margin: 10,
  	fontWeight: "bolder"
  },
  poster: {
    maxWidth: 250,
    margin: 20,
    borderBlockColor: "red",
    display: "inline-block",
    [theme.breakpoints.down('xs')]: {
      maxWidth: "80%"
    }
  },
   box: {
    [theme.breakpoints.down('xs')]: {
      flexWrap: "wrap"
    }
  },
  link: {
    color: "white",
    padding: 10
  },
  list: {
    display: 'inline-block'
  },
  people: {
    maxWidth: 150,
    margin: 15,
    [theme.breakpoints.down('xs')]: {
      maxWidth: 60
    }
  },
  heading: {
  	fontSize: 30,
  	color: "white",
  	margin: 15
  },
  rating: {
  	margin: "0px 0px 20px 20px"
    // rateValue: {
    //   fontWeight: 'bold',
    //   marginTop: 2,
    // }
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
  	[theme.breakpoints.down('sm')]: {
  		width: "80%"
  	},
  	'&:focus': {
      outline: "none"
    }
  },
  postButton: {
  	// background: "transparent",
  	border: "2px solid white",
  	// color: "white",
  	fontWeight: "bolder",
  	borderRadius: 17
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
  rating: {
    fontWeight: "bold",
    marginTop: 2,
  }
}));

const Movie = (props) => {
  const classes = useStyles();
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
      <div>
     
        <div className="movie_component">
        <CircularProgress style={{ display: movie?"none":"block", margin: "20px auto" }}/>
        <Box display="flex" className={classes.box} justifyContent="flex-start" m={1} p={1}>
    	<Box p={1}>
          <img className={classes.poster} src={ imageUrl + "/" + movie.poster_path} />
        </Box>
        <Box>
        <Typography variant="h3" gutterBottom className={classes.title}>{ movie.title}</Typography>
        <Typography variant="subtitle1" gutterBottom className={classes.date}>{ movie.release_date}</Typography>
        <Typography variant="subtitle1" gutterBottom className={classes.plot}>{ movie.overview }</Typography>
        </Box>
        </Box>
          {/* <Box>
          <Typography className={classes.heading}>Post a Review</Typography>
          <Rating name={"rating"} value={props.rating} size={"small"} />
            <Typography variant={"body2"} className = {classes.rating}>
            {props.rating}
            </Typography>
          </Box> */}
          
          
          
          
          
          
          <img
            style={{ borderColor: "red" }}
            src={imageUrl + "/" + movie.poster_path}
            alt=""
          />
          <p>{movie.overview}</p>
          <h4>{movie.release_date}</h4>
          <h2>Reviews</h2>
          <hr />

          <Grid container spacing={12}>
            {reviews.length <= 0
              ? ""
              : reviews.map((r, index) => (
                  <Grid item xs={4}>
                    <MovieCard comment={r.comment} rating={r.rating} />
                  </Grid>
                ))}
          </Grid>

          <h2>Would you like to leave a Rating</h2>
          <hr />

          <Box display="flex" justifyContent="center" alignContent="center">
            {/* <Paper variant="outlined" square> */}
              <form onSubmit={handleSubmit}>
                {/* <TextareaAutosize
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
                /> */}
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
                {/* <Rating
                  name="rating"
                  value={review.rating}
                  label="rating"
                  onChange={handleChangeRating}
                /> */}
                <Rating 
                  name="rating"
                  label="rating"
                  value={review.rating} 
                  className={classes.rating} 
                  onChange={handleChangeRating}
                  />

                {/* <Button variant="contained" type="submit">
                  Add Review
                </Button> */}
                <Button variant="contained" type="submit" className={classes.postButton}>
                  Post Review
                </Button>

              </form>
            {/* </Paper> */}
          </Box>
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

{
  /* <Box
  sx={{
    width: 300,
    height: 300,
    backgroundColor: 'primary.dark',
    '&:hover': {
      backgroundColor: 'primary.main',
      opacity: [0.9, 0.8, 0.7],
    },
  }}
/>

<Box display="flex" className={classes.box} justifyContent="flex-start" m={1} p={1}>
    	<Box p={1}>
          <img className={classes.poster} src={ movie?("https://image.tmdb.org/t/p/w500"+movie.poster):"https://via.placeholder.com/400x600" } />
        </Box>
        <Box p={1}>
          <Typography variant="h3" gutterBottom className={classes.title}>{ movie?movie.title:"" }</Typography>
          <Typography variant="subtitle1" gutterBottom className={classes.date}>{ movie?toDate(movie.release_date):"" }</Typography>
          <Typography variant="subtitle1" gutterBottom className={classes.plot}>{ movie?movie.plot:"" }</Typography>
          <Typography variant="h5" gutterBottom className={classes.title}>Cast:</Typography>
          <Typography variant="subtitle1" gutterBottom className={classes.title}>{ movie?movie.cast.map(x=><Link href={"/people/"+x.people_id} className={classes.link}>{x.name}</Link>):"" }</Typography>
          <Button disabled={!(movie && movie.imdb_id)} variant="contained" href={"https://imdb.com/title/"+movie?movie.imdb_id:""} className={classes.button}>IMDB</Button>
        </Box>
  	</Box> */
}
