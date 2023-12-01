import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "../project/users/client";
import { setCurrentUser } from "../project/users/reducer";
import { useDispatch } from "react-redux";

function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = async () => {
    try {
      const user = await client.signin(credentials);
      dispatch(setCurrentUser(user));
      navigate("/Kanbas/Dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Signin</h1>
      <input
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
        value={credentials.username}
        type="text"
        className="form-control"
        placeholder="username"
      />
      <br />
      <input
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
        value={credentials.password}
        type="password"
        className="form-control"
        placeholder="password"
      />
      <br />
      <button onClick={login} className="btn btn-primary">
        Signin
      </button>
    </div>
  );
}

export default Signin;
