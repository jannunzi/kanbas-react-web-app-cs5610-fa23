import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as client from "./client";

function Details() {
  const [album, setAlbum] = useState(null);
  const [tracks, setTracks] = useState([]);
  const { id } = useParams();

  const fetchAlbum = async () => {
    const album = await client.findAlbumById(id);
    setAlbum(album);
  };

  const fetchTracks = async () => {
    const tracks = await client.findTracksByAlbumId(id);
    setTracks(tracks);
  };

  useEffect(() => {
    fetchAlbum();
    fetchTracks();
  }, []);

  return (
    <div>
      {album && (
        <div>
          <h1>{album.name}</h1>
          <img
            src={`https://api.napster.com/imageserver/v2/albums/${album.id}/images/300x300.jpg`}
            alt={album.name}
          />
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
