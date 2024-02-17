import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const MobileSideBar = () => {
  return (
    <div className=" w-[100%] text-white bg-gray-800 h-screen flex flex-col  ">
      <br></br>
      <br></br>
      <h1 className="text-xm lg:text-2xl font-bold text-center ">Dashboard</h1>
        <ul className=" mt-6 flex flex-col space-y-4 text-center">
        <li className="text-xm lg:text-xl">
          <Link to="" className="text-white hover:text-indigo-500">
           <p className="">Home</p>
          </Link>
        </li>
      
        <li className="text-xm lg:text-xl">
            <Link to="/profile/courses" className="text-white hover:text-indigo-500">
              Course
            </Link>
          </li>
          {/* <li className="text-xm lg:text-xl">
            <Link to="/home/create" className="text-white hover:text-indigo-500">
              profile
            </Link>
          </li>
         */}
          <li className="text-xm lg:text-xl">
          <Link to="/profile" className="text-white hover:text-indigo-500">
           Profile
          </Link>
        </li>
        <li className="text-xm lg:text-xl">
        <button className="text-white"> Logout </button>

        </li>
      </ul>
    </div>
  );
};
export default MobileSideBar;