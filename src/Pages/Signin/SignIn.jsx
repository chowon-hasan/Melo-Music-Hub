import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/Auth";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [regError, setRegError] = useState("");
  console.log(regError);
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
        navigate("/");
      })
      .catch((error) => {
        setRegError(error.message);
      });
  };

  return (
    <div>
      <div className="xl:container mx-auto">
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

            <input className="btn" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
