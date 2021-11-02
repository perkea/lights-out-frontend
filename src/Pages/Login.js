import React from "react";
import { useHistory } from 'react-router-dom'
import { StyledMain } from "../styles";
import { signIn } from "../services/firebase";
// import Button from '@mui/material/Button';

const Login = (props) => {
    const history = useHistory();
  return (
   <>
        <section className="vh-100" style="background-color: #9A616D;">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" style="border-radius: 1rem;">
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img
                src="frontend/src/Images/stone-hood-ZiKTSf8BFj0-unsplash.jpg"
                alt="login form"
                className="img-fluid" style="border-radius: 1rem 0 0 1rem;"
              />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">

                <form>

                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3" style="color: #ff6219;"></i>
                    <span className="h1 fw-bold mb-0">Logo</span>
                  </div>

                  <h5 className="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Sign into your account</h5>

                  <div className="form-outline mb-4">
                    <input type="email" id="form2Example17" className="form-control form-control-lg" />
                    <label className="form-label" for="form2Example17">Email address</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" id="form2Example27" className="form-control form-control-lg" />
                    <label className="form-label" for="form2Example27">Password</label>
                  </div>

                  <div className="pt-1 mb-4">
                    <button className="btn btn-dark btn-lg btn-block" type="button" onClick={signIn}>Sign in with Google</button>
                  </div>

                  <a className="small text-muted" href="#!">Forgot password?</a>
                  <p class="mb-5 pb-lg-2" style="color: #393f81;">Don't have an account? <a href="#!" style="color: #393f81;">Register here</a></p>
                
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      <h1>Login</h1>
      <button onClick={signIn}>Sign in with Google</button>
      </>
  );
  history.push("/");

};

export default Login;



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
