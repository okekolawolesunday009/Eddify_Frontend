// import Header from "../Component/Header";
import { Title } from "../config/titleHeader";
import Input from "../Component/Input";
import PhoneNumber from "../Component/PhoneNumber";
import { Link, useNavigate, useParams } from "react-router-dom";
// import Auth from "../Component/Auth";
import eddify from "../assets/eddify.svg"
import user from "../assets/form-page assets/user.svg"
import emails from "../assets/form-page assets/email.svg"
import padlock from "../assets/form-page assets/padlock.svg"
import { useEffect, useState } from "react";
import React from 'react';
// import "react-datepicker/dist/react-datepicker.css";
import axios from "axios"
import { Label } from "../Component/styled";
import { Header_two } from "./header_two";



export  default function SignUp(){
    Title("Eddify || Sign up");

    // const [phone_one, setPhone_one] = useState()
    // const [phone_two, setPhone_two] = useState()

    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        password_hash: "",
        sex: "",
        username:"",
        location : "",
        phone_one:"",
        phone_two: "",
        pics:""
   })
   const navigate = useNavigate()
   const {fullname, email, password_hash,location,phone_one, phone_two, pics, username} = formData
   
   const handleChange = (e) =>{
       setFormData((prev) =>({
         ...prev,
         [e.target.id] : e.target.value
       }))
    //    setPhone_one(e.target.value)
    //    setPhone_two(e.target.value)
     }

   const submit = (e) =>{
       e.preventDefault()
       axios.post("http://localhost:3000/v1/users/signUp", formData)
       .then(res => {
        console.log(res)
        navigate("/todos")
       })
       .catch(err => {
        console.error(err)
       })
       console.log(formData)
       //install toast
    //    navigate("/")
       

   }
    return (
        <div className="">
        <Header_two/>
    <form className="">
     <div className="space-y-2 flex justify-center mx-auto  max-w-3xl  lg:my-10 p-10  lg:h-full w-full bg-cover flex-col">
        
        <h1 className="mb-2">Create new account</h1>
        <div className="grid  gap-4 grid-cols-1 lg:grid-cols-2 md:grid-cols-4 lg:flex ">
       <div className="flex flex-col gap-4">

       <Input 
            type="text" 
            icon= {< img src={user} alt="user"/>}
            placeholder="Peter Obi"
            id="fullname"
            label="Full Name"
            name="name"
            value={fullname}
            onChanged={handleChange}  />
        <Input 
            type="text" 
            icon= {< img src={user} alt="user"/>}
            placeholder="PeterObi"
            id="username"
            label="User Name"
            name="user"
            value={username}
            onChanged={handleChange}  />
        <Input 
             type="text"
             icon= {< img src={emails} alt="email"/>} 
             placeholder="peterobi@gmail.com" 
             id="email" 
             label="Email Address"
             name="email"
             value={email}
             onChanged={handleChange}  />
        <Input 
             type="password" 
             icon = {< img src={padlock} alt="password"/>} 
             placeholder="password" 
             password 
             id="password_hash"
             label="Password" 
             name="password"
             value={password_hash}
             onChanged={handleChange} />
        </div>
        <div className="flex flex-col gap-4">
        <div>
            <Label>Phone Number</Label>
            <PhoneNumber id="phone_one" name="phone_one" value={phone_one}  onChanged={handleChange}/>

        </div>
        
        <div>
            
            <Label>Alternative Phone Number</Label>
            <PhoneNumber id="phone_two" name="phone_two" value={phone_two}  onChanged={handleChange}/>
            

        </div>
        <Input 
             type="location"
             icon= {< img src={emails} alt="email"/>} 
             placeholder="Nigeria" 
             id="location" 
             label="Location"
             name="location"
             value={location}
             onChanged={handleChange}  />

        <Input 
             type="file"
             placeholder="profilepics" 
             id="pics" 
             label="Profile pics"
             name="pics"
             value={pics}
             onChanged={handleChange}  />
       
        </div>
        

        </div>
   
        
        <div className="flex w-ful">
            <input type="checkbox" />
            <p className="text-grey text-[0.75rem]">
                I have read and agreed to Daily Tracker
                <span className="text-primary">Private Policy
                {/* &nbsp;Private Policy */}
                {/* <br />
                Terms &amp; Conditions */}
                Terms &amp; Conditions

                </span>
            </p>
        </div>



        <div className=" flex flex-col">
        
            <button  style={{width:"100%"}}  onClick={submit}  className="btn mt-2">Sign Up</button>
        
           
            
        </div>
        
        <p className="text-center text-grey text-[1rem] mt-2">Already have an account?
                 <Link to={'/'} >
                    <span className="pl-2 text-primary font-bold">
                    Log in
                    </span>
                </Link>
                </p>
            {/* <SignupProvider/> */}
           

     </div>
     </form>
     </div>
    );
}