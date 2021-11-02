import { Link, Redirect } from "react-router-dom";
import { logOut } from "../services/firebase";
import { auth } from "../services/firebase";
import { useState, useEffect } from "react";

const Nav = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setUser(user));
    return () => unsubscribe();
  }, []);

  return (
    <div className="nav">
      <Link to="/">
        <div>Movie Gallery</div>
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
      <Link to="/search"></Link>
      {props.user ? (
        <>
          <h1 onClick={logOut} className="logButtons">
            Logout
          </h1>
          <p className="userName" id="displayName">
            Welcome, {props.user.displayName}
          </p>
          <p>
            <img
              src={props.user.photoURL}
              alt={props.user.displayName}
              className="userName"
              id="userPhoto"
            />
          </p>
        </>
      ) : (
        <Link to="/login">
          <div>Login</div>
        </Link>
      )}
      <Link to="/signup">
        <div>Signup</div>
      </Link>
      <Link to="/search">
        <div>Search</div>
      </Link>
    </div>
  );
};

export default Nav;
