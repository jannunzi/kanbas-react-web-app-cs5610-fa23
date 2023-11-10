import Home from "./home";
import Login from "./login";
import Signup from "./signup";
import Profile from "./profile";
import Search from "./search";
import Details from "./details";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

function Project() {
  const [key, setKey] = useState("home");

  return (
    <div className="container-fluid">
      <h1>Project</h1>
      <div className="row">
        <div className="col-2">
          <div className="list-group">
            <Link to="/project/" className="list-group-item">
              Home
            </Link>
            <Link to="/project/login" className="list-group-item">
              Login
            </Link>
            <Link to="/project/signup" className="list-group-item">
              Signup
            </Link>
            <Link to="/project/profile" className="list-group-item">
              Profile
            </Link>
            <Link to="/project/search" className="list-group-item">
              Search
            </Link>
            {/* <Link to="/project/details" className="list-group-item">
              Details
            </Link> */}
          </div>
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<Search />} />
            <Route path="/search/:search" element={<Search />} />
            <Route path="/details/:albumId" element={<Details />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Project;
