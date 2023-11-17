import * as client from "./client";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const signIn = async () => {
    try {
      const credentials = { username: username, password: password };
      const user = await client.signin(credentials);
      navigate("/project/account");
    } catch (error) {
      setError(error);
    }
  };
  return (
    <div>
      <h2>Sign In</h2>
      {error && <div className="alert alert-danger">{error.message}</div>}
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        className="form-control"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signIn} className="btn btn-primary">
        Sign In
      </button>
    </div>
  );
}

export default SignIn;
