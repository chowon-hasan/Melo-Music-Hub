import React, { useContext, useEffect, useState } from "react";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  return (
    <div>
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
                <p>{c.additional_info}</p>
                {/* <div className="card-actions justify-center my-3">
                  <Link>
                    <button className="btn btn-wide bg-red-700 border-0 text-white">
                      See Details
                    </button>
                  </Link>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;
