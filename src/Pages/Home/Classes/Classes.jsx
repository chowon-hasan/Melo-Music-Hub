import React, { useContext, useEffect, useState } from "react";
import "./classes.css";
import "../../../../src/responsive.css";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("https://melo-music-hub-server-chowon-hasan.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => setClasses(data.slice(0, 6)));
  }, []);

  return (
    <section className="py-12 home-class-section">
      {" "}
      <div>
        <div className="xl:container mx-auto">
          <div className="my-8">
            <h1 className="font-bold text-6xl text-white">Top Classses</h1>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-4 card_parent_classs">
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
    </section>
  );
};

export default Classes;
