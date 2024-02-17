import React, { useContext, useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { userContext } from '../config/UserContext'
import "./userIcon.css"
import { BsThreeDots } from 'react-icons/bs'
import {VscThreeBars} from 'react-icons/vsc'

export default function UserIcon({onHandle}) {
    const {user} = useContext(userContext)
    function handle() {
        onHandle()
    }
    

    return (
    <>
        <div className='flex search px-3 gap-2 justify-center items-center'>
           {window.innerWidth <= 768 ? (
               <div className="">
                   <Link to={""}>
                     <VscThreeBars onClick={handle}/>

                   </Link>
               </div>
               ) : (
                   <AiOutlineUser />
            )}

               {/* Conditionally render the user details if user exists */}
               {!!user && (
                   <div className='text-black'>
                       {user.first_name} {/* Example: Render the user's email */}
                   </div>
               )}

           </div>


       </>
      
  )
}
