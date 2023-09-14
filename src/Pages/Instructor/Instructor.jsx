import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../Shared/Loader";
import "./instructor.css";
import "../../../src/responsive.css";
import toast, { Toaster } from "react-hot-toast";

const Instructor = () => {
  const [instructor, setInstructor] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://melo-music-hub-server-chowon-hasan.vercel.app/instructor")
      .then((res) => res.json())
      .then((data) => {
        setInstructor(data);
        setLoading(false);
      });
  }, []);

  const handleDetaailsInstructor = () => {
    toast("This feature will active soon");
  };
  return (
    <section style={{ backgroundColor: "#A31038" }} className="pt-32 pb-12">
      <div className="instructor">
        <div className="xl:container mx-auto">
          <div className="text-center">
            <h1 className="font-bold text-6xl text-white my-5">
              Our Instructor's
            </h1>
            {loading && <Loader />}
            <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-4 my-5">
              {instructor.map((c) => (
                <div
                  key={c._id}
                  className="card w-96 bg-white shadow-xl my-5 border py-2"
                >
                  <figure>
                    <img className="h-48" src={c.image} alt="" />
                  </figure>
                  <div className="card-body text-start">
                    <h2 className="card-title capitalize">
                      Instructor: <span className="text-red-700">{c.name}</span>
                    </h2>
                    <span>Students: {c.num_students}</span>
                    <span>instructor: {c.classes_taken}</span>
                    <div className="card-actions justify-center my-3">
                      <Link>
                        <button
                          onClick={handleDetaailsInstructor}
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
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default Instructor;
