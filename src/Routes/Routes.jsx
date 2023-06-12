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
import Payment from "../Pages/Dashboard/Payment";
import ManageClass from "../Pages/Dashboard/Admin Dashboard/ManageClass";
import ManageUsers from "../Pages/Dashboard/Admin Dashboard/ManageUsers";
import AdminRoutes from "./AdminRoutes";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";
import AddClass from "../Pages/Dashboard/Instructor Dashboard/AddClass";
import MyClass from "../Pages/Dashboard/Instructor Dashboard/MyClass";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
      {
        path: "/dashboard/payhistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "/dashboard/payment",
        element: <Payment></Payment>,
      },
      {
        path: "/dashboard/manageclass",
        element: (
          <AdminRoutes>
            <ManageClass></ManageClass>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/allstudents",
        element: (
          <AdminRoutes>
            <ManageUsers></ManageUsers>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/addclass",
        element: <AddClass></AddClass>,
      },
      {
        path: "/dashboard/instrucotr/addclass",
        element: <MyClass></MyClass>,
      },
    ],
  },
]);

export default router;
