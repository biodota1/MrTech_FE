import React from "react";
import { useSendLogoutMutation } from "../../features/auth/authApiSlice";
import { useSelector } from "react-redux";

export default function Member() {
  const [logout, { isLoading }] = useSendLogoutMutation();

  const { isAuthenticated, username, userRole } = useSelector(
    (state) => state.auth
  );

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };
  return (
    <div className="m-6">
      <div className="w-24 m-auto rounded-full">
        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      </div>
      <h1 className="text-center p-5 font-semibold text-slate-900">
        {username}
      </h1>
      <div className="flex justify-center">
        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}
