import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Instructor = () => {
  const [instructor, setInstructor] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/instructor")
      .then((res) => res.json())
      .then((data) => setInstructor(data));
  });
  return (
    <div className="bg-slate-900 py-12">
      <div className="xl:container mx-auto">
        <div className="text-center my-8 text-red-700">
          <h1 className="font-bold text-6xl">Top Instructors</h1>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-4">
          {instructor.map((c) => (
            <div className="card w-96 bg-white shadow-xl my-5 border py-2">
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
  );
};

export default Instructor;
