import React, { useState } from 'react';
// import { SideBar } from './sideBar';
import { Link, Outlet} from 'react-router-dom';
import "./profile.css";
// import '..index.css';
// import { AppLinks, MainLinks} from "../config/custom/links";
// import Images from '..';
// import { FcSettings } from "react-icons/fc"
// import profilephoto2 from "../../../assets/profilepage/profilephoto2.svg";
// import arrow from "../../../assets/profilepage/arrow.svg";
// import { ProfileWrapper } from './ProfileWrapper';
// import Images from '../config/images/images';
// import classnames from 'classnames';
import ProfileIcons from './ProfileIcons';
import { Header_two } from '../header_two';


export default function Profile({selected}) {

    const  [activeIndex, setActiveIndex] = useState(0);


    const handleItemClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
      }

    return (
        <div className="profile">
            
         <div className='profile-nav-container pt-4'>
        
            <Header_two/>
        
            <ProfileIcons/>
         
         </div>
         
         <div className='profile-display'>
        
            <Outlet/>
         </div>

        </div>
    )
}