import React from "react";
import "./music.css";
import "../../../../src/responsive.css";

import gallary from "../../../assets/gallary.jpg";
import { Link } from "react-router-dom";

const MusicalHome = () => {
  return (
    <section className="section_body">
      <div className="container mx-auto">
        <div className="my-8 ">
          <h1 className="font-bold text-6xl text-white">Subscription</h1>
        </div>
        <div className="flex justify-center items-center subscription">
          <div className="w-1/2 mx-auto photo_home">
            <div className="">
              <img
                className="pic_home"
                style={{ height: "700px", margin: "auto" }}
                src={gallary}
                alt=""
              />
            </div>
          </div>
          <div className="w-1/2 mx-auto text_home ">
            <div className="">
              <h1 className="font-bold">Pick a subscription</h1>
              <p className="my-5">
                A subscription is most beneficial if you publish videos
                regularly. All subscriptions give you full access to 40,000
                tracks and 90,000 sound effects. Unlimited downloads and use.
              </p>
            </div>
            <div className="mt-5">
              <h1 className="font-bold">Add to your dashboard</h1>
              <p>
                After subscription you can add your classes to your dashboard my
                classes.
              </p>
              <div className="mt-5">
                <Link to="/classes">
                  <button className="btn btn-wide bg-red-700 border-0 text-white">
                    see classes
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicalHome;
