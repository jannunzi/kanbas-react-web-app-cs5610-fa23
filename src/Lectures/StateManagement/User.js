import { useState } from "react";

function User() {
  const [user, setUser] = useState({
    firstName: "Alice",
    lastName: "Wonderland",
    email: "alice@wonderland.com",
  });

  return (
    <div>
      <h2>User</h2>
      <p>
        {user.firstName} {user.lastName}
      </p>
      <p>{user.email}</p>
      <input
        value={user.firstName}
        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
      />
      <input
        value={user.lastName}
        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
      />
      <input
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
    </div>
  );
}

export default User;
