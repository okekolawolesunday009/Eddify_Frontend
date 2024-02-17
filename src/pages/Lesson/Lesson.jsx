import React, { useEffect, useState } from 'react';
// import { SideBar } from './sideBar';
import { Link, Outlet, useParams} from 'react-router-dom';
import "../profile/profile.css";
// import '..index.css';
// import { AppLinks, MainLinks} from "../config/custom/links";
// import Images from '..';
// import { FcSettings } from "react-icons/fc"
// import profilephoto2 from "../../../assets/profilepage/profilephoto2.svg";
// import arrow from "../../../assets/profilepage/arrow.svg";
// import { ProfileWrapper } from './ProfileWrapper';
// import Images from '../config/images/images';
// import classnames from 'classnames';
import { Header_two } from '../header_two';
import axios from 'axios';


export default function Lesson({selected}) {

    const  [activeIndex, setActiveIndex] = useState(0);


    const handleItemClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
      }

      const {id} = useParams()
    const [lesson, setLesson] = useState([])
    console.log(id)
    useEffect(() => {
        axios.get(`http://localhost:5001/course/${id}/lesson`).then(({data}) =>{
            setLesson(data)
            console.log(data)
      
          })
    }, [id])

    return (
        <div className="profile ">
            
         <div className='profile-nav-container pt-4 flex flex-col bg-red-500'>
        
            <Header_two/>
        
           <div className='text-center text-white'>
            <h3>Lesson</h3>

            <div className=''>
            {lesson.map((lesson) => {
                return <l1 className="text-white" key={lesson.lesson_id}>{lesson.lesson_title}</l1>
            })}

            </div>
          

           </div>
            
         
         </div>
         
         <div className='profile-display'>
        
            <Outlet/>
         </div>

        </div>
    )
}