import React, { useContext } from "react";
import "./Banner.css";
import "../../../../src/responsive.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/Auth";
import video from "../../../assets/demo-music.mp4";

const Banner = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <section className="min-h-screen relative banner_bg">
        <video
          src={video}
          style={{
            width: "100vw",
            height: "-webkit-fill-available",
          }}
          autoPlay
          muted
          playsInline
          loop
        ></video>
        <div className="banner_body">
          <div className="banner_text">
            <h1 className="text-white font-bold">
              Welcome at <br /> Melo Music Hub
            </h1>
            <p className="text-white">
              Learn music from world's best musicians with excited classes,
              notes and lots of resources.
            </p>
            <p className="text-white">
              For purchasing your course please sign up here
            </p>
            {user ? (
              <div className="text-white mt-8">
                <p>You are signed in !!!</p>
                <p>purchase your course now</p>
                <Link to="/classes">
                  <button className="btn btn-wide mt-5 bg-white text-black hover:text-white">
                    See classes
                  </button>
                </Link>
              </div>
            ) : (
              <Link to="/signin">
                <button className="btn btn-wide mt-8 bg-red-700 text-white border-0">
                  Sign Up
                </button>
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
