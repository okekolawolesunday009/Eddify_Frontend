import React, { useContext, useEffect, useState } from "react";
import Input from "../../Component/Input";
import { Title } from "../../config/titleHeader";
import CourseProps from "../Courses/CourseProps";
import { Courses } from "../Courses/course";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { UserContextProvider, userContext } from "../../config/UserContext";
import {AiOutlineUser} from 'react-icons/ai'
import {VscThreeBars} from 'react-icons/vsc'
import CourseDB from "../Courses/CourseDB";
import { CardDefault } from "../Courses/CardDefault";

// import profilephoto from "../../../assets/profilepage/profilephoto.svg";

export const ProfileDashboard = ()=>{
    Title("Eddify || Profile Home");
    const {user} = useContext(userContext)
    const {profile} = useContext(userContext)
    console.log(user)
   
    return(
       
            <div className="profile_dashboard">
                <div className="profile_photo">
                    {/* <img src={profilephoto} alt="profile photo"/> */}
                 <div>
                 <h3>
                 {!!user && (
                    <div className='text-black'>
                        {profile.first_name}  {profile.last_name}
                    </div>
                )}

                 </h3>
                 <h4>Learner</h4>
                 </div>
                </div>
                <div className="profile_button">
                    <button type='submit'>Edit</button>
                  </div>
            </div>
        
    )
    
};
export const ProfileHome = ()=>{
    Title("Serch || Profile Home");
    return(
        <div>
            profile Home
        </div>
    )
    
};
export const ProfileCourse = ()=>{
    Title("Eddify|| Profile Course");
    const [formData, setFormData] = useState({
        search: ""
   })
   const {user} = useContext(userContext)
       const {profile} = useContext(userContext)

   const [courses, setCourses] = useState([])
   const [enrolledCourses, setEnrolledCourses] = useState([])
  
   const {search} = formData

   const navigate = useNavigate()

   
   useEffect(() => {
    axios.get(`http://localhost:5001/api/v1/courses`).then(({data}) =>{
        setCourses(data)
        console.log(data)
  
      })
    axios.get(`http://localhost:5001/api/v1/user/${profile.id}/enrollments`).then(({data}) =>{
        setEnrolledCourses(data.course)
        console.log(data)
    })

   }, [])

   
   
   const handleChange = (e) =>{
       setFormData((prev) =>({
         ...prev,
         [e.target.id] : e.target.value
       }))
     }
    return(
        <div className="bg-blue-500!important">
           <div className="flex justify-between items-center w-full " >
           <h1>My Courses</h1>

           <div className="hidden lg:flex">
           <Input
            type="text" 
            // icon= {<img src={user} alt="email"/>} 
            placeholder="Search Course" 
            id="search" 
            value={search} 
            name="search"
            onChanged ={handleChange} />
           </div>

           <div className='flex border border-black rounded-full px-3 gap-2 justify-center items-center'>
           
           
           {window.innerWidth <= 768 ? (
                <div className="">
                    <Link to={user ? "/api/v1/profile" : "/api/v1/users/login"}>
                    <AiOutlineUser />
                    </Link>
                </div>
                ) : (
                    <AiOutlineUser />
                )}

                {/* Conditionally render the user details if user exists */}
                {!!user && (
                    <div className='text-black'>
                        {user} {/* Example: Render the user's email */}
                    </div>
                )}

                </div>


            </div>

            <div className="" style={{paddingTop:"40px"}}>
                <h2>My Learnings</h2    >
             
                <div>
                    {enrolledCourses.map((course) =>{
                        return ( <CourseProps key={course.id} courses={course}/>)
                    })}
                        
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
    Title("Serch || Profile Settings");
    return(
        <div>
            profile help
        </div>
    )
    
};
export const ProfileLogOut= ()=>{
    Title("Serch || Profile page");

    useEffect(() => {
        // Clear the token from localStorage
        localStorage.removeItem('token');

        // Redirect the user to the login page
        window.location.replace('/api/v1/users/login');
    }, []); // Empty dependency array to run the effect only once after the component mounts

    return(
        <div>
            profile Logout
        </div>
    )
    
};
export const ProfilePayment = ()=>{
    Title("Serch || Profile page");

    
    return(
        <div>
            profile Payment
        </div>
    )
    
};