import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import * as client from "./client";
import * as likesClient from "../likes/client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as followsClient from "../follows/client";
function UserDetails() {
  const [user, setUser] = useState(null);
  const [likes, setLikes] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  // const [currentUser, setCurrentUser] = useState(null); // [1
  const { currentUser } = useSelector((state) => state.userReducer);
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
  const followUser = async () => {
    const status = await followsClient.userFollowsUser(id);
  };
  const unfollowUser = async () => {
    const status = await followsClient.userUnfollowsUser(id);
  };
  const fetchFollowers = async () => {
    const followers = await followsClient.findFollowersOfUser(id);
    setFollowers(followers);
  };
  const fetchFollowing = async () => {
    const following = await followsClient.findFollowedUsersByUser(id);
    setFollowing(following);
  };
  // const fetchCurrentUser = async () => {
  //   const user = await client.account();
  //   setCurrentUser(user);
  // };
  const alreadyFollowing = () => {
    return followers.some((follows) => {
      return follows.follower._id === currentUser._id;
    });
  };
  useEffect(() => {
    fetchUser();
    fetchLikes();
    fetchFollowers();
    fetchFollowing();
    // fetchCurrentUser();
  }, [id]);
  return (
    <div>
      {currentUser && currentUser._id !== id && (
        <>
          {alreadyFollowing() ? (
            <button onClick={unfollowUser} className="btn btn-danger float-end">
              Unfollow
            </button>
          ) : (
            <button onClick={followUser} className="btn btn-warning float-end">
              Follow
            </button>
          )}
        </>
      )}
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
          <h3>Followers</h3>
          <div className="list-group">
            {followers.map((follows, index) => (
              <Link
                key={index}
                className="list-group-item"
                to={`/project/users/${follows.follower._id}`}
              >
                {follows.follower.username}
                {follows.follower._id}
              </Link>
            ))}
          </div>
          <h3>Following</h3>
          <div className="list-group">
            {following.map((follows, index) => (
              <Link
                key={index}
                className="list-group-item"
                to={`/project/users/${follows.followed._id}`}
              >
                {follows.followed.username}
                {follows.followed._id}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default UserDetails;
