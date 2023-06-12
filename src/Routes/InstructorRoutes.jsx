import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/Auth";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Pages/Shared/Loader";

const InstructorRoutes = () => {
  const { user, loading } = useContext(AuthContext);
  const [isIntructor, setInstructor] = useState();
  const location = useLocation();

  useEffect(() => {
    fetch(
      `https://melo-music-hub-server-chowon-hasan.vercel.app/allstudents/admin/${user.email}`
    )
      .then((res) => res.json())
      .then((info) => {
        console.log(info);
        setInstructor(info.instructor);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }
  if (user && isIntructor) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default InstructorRoutes;
