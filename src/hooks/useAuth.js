import { useSelector } from "react-redux";
import React from "react";
import { jwtDecode } from "jwt-decode";

export default function useAuth() {
  const token = true;
  const user = {
    username: "jamesmyer",
    roles: "admin",
    id: 1234,
  };

  //   if (token) {
  //     const decode = jwtDecode(token);
  //     const { username, roles } = decode.UserInfo;

  //     return { username, roles };
  //   }
  return { username, roles, id };
}
