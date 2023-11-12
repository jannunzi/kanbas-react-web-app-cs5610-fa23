import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Nav() {
  const { pathname } = useLocation();
  const links = [
    { to: "/project/home", label: "Home" },
    { to: "/project/search", label: "Search" },
    { to: "/project/signin", label: "Signin" },
    { to: "/project/signup", label: "Signup" },
    { to: "/project/account", label: "Account" },
    { to: "/project/admin", label: "Admin" },
    { to: "/project/courses", label: "Courses" },
  ];
  const active = (path) => (pathname.includes(path) ? "active" : "");
  return (
    <div className="list-group">
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className={`list-group-item ${active(link.to)}`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

export default Nav;
