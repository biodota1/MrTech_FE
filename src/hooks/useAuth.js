import { useSelector } from "react-redux";
import React from "react";
import { jwtDecode } from "jwt-decode";
import { selectCurrentToken } from "../features/auth/authSlice";

export default function useAuth() {
  const token = useSelector(selectCurrentToken);
  if (token) {
    const decoded = jwtDecode(token);
    const { roles } = decoded.UserInfo;

    return { roles };
  }

  return { roles: "" };
}
