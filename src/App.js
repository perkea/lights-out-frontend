import { React, useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Gallery from "./Pages/Gallery";
import Login from "./Pages/Login";
import Movie from "./Pages/Movie";
import Favourites from "./Pages/Favourites";
import Nav from "./components/Nav";
import Search from "./Pages/SearchBox";
import { auth } from "./services/firebase";


function App() {
  //const apiKey = "553ff4c7632836ac15fb42f83753edfd";
  //const url = `https://api.themoviedb.org/3/movie/popular?api_key=5${apiKey}&language=en-US&page=20`;
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=553ff4c7632836ac15fb42f83753edfd&language=en-US&page=100";
  console.log("the url", url);
  console.log("length", url.length);
  const [user, setUser] = useState(null);
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

  const [searchValue, setSearchValue] = useState("");

  // const getMovieRequest = async (searchValue) => {
  //   const url =
  //     "https://api.themoviedb.org/3/search/company?api_key=553ff4c7632836ac15fb42f83753edfd&page=1";
  // };

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((user) => setUser(user));
    return () => unsuscribe();
  }, []);
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            user ? (
              <div>
                <Nav user={user} />
                <div className="container movie-app">
                  <div className="row">
                    <Gallery movies={movies} user={user} />
                  </div>
                </div>
              </div>
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/movies/:id"
          render={(rp) =>
            user ? (
              <div>
                <Nav user={user} />
                <Movie {...rp} movies={movies} />
              </div>
            ) : (
              <Login />
            )
          }
        />
        <Route path="/favourites">
          <Nav user={user} />
          <Favourites />
        </Route>

        <Route path="/search">
          <Nav user={user} />
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        </Route>
        <Route path="/login" render={() => <Login />} />
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
