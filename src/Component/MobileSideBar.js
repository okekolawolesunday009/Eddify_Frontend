import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProfileWrapper } from "../pages/profile/ProfileWrapper";
import { SideBar } from "../pages/profile/sideBar";
import classnames from 'classnames';
import ProfileIcons from "../pages/profile/ProfileIcons";


const MobileSideBar = () => {
  
  return (
    <div className=" w-[100%] text-white bg-black h-screen flex flex-col  ">
     <ProfileIcons/>
    </div>
  );
};
export default MobileSideBar;