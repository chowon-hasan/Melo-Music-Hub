import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/Auth";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import toast, { Toaster } from "react-hot-toast";

const SignIn = () => {
  const navigate = useNavigate();
  const [regError, setRegError] = useState("");
  const { createUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    if (data.password < 6) {
      setRegError("Please provide at least 6 characters");
    } else if (!/(?=.[A-Z])/.test(data.password)) {
      setRegError("Please add at least one uppercase");
      return;
    }

    createUser(data.email, data.password, data.name, data.photo)
      .then((result) => {
        const createdUser = result;
        console.log(result);
        reset();
        toast("Sign In succesfull.");
        navigate("/");
      })
      .catch((error) => {
        setRegError(error.message);
      });
  };

  return (
    <div className="signUp_bg">
      <div className="xl:container mx-auto">
        <div className="text-center my-5">
          <h1 className="font-bold text-white">Sign Up Here</h1>
        </div>
        <div className="lg:w-3/12 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              className="w-full bg-white border rounded p-3 block mb-5"
              placeholder="Your Name"
              {...register("name", { required: true })}
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-white border rounded p-3 block mb-5"
              {...register("email", { required: true })}
            />
            <input
              type="password"
              placeholder="password"
              className="w-full bg-white border rounded p-3 block mb-5"
              {...register("password", { required: true })}
            />
            <input
              type="text"
              placeholder="Paste Your image URL"
              className="w-full bg-white border rounded p-3 block mb-5"
              {...register("photo", { required: true })}
            />

            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && (
              <span className="block">This field is required</span>
            )}

            <p>{regError}</p>

            <div className="text-center">
              <input
                className="btn btn-wide bg-red-700 border-0 text-white"
                type="submit"
              />
            </div>
          </form>
          <div className="text-center mt-5 text-black">
            <p className="text-red-500 my-3">{regError}</p>
            <p className="text-white">
              Already have an account?
              <Link to="/login" className="text-white ms-3">
                Login here
              </Link>
            </p>
          </div>
          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
