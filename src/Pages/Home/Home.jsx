import React from "react";
import Banner from "./Banner/Banner";
import Classes from "./Classes/Classes";
import Instructor from "./Instructor/Instructor";
import MusicalHome from "./Musical Instruments/MusicalHome";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Classes></Classes>
      <Instructor></Instructor>
      <MusicalHome></MusicalHome>
    </div>
  );
};

export default Home;
