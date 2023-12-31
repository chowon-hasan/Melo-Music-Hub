import React, { useEffect, useState } from "react";
import Loader from "../../Shared/Loader";
import { Toaster, toast } from "react-hot-toast";

const ManageClass = () => {
  const [instructorClasses, setInstructorClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      "https://melo-music-hub-server-chowon-hasan.vercel.app/addedclasses/instructor"
    )
      .then((res) => res.json())
      .then((data) => {
        setInstructorClasses(data);
        setLoading(false);
      });
  }, []);

  const handleApproved = (id) => {
    fetch(
      `https://melo-music-hub-server-chowon-hasan.vercel.app/status/approved/${id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast("operation succesfull");
          window.location.reload();
        }
      });
  };

  const handleDenied = (id) => {
    fetch(
      `https://melo-music-hub-server-chowon-hasan.vercel.app/status/denied/${id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          fetch(
            "https://melo-music-hub-server-chowon-hasan.vercel.app/instructorClass/allClasses",
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(instructorClasses),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              toast("operation succesfull");
              window.location.reload();
              console.log(data);
            });
        }
      });
  };

  return (
    <div>
      <div className="text-center font-bold my-5 text-red-700">
        <h1>Manage Classes for Instructors</h1>
      </div>
      {loading && <Loader />}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-red-700">
              <th>Class Name</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Approved</th>
              <th>Denied</th>
              <th>FeedBack</th>
            </tr>
          </thead>
          <tbody>
            {instructorClasses.map((c) => (
              <tr key={c._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={c.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{c.name}</div>
                      <div className="text-sm opacity-50">{c.instructor}</div>
                    </div>
                  </div>
                </td>
                <td>{c.available_seats}</td>
                <td className="text-red-700 font-bold">$ {c.price}</td>
                <th>
                  <button className="btn bg-green-100 border-0 text-black hover:bg-green-100 btn-xs">
                    {c.status}
                  </button>
                </th>
                <th>
                  <button
                    onClick={() => handleApproved(c._id)}
                    disabled={c.status === "approved" || c.status === "denied"}
                    className="btn bg-red-900 border-0 text-white btn-xs"
                  >
                    Approved
                  </button>
                </th>
                <th>
                  <button
                    onClick={() => handleDenied(c._id)}
                    disabled={c.status === "denied" || c.status === "approved"}
                    className="btn bg-red-900 border-0 text-white btn-xs"
                  >
                    Denied
                  </button>
                </th>
                <th>
                  <button className="btn bg-green-300 border-0 text-white btn-xs">
                    Send FeedBack
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
      <Toaster />
    </div>
  );
};

export default ManageClass;
