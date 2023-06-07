import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/Logo1.png";

const Header = () => {
  return (
    <div className="relative">
      <div className="fixed top-0 z-20 w-full backdrop-blur-sm bg-white/30">
        <div className="xl:container mx-auto">
          <div className="navbar">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 p-5 shadow bg-base-100 rounded-box w-52"
                >
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "text-red-700 " : "text-white"
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/instructor"
                    className={({ isActive }) =>
                      isActive ? "text-red-900 my-5" : "text-white my-5"
                    }
                  >
                    Instructor
                  </NavLink>
                  <NavLink
                    to="/classes"
                    className={({ isActive }) =>
                      isActive ? "text-red-500" : "text-white"
                    }
                  >
                    Classes
                  </NavLink>
                </ul>
              </div>
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>

            {/* LARGER SCREEN NAVBAR START HERE */}
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-red-700 " : "text-black"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/instructor"
                  className={({ isActive }) =>
                    isActive ? "text-red-900 mx-12" : "text-black mx-12"
                  }
                >
                  Instructor
                </NavLink>
                <NavLink
                  to="/classes"
                  className={({ isActive }) =>
                    isActive ? "text-red-500" : "text-black"
                  }
                >
                  Classes
                </NavLink>
              </ul>
            </div>
            <div className="navbar-end">
              <a className="btn bg-red-500 text-white px-8">Log In</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
