import React from "react";
import { Link } from "react-router-dom";
import Search from "../Pages/Search";

const Nav = (props) => {
  return (
    <div className="nav">
      <Link to="/">
        <div>Gallery</div>
      </Link>
      <Link to="/serials">
        <div>Serials</div>
      </Link>
      <Link to="/movies">
        <div>Movies</div>
      </Link>
      <Link to="/favourites">
        <div>Favourites</div>
      </Link>
      <Link to="/search">
        <Search />
      </Link>
      <Link to="/login">
        <div>Login</div>
      </Link>
      <Link to="/signup">
        <div>Sign up</div>
      </Link>
    </div>
  );
};

export default Nav;