import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <div className="h1 text-4xl">Loading....</div>;
  }
  if (user) {
    return children;
  }

  return <Navigate state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
