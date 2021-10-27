import { React, useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Gallery from "./Pages/Gallery";
import Serials from "./Pages/Serials";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Movies from "./Pages/Movies";
import Favourites from "./Pages/Favourites";
import Search from "./Pages/Search";
import Nav from "./components/Nav";

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
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Nav />
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
        <Route path="/movies/:id" render={(rp) => <Movies {...rp} movies={movies} />} />
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
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/Signup">
          <Signup />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
