import React from "react";
import { Link } from "react-router-dom";
import "./error.css";

const ErrorPage = () => {
  return (
    <div className="error_bg">
      <Link to="/">
        <button className="btn btn-wide bg-white text-black">
          Back to the home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
