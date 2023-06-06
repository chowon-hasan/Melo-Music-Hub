import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Banner.css";

import img1 from "../../../assets/banner/ban-1.jpg";
import img2 from "../../../assets/banner/ban-2.jpg";
import img3 from "../../../assets/banner/ban-3.jpg";
import img4 from "../../../assets/banner/ban-4.jpg";
import img5 from "../../../assets/banner/ban-5.jpg";

const Banner = () => {
  return (
    <div className="banner_body">
      <div className="text-center">
        <div className="absolute z-10 top-50">
          <h1>hello</h1>
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
