import React, { useContext, useEffect, useState } from "react";
import Input from "../../Component/Input";
import { Title } from "../../config/titleHeader";
import CourseProps from "../Courses/CourseProps";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";
import { userContext } from "../../config/UserContext";
import {AiOutlineUser} from 'react-icons/ai'
import {VscThreeBars} from 'react-icons/vsc'
import { CardDefault } from "../Courses/CardDefault";
import Search from "../../Component/UserIcon";
import MobileSideBar from "../../Component/MobileSideBar";
import Searchs from "../../Component/Searchs";
import UserIcon from "../../Component/UserIcon";
import { Header_two } from "../header_two";
import eddify from "../../assets/eddify.svg"


export const ProfileDashboard = ()=>{
    Title("Eddify || Learners Profile");
    const {user} = useContext(userContext)
    const [nav, setNav] = useState(false)

    function handleClick(){
      setNav((p) => !p)
    }
   
    return(
        <div className="">
            <div className="flex relative justify-between items-center w-full " >
            
                      <h1>Profile</h1>
                        <Searchs/>
                        <UserIcon  onHandle={handleClick}/>

                        </div>
       
                    {/* <img src={profilephoto} alt="profile photo"/> */}
           
                 <div className= {nav ? 'w-[100%] bg-black z-40 bottom-0 block absolute' : 'hidden' }><MobileSideBar/></div>

            

          

                 
      
{/*        
            <div className="profile_dashboard">

                 
                 <h3>
                 {!!user && (
                    <div className='text-black'>
                        {user.first_name}  {user.last_name}
                    </div>
                )}

                 </h3>
                 <h4>Learner</h4>
                   </div> */}
               
                {/* <div className="profile_button">
                    <button type='submit'>Edit</button>
                  </div> */}
            
      </div>
        
    )
    
};
export const ProfileHome = ()=>{
    Title("Eddiffy || Learner's Home");
    return(
        <div>
            profile Home
        </div>
    )
    
};
export const ProfileCourse = ()=>{
    Title("Eddify ||  Learner's  Course");
    const [formData, setFormData] = useState({
        search: ""
   })
   const {user} = useContext(userContext)
   const {id} = useContext(userContext)
    

   const [courses, setCourses] = useState([])
   const [enrolledCourses, setEnrolledCourses] = useState([])
  
   const {search} = formData

   const navigate = useNavigate()

   
   useEffect(() => {
    axios.get(`http://localhost:5001/courses`).then(({data}) =>{
        setCourses(data)
  
      })
      
   if (user && id) {
    console.log(id)
    axios.get(`http://localhost:5001/user/${id}/enrollments`).then(({data}) =>{
        setEnrolledCourses(data)
        console.log(enrolledCourses.course)
    })
   }

   }, [])

   
   
   const handleChange = (e) =>{
       setFormData((prev) =>({
         ...prev,
         [e.target.id] : e.target.value
       }))
     }

     const [nav, setNav] = useState(false)

     function handleClick(){
       setNav((p) => !p)
     }
    return(
        <div className="bg-blue-500!important relative">
           <div className="flex justify-between items-center w-full " >
           <h1>My Courses</h1>

            <Searchs/>
            <UserIcon  onHandle={handleClick}/>

            </div>
            <div className= {nav ? 'w-[100%] block absolute' : 'hidden' }><MobileSideBar/></div>

            <div className="" style={{paddingTop:"40px"}}>
                <h2>My Learnings</h2    >
             
                <div>
                    {enrolledCourses && (
                        enrolledCourses.map((course) =>{
                            return ( <CourseProps key={course.course_id} courses={course}/>)
                    
                    }))}
                        
                </div>
            </div>

            
          

            <h2 style={{marginTop:"20px"}} className="mt-4">More Avalable Courses</h2>
            <div className="w-auto h-[600px]">
                <ul className=" grid  gap-8 lg:flex-wrap grid-cols-4 md:grid-cols-4 lg:flex">
                {courses.length > 0 && (
                    courses.map((course) => {
                        return (<CardDefault key={course.id} course={course}/>)
                    })
                )}
                </ul>

            </div>
        </div>
    )
    
};
export const ProfileHelp = ()=>{
    Title("Serch || Learner's Settings");
    return(
        <div>
            profile help
        </div>
    )
    
};
export const ProfileLogOut= ()=>{
    Title("Serch || Logout");

    useEffect(() => {
        // Clear the token from localStorage
        localStorage.removeItem('token');

        // Redirect the user to the login page
        window.location.replace('/login');
    }, []); // Empty dependency array to run the effect only once after the component mounts

    return(
        <div>
            profile Logout
        </div>
    )
    
};
export const ProfilePayment = ()=>{
    Title("Serch || Payment");

    
    return(
        <div>
            profile Payment
        </div>
    )
    
};