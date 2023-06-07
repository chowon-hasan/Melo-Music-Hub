import React, { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/Auth";
import { GoogleAuthProvider } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./login.css";
import toast, { Toaster } from "react-hot-toast";

const LogIn = () => {
  const { signInUser } = useContext(AuthContext);
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
          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
