import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoutes({ roles, element }) {
  const { isAuthenticated, userRole } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (roles && !roles.includes(userRole)) {
    return <Navigate to="/unauthorized" />;
  }

  return element;
}
