import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/Auth";
import { toast } from "react-hot-toast";

const MyClasses = () => {
  const { user, loading } = useContext(AuthContext);
  const [myclasses, setMyClasses] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myclasses/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
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
      <div className="">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Class Name</th>
                <th>Available Seats</th>
                <th>Price</th>
                <th>Delete</th>
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
                  <td>{c.price}</td>
                  <th>
                    <button
                      onClick={() => handledelete(c._id)}
                      className="btn btn-ghost btn-xs"
                    >
                      Delete
                    </button>
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
