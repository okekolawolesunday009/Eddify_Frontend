import React, { useEffect, useState } from 'react';
// import { SideBar } from './sideBar';
import { Link, Outlet, useParams} from 'react-router-dom';
import "../profile/profile.css";
import { HeaderTwo } from '../headerTwo';
import axios from 'axios';
import ProfileIcons from '../profile/ProfileIcons';


export default function Lesson({selected}) {

    // const  [activeIndex, setActiveIndex] = useState(0);


    // const handleItemClick = (index) => {
    //     setActiveIndex(index === activeIndex ? null : index);
    //   }

    //   const {id} = useParams()
    // const [lesson, setLesson] = useState([])
    // // console.log(id)
    // useEffect(() => {
    //     axios.get(`http://localhost:5001/course/${id}/lesson`).then(({data}) =>{
    //         setLesson(data)
    //         console.log(data)
      
    //       })
    // }, [id])

    return (
        <div className="profile ">
            
         <div className='profile-nav-container pt-4 flex flex-col bg-red-500'>
        
            <HeaderTwo/>
            <ProfileIcons/>           
         
         </div>
         
         <div className='profile-display'>
        
            <Outlet/>
         </div>

        </div>
    )
}