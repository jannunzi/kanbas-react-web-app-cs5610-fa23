import React, { useState, useEffect } from "react";
import { API_KEY } from "./client";
import * as client from "./client";
import { Link, useParams, useNavigate } from "react-router-dom";

function Search() {
  const { search } = useParams();
  const [searchTerm, setSearchTerm] = useState(search);
  const [results, setResults] = useState(null);
  const navigate = useNavigate();

  const fetchAlbums = async (search) => {
    const results = await client.findAlbums(search);
    setResults(results);
    setSearchTerm(search);
  };

  useEffect(() => {
    if (search) {
      fetchAlbums(search);
    }
  }, [search]);

  return (
    <div>
      <h1>Search</h1>
      <button
        onClick={() => navigate(`/project/search/${searchTerm}`)}
        className="btn btn-primary float-end"
      >
        Search
      </button>
      <input
        type="text"
        className="form-control w-75"
        placeholder="Search..."
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <h2>Results</h2>
      <ul className="list-group">
        {results &&
          results.map((album, index) => (
            <li key={index} className="list-group-item">
              <Link to={`/project/details/${album.id}`}>
                <h3>{album.name}</h3>
                <img
                  src={`https://api.napster.com/imageserver/v2/albums/${album.id}/images/300x300.jpg`}
                  alt={album.name}
                />
              </Link>
            </li>
          ))}
      </ul>
      <pre>{JSON.stringify(results, null, 2)}</pre>
    </div>
  );
}

export default Search;
