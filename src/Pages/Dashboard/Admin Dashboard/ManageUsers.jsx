import React, { useEffect, useState } from "react";
import user from "../../../assets/banner/user.jpg";
import { Toaster, toast } from "react-hot-toast";
import Loader from "../../Shared/Loader";

const ManageUsers = () => {
  const [allStudents, setAllStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/allstudents")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllStudents(data);
        setLoading(false);
      });
  }, []);

  const makeAdmin = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/allstudents/admin/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          toast("operation succesfull");
          window.location.reload();
        }
      });
  };

  const makeInstructor = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/allstudents/instructor/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          toast("operation succesfull");
          window.location.reload();
        }
      });
  };

  return (
    <div>
      <div className="text-center">
        <h1 className="font-bold text-red-700 my-5">All Users List</h1>
      </div>
      {loading && <Loader />}
      <div className="border p-5">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-red-700">
                <th>Users</th>
                <th>Email</th>
                <th>Instructor</th>
                <th>Admin</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {allStudents.map((c) => (
                <tr key={c._id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          {c.image ? (
                            <img
                              src={c.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          ) : (
                            <img
                              src={user}
                              alt="Avatar Tailwind CSS Component"
                            />
                          )}
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{c.name}</div>
                        <div className="text-sm opacity-50">{c.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-red-700 font-bold"> {c.email}</td>
                  <th>
                    <button
                      onClick={() => makeInstructor(c._id)}
                      disabled={c.role === "instructor" || c.role === "admin"}
                      className="btn bg-red-900 border-0 text-white btn-xs"
                    >
                      Make Instructor
                    </button>
                  </th>
                  <th>
                    <button
                      disabled={c.role === "admin" || c.role === "instructor"}
                      onClick={() => makeAdmin(c._id)}
                      className="btn bg-red-900 border-0 text-white btn-xs"
                    >
                      Make Admin
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
            {/* foot */}
          </table>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ManageUsers;
