import { React, useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Gallery from "./Pages/Gallery";
import Serials from "./Pages/Serials";
import Login from "./Pages/Login";
import Movie from "./Pages/Movie";
import Favourites from "./Pages/Favourites";
import Nav from "./components/Nav";
import Search from "./Pages/Search";
import { auth } from "./services/firebase";

function App() {
  //const apiKey = "553ff4c7632836ac15fb42f83753edfd";
  //const url = `https://api.themoviedb.org/3/movie/popular?api_key=5${apiKey}&language=en-US&page=20`;
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=553ff4c7632836ac15fb42f83753edfd&language=en-US&page=100";
  

  console.log("the url", url);
  console.log("length", url.length);
  const [movies, setMovies] = useState(null);
  const [requestedMovies, setRequestedMovies] = useState(false);
  

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

  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url =
      "https://api.themoviedb.org/3/search/company?api_key=553ff4c7632836ac15fb42f83753edfd&page=1";
  };

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((user) => setUser(user));
    // getReviews();
    return () => unsuscribe();
  }, [user]);
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
          render={(rp) => <Movie {...rp} movies={movies} />}
        />
        {/* <Route path="/movies">
          <Movies />
        </Route> */}
        <Route path="/favourites">
          <Nav />
          <Favourites />
        </Route>
        <Route path="/search">
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
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
        <Route path="/movies" />
      </Switch>
    </div>
  );
}

export default App;
