import React from "react";
import { useHistory } from 'react-router-dom'
import { StyledMain } from "../styles";
import { signIn } from "../services/firebase";

const Login = (props) => {
    const history = useHistory();
  return (
    <StyledMain>
        
      <h1>Login</h1>
      <button onClick={signIn}>Sign in with Google</button>
    </StyledMain>
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
