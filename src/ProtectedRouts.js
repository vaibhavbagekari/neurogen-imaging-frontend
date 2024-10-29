import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./Context";
import { getUser } from "./Utils";

const ProtectedRoute = ({ component: Component }) => {
  const user  = getUser(); // Get the current user from context

  return user ? <Component /> : <Navigate to="/login" />; // Redirect to login if no user
};

export default ProtectedRoute;
