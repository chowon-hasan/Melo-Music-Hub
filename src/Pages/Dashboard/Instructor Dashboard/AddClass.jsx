import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../../AuthProvider/Auth";

const imageAPI = import.meta.env.VITE_IMAGE_API;

const AddClass = () => {
  const imageURL = `https://api.imgbb.com/1/upload?key=${imageAPI}`;
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(imageURL, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgRes) => {
        if (imgRes.success) {
          const imgURL = imgRes.data.display_url;
          const {
            available_seats,
            name,
            email,
            price,
            instructor,
            status,
            additional_info,
          } = data;

          const addClassData = {
            available_seats: parseFloat(available_seats),
            name,
            email,
            price: parseFloat(price),
            instructor,
            status,
            image: imgURL,
            additional_info,
          };
          console.log(addClassData);
          fetch("http://localhost:5000/addClass/instructor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(addClassData),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              toast("data added on db");
              reset();
            });
        }
      });
  };
  return (
    <div className="w-6/12">
      <div className="text-center my-5">
        <h1 className="font-bold text-red-700">Add Your Class</h1>
      </div>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            className="w-full bg-white border rounded p-3 block mb-5"
            placeholder="Class Name"
            {...register("name", { required: true })}
          />
          <input
            type="file"
            placeholder="Class Image"
            className="w-full bg-white border rounded p-3 block mb-5"
            {...register("image", { required: true })}
          />
          <div className="flex gap-5">
            <input
              type="number"
              min={0}
              placeholder="Available Seats"
              className="w-1/2 bg-white border rounded p-3 block mb-5"
              {...register("available_seats", { required: true })}
            />
            <input
              type="number"
              min={0}
              placeholder="Price of your course"
              className="w-1/2 bg-white border rounded p-3 block mb-5"
              {...register("price", { required: true })}
            />
          </div>
          <textarea
            type="text"
            placeholder="Type about this coures"
            className="w-full bg-white border rounded p-3 block mb-5"
            {...register("additional_info", { required: true })}
          />
          <div className="flex gap-5">
            <input
              type="text"
              defaultValue={user.displayName}
              className="w-full bg-white border rounded p-3 block mb-5 text-slate-500"
              {...register("instructor")}
              readOnly
            />
            <input
              type="text"
              readOnly
              defaultValue={user.email}
              className="w-full bg-white border rounded p-3 block mb-5 text-slate-500"
              {...register("email")}
            />
          </div>
          <div className="text-center ">
            <p className="text-red-700">
              You Dont need to update this two field. Please Continue
            </p>
          </div>
          <input
            type="text"
            defaultValue="pending"
            className="hidden"
            {...register("status", { required: true })}
          />

          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && (
            <span className="block">This field is required</span>
          )}

          <div className="text-center mt-5">
            <input
              className="btn btn-wide bg-red-700 border-0 text-white"
              type="submit"
            />
          </div>
        </form>
        <div className="text-center mt-5 text-black">
          <p className="text-red-500 my-3"></p>
        </div>
        <Toaster />
      </div>
    </div>
  );
};

export default AddClass;
