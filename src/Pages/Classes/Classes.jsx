import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/Auth";
import toast, { Toaster } from "react-hot-toast";
import { updateStatus } from "../../api/addClassesUpdate";
import Loader from "../Shared/Loader";

const Classes = () => {
  const { user } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);
  const [status, setStatus] = useState({});
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
        setLoading(false);
      });
  }, []);

  const handleClasses = async (classID) => {
    console.log(classID);
    const selectedClass = classes.find((c) => c._id === classID);
    console.log(selectedClass.status);
    if (!selectedClass) return;
    if (!user) {
      toast("please login first");
    } else {
      const addClasses = {
        classID: selectedClass._id,
        name: selectedClass.name,
        students: selectedClass.students,
        instructor: selectedClass.instructor,
        available_seats: selectedClass.available_seats,
        price: selectedClass.price,
        image: selectedClass.image,
        email: user.email,
      };
      fetch(`http://localhost:5000/addclasses`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addClasses),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            updateStatus(selectedClass._id, true).then((data) => {
              console.log(data);
              toast("Class added succesfully");
              fetch(`http://localhost:5000/addclasses/${selectedClass._id}`)
                .then((res) => res.json())
                .then((data) => {
                  // if (data.classID === classID) {
                  //   setDisabled(true);
                  // }
                  setStatus(data);
                  console.log(data);
                });
            });
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
        {loading && <Loader />}
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
                      onClick={() => handleClasses(c._id)}
                      disabled={disabled}
                      className="btn btn-wide bg-red-700 border-0 text-white"
                    >
                      Add Class
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
