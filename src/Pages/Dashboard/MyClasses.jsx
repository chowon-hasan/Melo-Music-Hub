import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/Auth";
import { toast } from "react-hot-toast";
import Loader from "../Shared/Loader";
import { Link } from "react-router-dom";

const MyClasses = () => {
  const { user, loading } = useContext(AuthContext);
  const [myclasses, setMyClasses] = useState([]);
  //   const total = myclasses.reduce((sum, item) => item.price + sum, 0);
  //   console.log(total);
  useEffect(() => {
    fetch(`http://localhost:5000/myclasses/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (loading) {
          <Loader />;
        }
        console.log(data);
        setMyClasses(data);
      });
  }, [user, loading]);

  const handledelete = (id) => {
    console.log(id);
    const procced = confirm("are you sure to delete this?");
    if (procced) {
      fetch(`http://localhost:5000/myclasses/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if (result.deletedCount > 0) {
            toast("deleted");
            const remaining = myclasses.filter((c) => c._id !== id);
            setMyClasses(remaining);
          }
        });
    }
  };

  return (
    <div>
      <div className="text-center font-bold my-5 text-red-700">
        <h1>My Selected Class</h1>
      </div>
      <div className="border p-5">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-red-700">
                <th>Class Name</th>
                <th>Available Seats</th>
                <th>Price</th>
                <th>Delete</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {myclasses.map((c) => (
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
                    <button
                      onClick={() => handledelete(c._id)}
                      className="btn bg-red-900 border-0 text-white btn-xs"
                    >
                      Delete
                    </button>
                  </th>
                  <th>
                    <Link to="/dashboard/payment">
                      <button className="btn bg-red-900 border-0 text-white btn-xs">
                        Payment
                      </button>
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>
            {/* foot */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyClasses;
