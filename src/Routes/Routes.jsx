import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Pages/HomeLayout/HomeLayout";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/Signin/SignIn";
import LogIn from "../Pages/LogIn/LogIn";
import Instructor from "../Pages/Instructor/Instructor";
import Classes from "../Pages/Classes/Classes";

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
]);

export default router;
