import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/Auth";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Pages/Shared/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loader />;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" replace state={{ from: location }}></Navigate>;
};

export default PrivateRoute;
