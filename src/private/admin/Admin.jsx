import React from "react";
import { Link, Outlet } from "react-router-dom";
import UserList from "../../features/user/UserList";
import { useSendLogoutMutation } from "../../features/auth/authApiSlice";

export default function Admin() {
  const [logout, { isLoading }] = useSendLogoutMutation();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <div className="flex h-screen">
      <div className="w-[200px] h-full bg-slate-900 flex flex-col">
        <Link
          to=""
          className="h-[50px] pl-14 flex items-center bg-slate-900 hover:bg-slate-800"
        >
          <p className="text-primary font-semibold text-lg">Dashboard</p>
        </Link>
        <Link
          to="users"
          className="h-[50px] pl-14 flex items-center bg-slate-900 hover:bg-slate-800"
        >
          <p className="text-primary font-semibold text-lg">Users</p>
        </Link>
        <Link
          to="products"
          className="h-[50px] pl-14 flex items-center bg-slate-900 hover:bg-slate-800"
        >
          <p className="text-primary font-semibold text-lg">Products</p>
        </Link>
        <Link className="h-[50px] pl-14 flex items-center bg-slate-900 hover:bg-slate-800">
          <p className="text-primary font-semibold text-lg">Settings</p>
        </Link>
        <button
          className="h-[50px] pl-14 flex items-center bg-slate-900 hover:bg-slate-800"
          onClick={handleLogout}
        >
          <p className="text-primary font-semibold text-lg">Logout</p>
        </button>
      </div>
      <div className="p-10">
        <Outlet />
      </div>
    </div>
  );
}
