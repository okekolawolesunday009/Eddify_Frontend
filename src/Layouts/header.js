import eddify from "../assets/eddify.svg"
import dropDown from "../assets/dropDown.svg"
import { HeadLinks } from "./headerLinks"
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export  const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [courses, setCourses] = useState([])
    function handleDropdown () {
        setShowDropdown((p) => !p)

    }
    const navigate = useNavigate()
    const handleClick = (route) => {
        // const selected = HeadLinks.map((link) => link.id == id)
        if (route === "home") {
            navigate("/")

        } else if (route === "about") {
            // navigate("/home/about")
        }

    }
    useEffect(() => {
        if (handleClick === "course") {
            axios.get("http://localhost:5001/courses")
        .then(({data}) => {
            setCourses(data)
            console.log(data)
        })

        }
        
    },[handleClick])
   

    return (
       
        <div className="flex justify-between items-center px-[10px]">
            <div className="">
                <img src={eddify} className="lg:h-full h-[60%] lg:w-full w-[60%]" alt="Eddify"/>
            </div>

            <div className="hidden lg:block">
                <ul className="flex gap-4">
                    <li  onClick={() => handleClick("home")} className="text-xl text-bold">Home</li>
                
                     <li className=" text-xl text-bold inline-flex items-center gap-2"onClick={() => handleClick("course")}
                    >Course <img  onClick={() => handleDropdown("course")} className="h-2 w-3 cursor-pointer" src={dropDown}/></li>
                    
                    {showDropdown && ( <div id="dropdown" className="absolute right-[47%] top-[13%] ">
                        <ul class="py-2 bg-blue-400 rounded-2xl p-4 text-sm text-black dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        {courses.map((link) => {
                            return <li  className="text-xl hover:bg-white hover:text-black w-full cursor:pointer text-bold text-white"
                           
                            key={link.id}>{link.title}
                            
                            </li>
                        })}
                        </ul>
                    </div>
                    )}
                    
                    
                    <li  onClick={() => handleClick("contact")} className="text-xl text-bold">Contact Us</li>
                    <li  onClick={() => handleClick("about")} className="text-xl text-bold">About Us</li>


                </ul>
                
            </div>

            <div>
                <Link to = {'/signup'}>
                <button className="bg-ed-secondary font-medium">Sign up</button>
                </Link>

            </div>
        </div>
    )

}