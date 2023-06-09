import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/Auth";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Pages/Shared/Loader";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, setAdmin] = useState();
  const location = useLocation();

  useEffect(() => {
    fetch(`http://localhost:5000/allstudents/admin/${user.email}`)
      .then((res) => res.json())
      .then((info) => {
        console.log(info);
        setAdmin(info.admin);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
