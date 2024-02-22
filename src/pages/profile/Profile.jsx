import React, { useState } from 'react';
// import { SideBar } from './sideBar';
import { Link, Outlet} from 'react-router-dom';
import "./profile.css";
import ProfileIcons from './ProfileIcons';
import { HeaderTwo } from '../headerTwo';


export default function Profile({selected}) {

    const  [activeIndex, setActiveIndex] = useState(0);


    const handleItemClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
      }

    return (
        <div className="profile ">
            
         <div className='profile-nav-container '>
        
            <HeaderTwo/>
        
            <ProfileIcons/>
         
         </div>
         
         <div className='profile-display'>
        
            <Outlet/>
         </div>

        </div>
    )
}