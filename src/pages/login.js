// import Header from "../Component/Header";
import { Title } from "../config/titleHeader";
import Input from "../Component/Input";
import PhoneNumber from "../Component/PhoneNumber";
import { Link, useNavigate, useParams } from "react-router-dom";
import eddify from "../assets/eddify.svg"
import user from "../assets/form-page assets/user.svg"
// import emails from "../assets/form-page assets/email.svg"
// import padlock from "./assets/form-page assets/padlock.svg"  
import { useEffect, useState } from "react";
import React from 'react';
// import "react-datepicker/dist/react-datepicker.css";
import axios from "axios"
import { Header_two } from "./header_two";
// import { Label } from "../Component/styled";
// import { toast } from "react-toastify";

export const Login = () => {
    Title("Eddify || Login");
    const [formData, setFormData] = useState({
        email: "",
        password: ""
   })
   const navigate = useNavigate()
   const {email, password} = formData
   
   const handleChange = (e) =>{
       setFormData((prev) =>({
         ...prev,
         [e.target.id] : e.target.value
       }))
     }

   const submit = (e) =>{
       e.preventDefault()
       axios.post("http://localhost:5001/api/v1/users/login", formData)
       .then(res => {
        console.log(res)
        navigate("/profile")

        // if (res.data.success === true) {
        //     console.log(res.data.message)
        //     // toast.success("Login Successful")
        //     console.log("successful")
        //     navigate("/profile")
        // }
       }).catch(err => {
        // toast.error("Error Signing in")
        console.log(err.response.data.error.message)
       })
       
       

   }
    return (
        <div className="">
            <Header_two/>
        <form className="">
     <div className="space-y-2 flex justify-center mx-auto  max-w-xl  lg:my-10 p-10 h-screen lg:h-full w-full bg-cover flex-col">
        <h1 className="mb-2">Welcome Back!!!</h1>

        <Input 
            type="text" 
            icon= {<img src={user} alt="email"/>} 
            placeholder="peterobi@gmail.com" 
            id="email" 
            label="Email Address"
            value={email} 
            name="email"
            onChanged ={handleChange} />
        <Input 
            type="password" 
            icon = {< img src={user} alt="password"/>}
             placeholder="password" 
             password
             id="password" 
             label="Password"
             value={password} 
             name= "password"
             onChanged ={handleChange} />
        <Link to={'/v1/users/reset'} >
            <p className=" text-grey text-[1rem] ">Forgot password?
                 <span className="pl-2 text-primary text-[0.9rem] font-bold">
                    reset
                </span>
                
            </p>
        </Link>
            {/* <SignupProvider/> */}
           
        <div className=" flex  justify-center">
      
            <button style={{width:"100%"}} type="submit mt-2" onClick={submit} className="btn">Login</button>
            
        </div>
        
        <p className="text-center text-grey text-[1rem] mt-2">Don't have an account?
                 <Link to={'/sign-up'} >
                    <span className="pl-2 text-primary font-bold">
                    Sign up
                    </span>
                </Link>
                </p>
            {/* <SignupProvider/> */}
           

     </div>
     </form>
     </div>

    );
}
