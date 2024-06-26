import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { isAuthenticated, username, userRole } = useSelector(
    (state) => state.auth
  );
  return (
    <div className="relative z-50 navbar bg-slate-900 text-primary">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-none w-52"
          >
            <Link to="/">Home</Link>
            <Link to="/products">All Products</Link>
            <Link to="/category">Category</Link>
            {!isAuthenticated ? (
              <div className="flex flex-col">
                <Link to="/login">Sign in</Link>
                <Link to="/register">Sign up</Link>
              </div>
            ) : (
              <Link to={userRole === "Admin" ? "/admin" : "/profile"}>
                Dashboard
              </Link>
            )}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost text-md lg:text-xl font-bold ml-10"
        >
          MrTech
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      {!isAuthenticated ? (
        <Link to="/login" className="navbar-end text-sm px-4 sm:hidden">
          Sign in
        </Link>
      ) : (
        <div></div>
      )}
      {!isAuthenticated ? (
        <div className="navbar-end hidden sm:flex">
          <Link to="/login" className="mx-5">
            Sign in
          </Link>
          <Link to="/register" className="btn bg-btn-primary text-black">
            Sign up
          </Link>
        </div>
      ) : (
        <div className="navbar-end flex gap-5 px-5">
          <Link
            className="hidden xl:flex"
            to={userRole === "Admin" ? "/admin" : "/profile"}
          >
            {username}
          </Link>
          <Link
            to={userRole === "Admin" ? "/admin" : "/profile"}
            className="avatar online h-[30px] w-[30px]"
          >
            <div className="w-24 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
