import React from "react";
import { useForm } from "react-hook-form";
import registerBg from "../assets/auth_bg.jpg";
import { Link } from "react-router-dom";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div
      className="relative min-h-screen bg-white text-white flex"
      style={{
        backgroundImage: `url(${registerBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute h-full w-full bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
      <form
        className="relative z-20 w-3/4 sm:w-[500px] mx-auto mt-5 md:my-[180px] flex flex-col gap-5 p-10 shadow-3xl shadow-slate-900 rounded-md backdrop-blur"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-center font-semibold text-xl lg:text-3xl text-slate-50">
          Sign in
        </h1>
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-md" htmlFor="email">
            Email
          </label>
          <input
            className={`input text-black bg-white border-1 border-black rounded-none ${
              errors.username ? "border-red-500" : ""
            }`}
            id="email"
            type="email"
            autoComplete="off"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <span className="text-red-500 backdrop-blur ``1-50 p-1 min-w-fit">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-md" htmlFor="password">
            Password
          </label>
          <input
            className={`input text-black bg-white border-1 border-black rounded-none ${
              errors.username ? "border-red-500" : ""
            }`}
            id="email"
            type="password"
            autoComplete="off"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 4,
                message: "Password must be at least 5 characters",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>
        <div className="flex gap-2 mt-3">
          <input type="checkbox" name="" id="" />
          <span>Remember me</span>
        </div>
        <button
          className="btn bg-btn-primary rounded-none text-slate-950 text-lg font-semibold my-3"
          type="submit"
        >
          Login
        </button>
        <p className="text-white">
          Don't have an account yet?{" "}
          <span>
            <Link to="/register" className="text-primary underline">
              Sign up
            </Link>
          </span>
        </p>
      </form>
    </div>
  );
}
