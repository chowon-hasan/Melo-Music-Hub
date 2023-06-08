import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Pages/HomeLayout/HomeLayout";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/Signin/SignIn";
import LogIn from "../Pages/LogIn/LogIn";
import Instructor from "../Pages/Instructor/Instructor";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Pages/HomeLayout/Dashboard";
import MyClasses from "../Pages/Dashboard/MyClasses";
import Enrolled from "../Pages/Dashboard/Enrolled";
import DashHome from "../Pages/Dashboard/DashHome";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructor",
        element: <Instructor></Instructor>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>,
  },
  {
    path: "/login",
    element: <LogIn></LogIn>,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashHome></DashHome>,
      },
      {
        path: "/dashboard/myClasses",
        element: <MyClasses></MyClasses>,
      },
      {
        path: "/dashboard/enrolled",
        element: <Enrolled></Enrolled>,
      },
    ],
  },
]);

export default router;
