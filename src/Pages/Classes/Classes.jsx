import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/Auth";
import toast, { Toaster } from "react-hot-toast";

const Classes = () => {
  const { user } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [classesData] = classes;
  console.log(classesData._id);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  });

  const handleClasses = () => {
    if (!user) {
      toast("please login first");
    } else {
      const addClasses = {
        classID: classesData._id,
        name: classesData.name,
        students: classesData.students,
        instructor: classesData.instructor,
        available_seats: classesData.available_seats,
        price: classesData.price,
        image: classesData.image,
        email: user.email,
      };
      fetch("http://localhost:5000/addclasses", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addClasses),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            toast("Class added succesfully");
          }
          console.log(data);
        });
    }
  };
  return (
    <div className="my-36">
      <div className="xl:container mx-auto">
        <div className="text-center my-8 text-red-700">
          <h1 className="font-bold text-6xl">Top Classses</h1>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-4">
          {classes.map((c) => (
            <div
              key={c._id}
              className="card w-96 bg-white shadow-xl my-5 border py-2"
            >
              <figure>
                <img className="h-48" src={c.image} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title ">
                  Classes Name: <span className="text-red-700">{c.name}</span>
                </h2>
                <span>Students: {c.students}</span>
                <span>instructor: {c.instructor}</span>
                <span>available_seats : {c.available_seats}</span>
                <span>
                  Price :{" "}
                  <span className="text-red-700 font-bold">${c.price}</span>
                </span>
                <p>{c.additional_info}</p>
                <div className="card-actions justify-center my-3">
                  <Link>
                    <button
                      onClick={handleClasses}
                      disabled={disabled}
                      className="btn btn-wide bg-red-700 border-0 text-white"
                    >
                      Add Classes
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Classes;
