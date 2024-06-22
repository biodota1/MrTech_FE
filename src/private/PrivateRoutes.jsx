import React from "react";
import { Navigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Admin from "./admin/Admin";
import Member from "./member/Member";

export default function PrivateRoutes({ element }) {
  //   const { user } = useAuth();

  //   if (!user) {
  //     return <Navigate to="/login" />;
  //   }
  return element;
}
