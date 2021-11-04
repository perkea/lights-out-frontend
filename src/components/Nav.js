// import { Link as ReactLink, Redirect } from "react-router-dom";
import { logOut } from "../services/firebase";
import { auth } from "../services/firebase";
import { useState, useEffect } from "react";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
// import { Typography } from "@mui/material";
// import { IconButton } from "@mui/material";
import { Button } from "@mui/material";
// import { MenuIcon } from "@mui/material";
import { Link } from "@mui/material";
import {makeStyles } from "@mui/styles";
// import SearchIcon from '@material-ui/icons/Search';

// const useStyles = makeStyles({
//   search: {
//     position: 'relative',
//     borderRadius: 20,
//     marginLeft: 0,
//     width: '100%',
   
//   }
//  });


const Nav = (props) => {
  const [user, setUser] = useState(null);
  console.log(user)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setUser(user));
    return () => unsubscribe();
  }, []);

  return (
    <AppBar position="static" justify>
      <Toolbar className="toolbar">
        <Link>
          <a href = "/" > <img style={{width: "128px", height: "105px",}} src="Images/movie_night.png" alt="logo"/></a>
        </Link>
        {/* <Link href="/movies">
          <div>Movies</div>
        </Link> */}
        <Link href="/search">
          <div>Search</div>
        </Link>
        <Link href="/favourites">
          <div>Favourites</div>
        </Link>
        {props.user ? (
          <div style = {{float:"right"}}>
            {/* <div style={{color:"white", display:"inline", marginLeft: "200px"}} className="userName" id="displayName">
              Welcome, {props.user.displayName}
            </div> */}
            <div style={{color:"white", display:"inline", marginLeft: "600px"}}>
              Welcome&nbsp; 
              <img
                src={props.user.photoURL}
                alt={props.user.displayName}
                className="userName"
                id="userPhoto"
                style = {{borderRadius:"61px", width:"30px"}}
  
              />
            </div>
            <Button onClick={logOut} style={{color:"white", display:"inline"}} className="logButtons">
              Logout
            </Button>

          </div>
        ) : (
          <Link href="/login">
            <div>Login</div>
          </Link>
        )}
      </Toolbar>
    </AppBar>

    //   <IconButton edge="start" color="inherit" aria-label="menu" >
    //   {/* <MenuIcon /> */}
    // </IconButton>
    // <Typography variant="h6" >Gallery</Typography>
    // <Button color="inherit">Signup</Button>
    // <div className="nav">
    //   <Link to="/">

    //   </Link>
    //   <Link to="/serials">
    //     <div>Serials</div>
    //   </Link>
    //   <Link to="/movies">
    //     <div>Movies</div>
    //   </Link>
    //   <Link to="/favourites">
    //     <div>Favourites</div>
    //   </Link>
    //   <Link to="/search"></Link>
    //   {props.user ? (
    //     <>
    //       <h1 onClick={logOut} className="logButtons">
    //         Logout
    //       </h1>
    //       <p className="userName" id="displayName">
    //         Welcome, {props.user.displayName}
    //       </p>
    //       <p>
    //         <img
    //           src={props.user.photoURL}
    //           alt={props.user.displayName}
    //           className="userName"
    //           id="userPhoto"
    //         />
    //       </p>
    //     </>
    //   ) : (
    //     <Link to="/login">
    //       <div>Login</div>
    //     </Link>
    //   )}
    //   <Link to="/signup">
    //     <div>Signup</div>
    //   </Link>
    //   <Link to="/search">
    //   </Link>
    // </div>
  );
};

export default Nav;
