import React, { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/Auth";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./login.css";
import toast, { Toaster } from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import app from "../../Firebase/firebase.config";
import Loader from "../Shared/Loader";

const auth = getAuth(app);

const LogIn = () => {
  const { signInUser, loading } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const [errorMessage, setErrorMessage] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    signInUser(data.email, data.password)
      .then((result) => {
        const logInUser = result.user;
        console.log(result);
        reset();
        navigate(from, { replace: true });
        toast("Log In succesful");
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };

  const handlePopup = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const logedUser = result.user;
        const userInfo = {
          name: logedUser.displayName,
          email: logedUser.email,
          role: "student",
        };
        fetch("http://localhost:5000/students", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then(() => {});
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="login_bg">
      <div className="xl:container mx-auto">
        <div className="text-center my-5">
          <h1 className="font-bold text-white">Please Log In Here</h1>
        </div>
        <div className="lg:w-3/12 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              className="w-full p-3 bg-white border mb-5 rounded"
              {...register("email", { required: true })}
            />
            <input
              type="password"
              className="w-full p-3 bg-white border mb-5 rounded"
              {...register("password", { required: true })}
            />

            {errors.exampleRequired && (
              <span className="block text-red-700">This field is required</span>
            )}

            <div className="text-center">
              <input
                className="btn btn-wide border-0 bg-red-700 text-white"
                type="submit"
              />
            </div>
          </form>
          <div className="text-center mt-5 text-black">
            <p className="text-red-500 my-3">{errorMessage}</p>
            <p>
              Don't have an account?{" "}
              <Link to="/signin" className="text-white">
                Register here
              </Link>
            </p>
          </div>
          <div className="text-center mt-5 text-white">
            <p className="mt-3">Or you can sign in with</p>
            <div className="">
              <div className="">
                <button className="btn mt-5 text-white" onClick={handlePopup}>
                  <FaGoogle />
                </button>
              </div>
            </div>
          </div>
          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
