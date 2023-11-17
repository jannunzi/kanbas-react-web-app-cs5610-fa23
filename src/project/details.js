import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import * as client from "./client";
import * as userClient from "./users/client";
import * as likesClient from "./likes/client";

function Details() {
  const [currentUser, setCurrentUser] = useState(null);
  const [album, setAlbum] = useState(null);
  const [tracks, setTracks] = useState([]);
  const { albumId } = useParams();
  const [likes, setLikes] = useState([]);

  const fetchUser = async () => {
    try {
      const user = await userClient.account();
      setCurrentUser(user);
    } catch (error) {
      setCurrentUser(null);
    }
  };

  const fetchAlbum = async () => {
    const album = await client.findAlbumById(albumId);
    setAlbum(album);
  };

  const fetchTracks = async () => {
    const tracks = await client.findTracksByAlbumId(albumId);
    setTracks(tracks);
  };

  const fetchLikes = async () => {
    const likes = await likesClient.findUsersThatLikeAlbum(albumId);
    setLikes(likes);
  };

  const currenUserLikesAlbum = async () => {
    const _likes = await likesClient.createUserLikesAlbum(
      currentUser._id,
      albumId
    );
    setLikes([_likes, ...likes]);
  };

  useEffect(() => {
    fetchAlbum();
    fetchTracks();
    fetchUser();
    fetchLikes();
  }, []);

  return (
    <div>
      {album && (
        <div>
          {currentUser && (
            <button
              onClick={currenUserLikesAlbum}
              className="btn btn-warning float-end"
            >
              Like
            </button>
          )}
          <h1>{album.name}</h1>
          <img
            src={`https://api.napster.com/imageserver/v2/albums/${album.id}/images/300x300.jpg`}
            alt={album.name}
          />
          <h2>Likes</h2>
          <ul className="list-group">
            {likes.map((like, index) => (
              <li key={index} className="list-group-item">
                {like.user.firstName} {like.user.lastName}
                <Link to={`/project/users/${like.user._id}`}>
                  @{like.user.username}
                </Link>
              </li>
            ))}
          </ul>

          <h2>Tracks</h2>
          <ul className="list-group">
            {tracks.map((track, index) => (
              <li key={index} className="list-group-item">
                <h3>{track.name}</h3>
                <audio controls>
                  <source src={track.previewURL} type="audio/mpeg" />
                </audio>
              </li>
            ))}
          </ul>
          <pre>{JSON.stringify(tracks, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Details;
