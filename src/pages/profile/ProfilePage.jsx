import React, { useEffect, useState } from "react";
import Input from "../../Component/Input";
import { Title } from "../../config/titleHeader";
import CourseProps from "../Courses/CourseProps";
import { Courses } from "../Courses/course";
import { useParams } from "react-router-dom";
import axios from "axios";
// import user from ".";

// import profilephoto from "../../../assets/profilepage/profilephoto.svg";

export const ProfileDashboard = ()=>{
    Title("Eddify || Profile Home");
    return(
       
            <div className="profile_dashboard">
                <div className="profile_photo">
                    {/* <img src={profilephoto} alt="profile photo"/> */}
                 <div>
                 <h3>John Doe</h3>
                 <h4>Plumber</h4>
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
    Title("Serch || Profile Course");
    const [formData, setFormData] = useState({
        search: ""
   })
   const [user, setUser] = useState([])

   const {id} = useParams()
  
   const {search} = formData

   useEffect(() => {
    axios.get(`http://localhost:5001/api/v1/profile/courses/${id}/enrolled-courses`).then(({data}) =>{
        setUser(data)
        console.log(user)
  
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

            <p>profile</p>
            </div>

            <div className="" style={{paddingTop:"40px"}}>
                <h2>My Learnings</h2    >
                <div>
                    {Courses.map((course) =>{
                        return ( <CourseProps key={course.id} courses={course}/>)
                    })}
                        
                </div>
            </div>

            {/* <h2 className="mt-4">More Courses</h2> */}
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