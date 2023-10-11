import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const login = () => {
    if (username === "admin" && password === "admin") {
      setIsAuthenticated(true);
    }
  };
  const logout = () => {
    setIsAuthenticated(false);
  };
  return (
    <div>
      <h2>Login</h2>
      {isAuthenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <button onClick={login}>Login</button>
        </div>
      )}
    </div>
  );
}

export default Login;
