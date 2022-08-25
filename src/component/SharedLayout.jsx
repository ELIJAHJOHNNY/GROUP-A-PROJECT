import React from "react";
import "../styles/SharedStyle.css";
// import Navs from './Navs';
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div className="shared-container">
      {/* <Navs/> */}
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default SharedLayout;
