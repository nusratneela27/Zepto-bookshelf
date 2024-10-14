import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer";
import Navbar from "../components/Shared/Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
