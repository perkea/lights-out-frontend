import React from "react";
// import { StyledMain } from "../styles";
import { signIn } from "../services/firebase";
// import { Card, CardContent, CardActions, Button } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Login = (props) => {
  return (
    <div class="container">
      <Box display="flex" justifyContent="flex-start" m={1} p={1}>
        <img
          style={{
            width: "700px",
            height: "500px",
            marginLeft: "50px",
            marginTop: "30px",
          }}
          src="/Images/stone-hood-ZiKTSf8BFj0-unsplash.jpg"
          alt="login_form"
        />

        <Grid container direction="row" alignItems="center" wrap="nowrap">
          
          <Grid
            color="green"
            wrap="nowrap"
            // marginLeft="-355px"
            // marginBottom="68px"
            // fontSize = "19px"
            marginLeft="72px"
            marginRight="100px"
            marginBottom="90px"
            fontSize="51px"
          >
            Howdy
          </Grid>
          <Button onClick={signIn} variant="contained">
            Sign in with Google
          </Button>
        </Grid>
      </Box>
    </div>
  );
};

export default Login;
