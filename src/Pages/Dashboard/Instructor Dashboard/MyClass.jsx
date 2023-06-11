import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/Auth";

const MyClass = () => {
  const { user } = useContext(AuthContext);
  const [allClasses, setallClasses] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myclasses/instructor/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setallClasses(data);
      });
  }, [user]);
  return (
    <div>
      <div className="text-center my-5">
        <h1 className="font-bold text-red-700">My Classes</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-black">
              <th>SL No</th>
              <th>Image and Class Name</th>
              <th>Email</th>
              <th>Price</th>
              <th>Available Students</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {allClasses.map((classes, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={classes.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{classes.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="font-bold text-red-700 ms-3">
                    {classes.email}
                  </span>
                </td>
                <td>
                  $
                  <span className="font-bold text-red-700 ms-3">
                    {classes.price}
                  </span>
                </td>
                <td>
                  <span className="font-bold text-red-700 ms-3">
                    {classes.available_seats}
                  </span>
                </td>
                <td className="text-center">
                  <div className="bg-green-100  p-2">
                    <p className="text-black font-bold capitalize">
                      {classes.status}
                    </p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;
