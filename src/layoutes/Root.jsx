import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "../Providers/ThemeProvider";

const Root = () => {
  return (
    <ThemeProvider>
      <div>
        <div className="w-full mx-auto font-semibold">
          <Navbar />
        </div>
        <Outlet />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Root;
