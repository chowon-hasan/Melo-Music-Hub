import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./music.css";

import sliderImage1 from "../../../assets/banner/ban-1.jpg";
import sliderImage2 from "../../../assets/banner/ban-2.jpg";
import sliderImage3 from "../../../assets/banner/ban-3.jpg";
import sliderImage4 from "../../../assets/banner/ban-4.jpg";
import sliderImage5 from "../../../assets/banner/ban-5.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";

const MusicalHome = () => {
  return (
    <section className="section_body">
      <div className="container mx-auto">
        <div className="text-center my-8 text-red-700">
          <h1 className="font-bold text-6xl">Photo Gallary</h1>
        </div>
        <div className="flex">
          <div className="w-1/2 mx-auto">
            <div className="">
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img className="slider_image" src={sliderImage1} />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="slider_image" src={sliderImage2} />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="slider_image" src={sliderImage3} />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="slider_image" src={sliderImage4} />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="slider_image" src={sliderImage5} />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicalHome;
