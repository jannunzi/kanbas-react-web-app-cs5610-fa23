import Home from "./home";

import Signin from "./users/signin";
import Signup from "./users/signup";
import Account from "./users/account";
import Admin from "./users/admin";

import Search from "./search";
import Details from "./details";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./nav";
import UserTable from "./users/table";
import CourseList from "./courses/list";
import CourseDetails from "./courses/details";

function Project() {
  return (
    <div className="container-fluid pt-3">
      <div className="row">
        <div className="col-2">
          <Nav />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/account" element={<Account />} />
            <Route path="/account/:id" element={<Account />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/users" element={<UserTable />} />
            <Route path="/" element={<Navigate to="/project/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/courses" element={<CourseList />} />
            <Route path="/courses/:cid" element={<CourseDetails />} />
            <Route path="/search" element={<Search />} />
            <Route path="/search/:search" element={<Search />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Project;
