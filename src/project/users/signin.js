import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [error, setError] = useState("");
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    try {
      await client.signin(user);
      navigate("/project/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="w-50">
      <h1>Signin</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <input
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
        className="form-control mb-2"
      />
      <input
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        type="password"
        placeholder="password"
        className="form-control mb-2"
      />
      <button onClick={signin} className="btn btn-primary w-100">
        Signin
      </button>
    </div>
  );
}

export default Signin;
