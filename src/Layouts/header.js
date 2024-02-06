import eddify from "../assets/eddify.svg"
import dropDown from "../assets/dropDown.svg"
import { HeadLinks } from "./headerLinks"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export  const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate()
    const handleClick = (route) => {
        // const selected = HeadLinks.map((link) => link.id == id)
        if (route === "home") {
            navigate("/")

        } else if (route === "about") {
            navigate("/home/about")
        }

    }
   

    return (
       
        <div className="flex justify-between items-center">
            <div className="">
                <img src={eddify} className="lg:h-full h-[60%] lg:w-full w-[60%]" alt="Eddify"/>
            </div>

            <div className="hidden lg:block">
                <ul className="flex gap-4">
                    <li  onClick={handleClick("home")} className="text-xl text-bold">Home</li>
                
                     <li className=" text-xl text-bold inline-flex items-center gap-2"
                     onClick={() => setShowDropdown(!showDropdown)}>Course <img className="h-2 w-3 cursor-pointer" src={dropDown}/></li>
                    
                    {showDropdown && ( <div id="dropdown" className="absolute right-[47%] top-[13%] ">
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        {HeadLinks.map((link) => {
                            return <li className="text-xl text-bold"
                           
                            key={link.id}>{link.title}
                            
                            </li>
                        })}
                        </ul>
                    </div>
                    )}
                    
                    
                    <li  onClick={handleClick("contact")} className="text-xl text-bold">Contact Us</li>
                    <li  onClick={handleClick("about")} className="text-xl text-bold">About Us</li>


                </ul>
                
            </div>

            <div>
                <Link to = {'/login'}>
                <button className="bg-ed-secondary font-medium">Sign in</button>
                </Link>

            </div>
        </div>
    )

}