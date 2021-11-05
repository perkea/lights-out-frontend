
import { signIn } from "../services/firebase";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useHistory } from 'react-router-dom'

const Login = (props) => {
  const history = useHistory();
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
  history.push("/");
};

export default Login;
