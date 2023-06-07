import React, { useContext } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Banner.css";

import img1 from "../../../assets/banner/ban-1.jpg";
import img2 from "../../../assets/banner/ban-2.jpg";
import img3 from "../../../assets/banner/ban-3.jpg";
import img4 from "../../../assets/banner/ban-4.jpg";
import img5 from "../../../assets/banner/ban-5.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/Auth";

const Banner = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="banner_body">
      <div className="text-center">
        <div className="banner_text">
          <h1 className="text-white font-bold">
            Welcome at <br /> Melo Music Hub
          </h1>
          <p className="text-white">
            Learn music from world's best musicians with excited classes, notes
            and lots of resources.
          </p>
          <p className="text-white">
            For purchasing your course please sign up here
          </p>
          {user ? (
            <div className="text-white mt-8">
              <p>You are signed in !!!</p>
              <p>purchase your course now</p>
              <Link>
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
        <Carousel autoPlay>
          <div className="">
            <img className="banner_img" src={img1} />
          </div>
          <div>
            <img className="banner_img" src={img2} />
          </div>
          <div>
            <img className="banner_img" src={img3} />
          </div>
          <div>
            <img className="banner_img" src={img4} />
          </div>
          <div>
            <img className="banner_img" src={img5} />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
