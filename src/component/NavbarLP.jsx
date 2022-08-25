import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

const NavbarLP = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
      <Link to="/">
        <img
          id="image1"
          src={logo}
          alt="NETFLIX"
          className="h-[50px] w-[60%]"
        />
      </Link>
      {/* <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
        NETFLIX
      </h1> */}
      <button className="bg-red-600 px-6 py-2 cursor-pointer text-white rounded">
        Sign In
      </button>
    </div>
  );
};

export default NavbarLP;
