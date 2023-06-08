import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaCartArrowDown, FaHome } from "react-icons/fa";
import logo from "../../assets/Logo1.png";
import DashHome from "../Dashboard/DashHome";

const Dashboard = () => {
  return (
    <div className="">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-white border text-base-content text-center">
            {/* Sidebar content here */}
            <div className="mx-auto mb-10">
              <img src={logo} alt="" />
            </div>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "text-red-900 " : "text-black"
              }
            >
              <FaHome className="inline me-5" />
              Student Home
            </NavLink>
            <NavLink
              to="/dashboard/myClasses"
              className={({ isActive }) =>
                isActive ? "text-red-500 my-8" : "text-black my-8"
              }
            >
              <FaCartArrowDown className="inline me-5" />
              Selected Classes
            </NavLink>
            <NavLink
              to="/dashboard/enrolled"
              className={({ isActive }) =>
                isActive ? "text-red-500 mb-8" : "text-black mb-8"
              }
            >
              <FaCartArrowDown className="inline me-5" />
              Enrolled Classes
            </NavLink>
            <hr />
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-red-500 my-8" : "text-black my-8"
              }
            >
              <FaHome className="inline me-5" />
              Home
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
