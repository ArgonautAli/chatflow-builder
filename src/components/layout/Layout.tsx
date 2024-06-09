import { Outlet } from "react-router-dom";
import { AppBar } from "../appbar/AppBar";
import "./layout.css";

export const Layout = () => {
  return (
    <div className="layout_container">
      <AppBar />
      <Outlet />
    </div>
  );
};
