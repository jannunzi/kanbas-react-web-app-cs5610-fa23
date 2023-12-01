import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ show, children }) {
  const { currentUser } = useSelector((state) => state.userReducer);
  return currentUser ? children : <Navigate to="/Kanbas/Signin" />;
}

export default ProtectedRoute;
