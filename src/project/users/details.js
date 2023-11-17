import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import * as client from "./client";
import * as likesClient from "../likes/client";
import { useEffect, useState } from "react";
function UserDetails() {
  const [user, setUser] = useState(null);
  const [likes, setLikes] = useState([]);
  const { id } = useParams();
  const fetchLikes = async () => {
    const likes = await likesClient.findAlbumsThatUserLikes(id);
    setLikes(likes);
  };
  const navigate = useNavigate();
  const fetchUser = async () => {
    const user = await client.findUserById(id);
    setUser(user);
  };
  const updateUser = async () => {
    const status = await client.updateUser(id, user);
  };
  const deleteUser = async (id) => {
    const status = await client.deleteUser(id);
    navigate("/project/users");
  };
  useEffect(() => {
    fetchUser();
    fetchLikes();
  }, []);
  return (
    <div>
      <h2>User Details</h2>
      {user && (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>
            First Name:
            <input
              type="text"
              className="form-control"
              value={user.firstName}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            />
          </p>
          <p>Last Name: {user.lastName}</p>
          <button onClick={updateUser} className="btn btn-primary">
            Update
          </button>
          <button
            onClick={() => deleteUser(user._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
          <h3>Likes</h3>
          <ul className="list-group">
            {likes.map((like, index) => (
              <li key={index} className="list-group-item">
                <Link to={`/project/details/${like.albumId}`}>
                  {like.albumId}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserDetails;
