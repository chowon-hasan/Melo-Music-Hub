import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/Auth";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Pages/Shared/Loader";

const AdminRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [isAdmin, setAdmin] = useState();
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    fetch(
      `https://melo-music-hub-server-chowon-hasan.vercel.app/allstudents/admin/${user.email}`
    )
      .then((res) => res.json())
      .then((info) => {
        console.log(info);
        setAdmin(info.admin);
        setLoading(false);
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
