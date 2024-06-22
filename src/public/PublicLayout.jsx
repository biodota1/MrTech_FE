import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import heroBg from "../assets/hero_bg.jpg";

export default function PublicLayout() {
  return (
    <div className="relative min-h-screen bg-white ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
