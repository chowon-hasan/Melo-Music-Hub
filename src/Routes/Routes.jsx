import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Pages/Home/HomeLayout/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
]);

export default router;
