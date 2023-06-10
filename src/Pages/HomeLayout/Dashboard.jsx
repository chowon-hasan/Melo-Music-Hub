import React, { useContext, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaCartArrowDown,
  FaFolderOpen,
  FaHome,
  FaMoneyCheckAlt,
  FaUserCog,
} from "react-icons/fa";
import { BiPurchaseTag } from "react-icons/bi";
import logo from "../../assets/Logo1.png";
import { AuthContext } from "../../AuthProvider/Auth";

const Dashboard = () => {
  //   const isAdmin = true;
  const [isAdmin, setAdmin] = useState(false);
  const [isInstructor, setInstructor] = useState(false);
  const [student, setStudent] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/allstudents/admin/${user.email}`)
      .then((res) => res.json())
      .then((info) => {
        console.log(info);
        setAdmin(info.admin);
        setInstructor(info.instructor);
        setStudent(info.student);
      });
  }, []);

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

            {/* CONDIOTIONAL NAVBAR FOR DASHBOARD */}
            {isAdmin && (
              <>
                <NavLink
                  to="/dashboard/manageclass"
                  className={({ isActive }) =>
                    isActive ? "text-red-900 " : "text-black"
                  }
                >
                  <FaFolderOpen className="inline me-5" />
                  Manage Classes
                </NavLink>
                <NavLink
                  to="/dashboard/allstudents"
                  className={({ isActive }) =>
                    isActive ? "text-red-500 my-8" : "text-black my-8"
                  }
                >
                  <FaUserCog className="inline me-5" />
                  Manage Users
                </NavLink>
              </>
            )}

            {isInstructor && (
              <>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive ? "text-red-900 " : "text-black"
                  }
                >
                  <FaHome className="inline me-5" />
                  Instructor Home
                </NavLink>
                <NavLink
                  to="/dashboard/addclass"
                  className={({ isActive }) =>
                    isActive ? "text-red-500 my-8" : "text-black my-8"
                  }
                >
                  <FaCartArrowDown className="inline me-5" />
                  Add A Class
                </NavLink>
                <NavLink
                  to="/dashboard/enrolled"
                  className={({ isActive }) =>
                    isActive ? "text-red-500 mb-8" : "text-black mb-8"
                  }
                >
                  <BiPurchaseTag className="inline me-5" />
                  Myclass
                </NavLink>
              </>
            )}

            {student && (
              <>
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
                  <BiPurchaseTag className="inline me-5" />
                  Enrolled Classes
                </NavLink>
                <NavLink
                  to="/dashboard/payhistory"
                  className={({ isActive }) =>
                    isActive ? "text-red-500 mb-8" : "text-black mb-8"
                  }
                >
                  <FaMoneyCheckAlt className="inline me-5" />
                  Payment history
                </NavLink>
              </>
            )}

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
