import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Pages/HomeLayout/HomeLayout";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/Signin/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>,
  },
]);

export default router;
