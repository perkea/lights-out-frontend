import { React, useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Gallery from "./Pages/Gallery";
import Serials from "./Pages/Serials";
import Login from "./Pages/Login";
import Movies from "./Pages/Movies";
import Favourites from "./Pages/Favourites";
import Search from "./Pages/Search";
import Nav from "./components/Nav";
import { auth } from "./services/firebase";

function App() {
  //const apiKey = "553ff4c7632836ac15fb42f83753edfd";
  //const url = `https://api.themoviedb.org/3/movie/popular?api_key=5${apiKey}&language=en-US&page=20`;
  // test commit
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=553ff4c7632836ac15fb42f83753edfd&language=en-US&page=100";

  console.log("the url", url);
  console.log("length", url.length);
  const [movies, setMovies] = useState(null);
  const [requestedMovies, setRequestedMovies] = useState(false);
  const [reviews, setReviews] = useState([]);
  const API_URL = "http://localhost:3001/api/reviews";

  //function to fetch movie data
  const getMovies = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log("movie data got back", data);
    setMovies(data.results);
  };
  if (requestedMovies === false) {
    setRequestedMovies(true);
    getMovies();
  }

  //Setting up authentication
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((user) => setUser(user));
    getReviews();
    return()=> unsuscribe()
  }, [user]);

  //reviews helper functions
  const getReviews = async () => {
    if (!user) return;

  // get a secure id token from our firebase user
  const token = await user.getIdToken();
  const response = await fetch(API_URL, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });
  const reviews = await response.json();
  setReviews(reviews);
}
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Nav user={user} />
          <div className="container movie-app">
            <div className="row">
              <Gallery movies={movies} />
            </div>
          </div>
        </Route>
        <Route path="/serials">
          <Nav />
          <Serials />
        </Route>
        <Route
          path="/movies/:id"
          render={(rp) => <Movies {...rp} movies={movies} />}
        />
        {/* <Route path="/movies">
          <Movies />
        </Route> */}
        <Route path="/favourites">
          <Nav />
          <Favourites />
        </Route>
        <Route path="/search">
          <Nav />
          <Search />
        </Route>
        <Route
          path="/login"
          render={() => (user ? <Redirect to="/gallery" /> : <Login />)}
        />
        <Route
          path="/gallery"
          render={() => {
            user ? <Gallery /> : <Redirect to="/login" />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
