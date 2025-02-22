import React from "react";
import CartBar from "./CartBar";
import NotRegistered from "./NotRegistered";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <>
      <CartBar />
      <NotRegistered />
      <Outlet />
    </>
  );
};

export default Layout;
