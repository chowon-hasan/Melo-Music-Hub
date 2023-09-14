import React from "react";
import logo from "../../../assets/Logo1.png";
import "./footer.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="border">
      <div className="xl:container mx-auto">
        <footer className="footer p-10 text-base-content">
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
          <div>
            <span className="footer-title">Apps</span>
            <a className="link link-hover">Mac</a>
            <a className="link link-hover">Windows</a>
            <a className="link link-hover">iPhone</a>
            <a className="link link-hover">Android</a>
          </div>
        </footer>
        <footer className="footer px-10 py-4 border-t text-base-content border-base-300">
          <div className="items-end grid-flow-col">
            <img src={logo} alt="" />
            <p className="text-black font-semibold">
              Melo Music Hub <br />
              Providing best Music Lesson from World's Best Musician <br />
              <span className="text-red-700">
                {" "}
                All rights reserved chowon hasan
              </span>
            </p>
          </div>
          <div className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              <Link className="icons">
                <FaFacebook />
              </Link>
              <Link className="icons">
                <FaTwitter />
              </Link>
              <Link className="icons">
                <FaInstagram />
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
