import React from "react";
import { StyledMain } from "../styles";
import { signIn } from "../services/firebase";
import { Card, CardContent, CardActions, Button } from "@mui/material";

const Login = (props) => {
  return (
    <StyledMain>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
            <img
                src="/Images/stone-hood-ZiKTSf8BFj0-unsplash.jpg"
                alt="login form"
                class="img-fluid" 
                style={{width: "600px", height: "300px"}}
                />
        </CardContent>
        <CardActions>
            <Button onClick={signIn} >Sign in with Google</Button>
        </CardActions>
      </Card>
    </StyledMain>
  );
};

export default Login;




// import React from "react";
// import { useHistory } from 'react-router-dom'
// import { StyledMain } from "../styles";
// import { signIn } from "../services/firebase";
// import { Grid } from "@mui/material";
// import PropTypes from "prop-types";

// function Item(props) {
//     const { sx, ...other } = props;
//     return (
//       <Item
//         sx={{
//           bgcolor: "primary.main",
//           color: "white",
//           p: 1,
//           m: 1,
//           borderRadius: 1,
//           textAlign: "center",
//           fontSize: "1rem",
//           fontWeight: "700",
//           ...sx,
//         }}
//         {...other}
//       />
//     );
//   }
  
//   Item.propTypes = {
//     sx: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
//   };


// const Login = (props) => {
//     const history = useHistory();
//   return (

        
// <Grid container spacing={2} columns={16}>
// <h1>Login</h1>
//   <Grid item xs={8}>
//     <Item>IMage</Item>
//   </Grid>
//   <Grid item xs={8}>
//     <Item>
//         <button onClick={signIn}>Sign in with Google</button>
//         </Item>
//   </Grid>
// </Grid>
      
//   )};

// export default Login;




// const Login = (props) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   function handleSubmit(event) {
//     //
//     event.preventDefault();
//   }

//   return (
//     <div>

//       <form onSubmit={handleSubmit}>
//         <label>Username</label>
//         <input
//           type="text"
//           value={username}
//           onChange={(event) => {
//             setUsername(event.target.value);
//           }}
//         />

//         <label>Password</label>
//         <input
//           type="text"
//           value={password}
//           onChange={(event) => {
//             setPassword(event.target.value);
//           }}
//         />
//       </form>
//       <button type="submit">Login</button>
//     </div>
//   );
// };

// export default Login;







// <section class="vh-100" style="background-color: #9A616D;">
//   <div class="container py-5 h-100">
//     <div class="row d-flex justify-content-center align-items-center h-100">
//       <div class="col col-xl-10">
//         <div class="card" style="border-radius: 1rem;">
//           <div class="row g-0">
//             <div class="col-md-6 col-lg-5 d-none d-md-block">
//               <img
//                 src="frontend/src/Images/stone-hood-ZiKTSf8BFj0-unsplash.jpg"
//                 alt="login form"
//                 class="img-fluid" style="border-radius: 1rem 0 0 1rem;"
//               />
//             </div>
//             <div class="col-md-6 col-lg-7 d-flex align-items-center">
//               <div class="card-body p-4 p-lg-5 text-black">

//                 <form>

//                   <div class="d-flex align-items-center mb-3 pb-1">
//                     <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219;"></i>
//                     <span class="h1 fw-bold mb-0">Logo</span>
//                   </div>

//                   <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Sign into your account</h5>

//                   <div class="form-outline mb-4">
//                     <input type="email" id="form2Example17" class="form-control form-control-lg" />
//                     <label class="form-label" for="form2Example17">Email address</label>
//                   </div>

//                   <div class="form-outline mb-4">
//                     <input type="password" id="form2Example27" class="form-control form-control-lg" />
//                     <label class="form-label" for="form2Example27">Password</label>
//                   </div>

//                   <div class="pt-1 mb-4">
//                     <button class="btn btn-dark btn-lg btn-block" type="button" onClick={signIn}>Sign in with Google</button>
//                   </div>

//                   <a class="small text-muted" href="#!">Forgot password?</a>
//                   <p class="mb-5 pb-lg-2" style="color: #393f81;">Don't have an account? <a href="#!" style="color: #393f81;">Register here</a></p>
                
//                 </form>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
// const Login = (props) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   function handleSubmit(event) {
//     //
//     event.preventDefault();
//   }

//   return (
//     <div>

//       <form onSubmit={handleSubmit}>
//         <label>Username</label>
//         <input
//           type="text"
//           value={username}
//           onChange={(event) => {
//             setUsername(event.target.value);
//           }}
//         />

//         <label>Password</label>
//         <input
//           type="text"
//           value={password}
//           onChange={(event) => {
//             setPassword(event.target.value);
//           }}
//         />
//       </form>
//       <button type="submit">Login</button>
//     </div>
//   );
// };

// export default Login;
