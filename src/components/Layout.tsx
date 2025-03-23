import React from "react";
import CartBar from "./CartBar";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <>
      <CartBar />
      <Outlet />
    </>
  );
};

export default Layout;
