
import { logOut } from "../services/firebase";
import { auth } from "../services/firebase";
import { useState, useEffect } from "react";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "@mui/material";


const Nav = (props) => {
  const [user, setUser] = useState(null);
  console.log(user)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setUser(user));
    return () => unsubscribe();
  }, []);

  return (
    <AppBar position="static" justify >
      <Toolbar className="toolbar" >
        <Link>
          <a href = "/" > <img style={{width: "128px", height: "105px"}} src="/Images/movie_night.png" alt="logo"/></a>
        </Link>
        <Link href="/search">
          <div style = {{fontFamily : "monospace" ,fontSize: "19px"}}>Search</div>
        </Link>
        <Link href="/favourites">
          <div style = {{fontFamily : "monospace" ,fontSize: "19px"}}>Favourites</div>
        </Link>
        {props.user ? (
          <div style = {{float:"right"}}>
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
            <div style = {{fontFamily : "monospace" ,fontSize: "19px"}}>Login</div>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
