import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import registerBg from "../assets/auth_bg.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../features/auth/authApiSlice";

export default function Register() {
  const [createNewUser, { isLoading, isSuccess, isError, error }] =
    useRegisterMutation();

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isSuccess) {
      navigate("/login");
    }
  });

  const onSubmit = async (data) => {
    setEmail(data.email);
    setUsername(data.username);
    setPassword(data.password);
    if (isChecked) {
      await createNewUser({
        username,
        password,
        email,
      });
    }
  };

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
        className="relative z-20 w-3/4 sm:w-[500px] mx-auto mt-5 md:my-[180px] flex flex-col gap-5 p-10 shadow-3xl shadow-slate-900 rounded-md backdrop-blur bg-white/30-"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-center font-semibold text-xl lg:text-3xl text-slate-50">
          Create an account
        </h1>
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-md" htmlFor="firstName">
            Username
          </label>
          <input
            className={`input text-black bg-white border-1 border-black rounded-none ${
              errors.username ? "border-red-500" : ""
            }`}
            id="username"
            type="text"
            autoComplete="off"
            {...register("username", {
              required: "Username is required",
              minLength: {
                value: 4,
                message: "Username must be at least 5 characters",
              },
              maxLength: {
                value: 20,
                message: "Username must not exceed 20 characters",
              },
            })}
          />
          {errors.username && (
            <span className="text-red-500">{errors.username.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-md" htmlFor="email">
            Email
          </label>
          <input
            className={`input text-black bg-white border-1 border-black rounded-none ${
              errors.email ? "border-red-500" : ""
            }`}
            id="email"
            type="email"
            autoComplete="off"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-md" htmlFor="password">
            Password
          </label>
          <input
            className={`input text-black bg-white border-1 border-black rounded-none ${
              errors.password ? "border-red-500" : ""
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
        <button
          className="btn bg-btn-primary rounded-none text-slate-950 text-lg font-semibold my-6"
          type="submit"
        >
          Register
        </button>
        <div className="flex gap-3 justify-center">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span>
            I agree with{" "}
            <span className="text-primary">terms and condition</span>
          </span>
        </div>

        <p className="text-white">
          Already have an account?{" "}
          <span>
            <Link to="/login" className="text-primary underline">
              Sign in
            </Link>
          </span>
        </p>
        {isLoading && (
          <div className="flex justify-center align-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        )}
      </form>
    </div>
  );
}
