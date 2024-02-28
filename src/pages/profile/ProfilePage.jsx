import React, { useContext, useEffect, useState } from "react";
import Input from "../../Component/Input";
import { Title } from "../../config/titleHeader";
import CourseProps from "../Courses/CourseProps";
import { Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import { userContext } from "../../config/UserContext";
import {AiOutlineUser} from 'react-icons/ai'
import {VscThreeBars} from 'react-icons/vsc'
import { CardDefault } from "../Courses/CardDefault";
import Search from "../../Component/UserIcon";
import MobileSideBar from "../../Component/MobileSideBar";
import Searchs from "../../Component/Searchs";
import UserIcon from "../../Component/UserIcon";
import eddify from "../../assets/eddify.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import Images from "../../Images/images"
import { Courses, SampleCourses } from "../Courses/course";
import CourseStatic from "../Courses/CourseStatic";
import { Footer } from "../../Layouts/footer";
import ProfileIcons from "./ProfileIcons";


export const ProfileDashboard = ()=>{
    Title("Eddify || Learners Profile");
    const {user} = useContext(userContext)
    console.log(user)
    const [nav, setNav] = useState(false)

    function handleClick(){
      setNav((p) => !p)
    }

   
    return(
        <div className="">
            <div className="flex relative justify-between items-center w-full " >
            
                      <h1>Profile</h1>
                        <UserIcon  onHandle={handleClick}/>

             </div>
             <div className="bottom-border"></div>
       
           
                 <div className= {nav ? 'w-[100%] bg-black z-40 bottom-0 block absolute' : 'hidden' }><MobileSideBar/></div>

            <div className=" p-card " style={{marginTop:"40px"}}>
                <div className="div-icon">
                  

                    <img src={Images.profilePhoto} alt="profile photo"/>
                    {user ? (<h3 className="font-bold">{`${user.first_name} ${user.last_name}`}</h3>) : 
                    (<h3 className="font-bold"> OKE KOLAWOLE SUNDAY</h3>)}



                </div>
                <div className="div-text">

                    <h2>Personal Details</h2>
                    <div className="div-text-flex">
                        <div>
                                <h3>Title:</h3>
                                <h3>Sex:</h3>
                                <h3>Date of Birth:</h3>
                                <h3>Membership:</h3>

                        </div>
                        <div className="font-bold">

                                <h3>Mr</h3>
                                <h3>Nil</h3>
                                <h3>22-09-1987</h3>
                                <h3>Gold</h3>


                        </div>

                    </div>
                 </div>
                
                
            </div>

            <Footer/>
      </div>
        
    )
    
};
export const ProfileHome = ()=>{
    Title("Eddiffy || Learner's Home");
    const [nav, setNav] = useState(false)
   
    function handleClick(){
     setNav((p) => !p)
   }
    return(
        <div>
            <div className="flex justify-between items-center w-full " >
           <h1>Home</h1>

            <Searchs/>
            <UserIcon  onHandle={handleClick}/>

            </div>
            <div className="bottom-border"></div>

            <div className= {nav ? 'w-[100%] block absolute' : 'hidden' }><MobileSideBar/></div>
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
    

   const [courses, setCourses] = useState([...SampleCourses])
   const [enrolledCourses, setEnrolledCourses] = useState([])
   const [nav, setNav] = useState(false)
  
   const {search} = formData

   const navigate = useNavigate()

   
   useEffect(() => {
    axios.get(`https://eddify-i4ft.onrender.com/courses`).then(({data}) =>{
        setCourses(data)
  
      })
      
   if (user && id) {
    console.log(id)
    axios.get(`https://eddify-i4ft.onrender.com/user/${id}/enrollments`).then(({data}) =>{
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
            <div className="bottom-border"></div>

            <div className= {nav ? 'w-[100%] block absolute' : 'hidden' }><MobileSideBar/></div>

            <div className="" style={{paddingTop:"40px"}}>
                <h2>My Learnings</h2    >
             
                <div>
                   {user != null ? ( enrolledCourses && (
                        enrolledCourses.map((course) =>{
                            return ( <CourseProps key={course.course_id} courses={course}/>)
                    
                    }))) : (
                        Courses.map((course) =>{
                            return ( <CourseStatic key={course.course_id} courses={course}/>)
                    
                    })
                       
                    )

                }
                        
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

            <Footer/>
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
export const CourseEnroll = ()=>{
    Title("Serch || Learner's Enroll");
    // SwiperCore.use([Autoplay, Navigation, Pagination]);
    const [course, setCourse] = useState([])
    const {id} = useParams()
    const {user} = useContext(userContext)
    console.log(id, course)
    useEffect(() => {
        if (user && id) {

           axios.get(`https://eddify-i4ft.onrender.com/courses/${id}`).then(({data}) =>{
            setCourse(data)
            console.log(data)
      
          })
        }else{
            setCourse()

        }
        },[id])
        const [nav, setNav] = useState(false)
        function enroll () {
            axios.post(`https://eddify-i4ft.onrender.com/courses/${id}`).then(({data}) =>{
                setCourse(data)
                console.log(data)
          
              })


        }

        function handleClick(){
            setNav((p) => !p)
          }
    return(
        <div>
            <div className="flex justify-between mb-5 items-center w-full " >
            <h1>{course.title}</h1>

            <Searchs/>
            <UserIcon  onHandle={handleClick}/>

            </div>

            <div className="bottom-border"></div>
       
           
          <div className= {nav ? 'w-[100%] bg-black z-40 bottom-0 block absolute' : 'hidden' }><MobileSideBar/></div>


            <div className="w-full flex  mt-5 bg-red-600 h-4 " style={{marginTop:"20px", backgroundColor:"gray", height:
        "200px"}}>
            <h1>{course.title}</h1>

                

            </div>
           <div className="flex flex-col">
             <div className="flex gap-4 items-center">
             <h1>{course.title}</h1>
             <div className="flex gap-4">  
                    <h3> lessons:{course.number_lesson}</h3>
                    <h3>hours:{course.hours_lesson}</h3></div>
             </div>
             </div>
             <div className="flex flex-col gap-4">
                <h2>{course.description}</h2> 
               
               

           </div>
           <div>
           <button className="btn" onClick={enroll}>Enroll</button>
           </div>

            <Footer/>

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