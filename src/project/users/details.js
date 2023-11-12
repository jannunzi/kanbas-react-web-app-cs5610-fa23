import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import * as client from "./client";

function UserDetails() {
  const [user, setUser] = useState({});
  const { uid } = useParams();
  const fetchUser = async (id) => {
    const user = await client.findUserById(id);
    setUser(user);
  };
  useEffect(() => {
    fetchUser(uid);
  }, []);
  return (
    <div className="w-50">
      <h1>User Details</h1>
      <input
        value={user.username}
        readOnly
        placeholder="username"
        className="form-control mb-2"
      />
      <input
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        value={user.password}
        type="password"
        className="form-control mb-2"
      />
    </div>
  );
}

export default UserDetails;
