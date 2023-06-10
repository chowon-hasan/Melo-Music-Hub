import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../Shared/Loader";

const Instructor = () => {
  const [instructor, setInstructor] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/instructor")
      .then((res) => res.json())
      .then((data) => {
        setInstructor(data);
        setLoading(false);
      });
  }, []);

  return (
    <section className="mt-36 border">
      <div className="xl:container mx-auto">
        <div className="text-center">
          <h1 className="font-bold text-6xl text-red-700 my-5">
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
                      <button className="btn btn-wide bg-red-700 border-0 text-white">
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
    </section>
  );
};

export default Instructor;
