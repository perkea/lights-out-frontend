import React from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch} from "react-router-dom";
import Gallery from "./Pages/Gallery";
import Serials from './Pages/Serials';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Movies from "./Pages/Movies";
import Favourites from './Pages/Favourites';
import Search from "./Pages/Search"
import Nav from "./components/Nav"

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path="/">
      <Nav />
        <Gallery />
      </Route>
      <Route path="/serials">
      <Nav />
        <Serials />
      </Route>
      <Route path="/movies">
        <Movies />
      </Route>
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
        <Signup/>
      </Route>
      </Switch >
    </div>
  );
}

export default App;
