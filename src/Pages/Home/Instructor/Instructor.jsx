import React, { useEffect, useState } from "react";
import "../../../../src/responsive.css";
import "./instructor.css";
import { Link } from "react-router-dom";
import toast, { ToastBar, Toaster } from "react-hot-toast";

const Instructor = () => {
  const [instructor, setInstructor] = useState([]);
  useEffect(() => {
    fetch("https://melo-music-hub-server-chowon-hasan.vercel.app/instructor")
      .then((res) => res.json())
      .then((data) => setInstructor(data));
  });

  const handleInsDetails = () => {
    toast("This feature will active soon");
  };
  return (
    <section className="home-instructor py-12">
      <div className="xl:container mx-auto">
        <div className="my-8 text-white">
          <h1 className="font-bold text-6xl">Top Instructors</h1>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-4 card_parent">
          {instructor.map((c) => (
            <div
              key={c._id}
              className="card w-96 bg-white shadow-xl my-5 border py-2"
            >
              <figure>
                <img className="h-48" src={c.image} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title capitalize">
                  Instructor: <span className="text-red-700">{c.name}</span>
                </h2>
                <span>Students: {c.num_students}</span>
                <span>instructor: {c.classes_taken}</span>
                <div className="card-actions justify-center my-3">
                  <Link>
                    <button
                      onClick={handleInsDetails}
                      className="btn btn-wide bg-red-700 border-0 text-white"
                    >
                      See Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default Instructor;
