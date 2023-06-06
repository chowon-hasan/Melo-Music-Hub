import React from "react";
import Header from "../../Shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <div className="py-52 my-16">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
