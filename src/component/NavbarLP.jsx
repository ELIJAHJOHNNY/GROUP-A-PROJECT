import React from "react";
import { Link } from "react-router-dom";
import navlogo from "../images/navlogo.svg";
import { useNavigate } from "react-router-dom";

const NavbarLP = () => {
  const navigate = useNavigate();
  function Signin() {
    navigate("/Login");
  }

  return (
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
      <Link to="/">
        <img
          id="image1"
          src={navlogo}
          alt="NETFLIX"
          className="h-[50px] xs:w-[50%] sm:w-[60%]"
        />
      </Link>
      {/* <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
        NETFLIX
      </h1> */}
      <button
        onClick={Signin}
        className="bg-red-600 xs:px-4 xs:py-1 xs:text-[10px] sm:text-[16px] sm:px-6 sm:py-2  cursor-pointer text-white rounded"
      >
        Sign In
      </button>
    </div>
  );
};

export default NavbarLP;
