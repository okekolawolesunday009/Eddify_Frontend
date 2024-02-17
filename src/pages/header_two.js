// import Header from "../Component/Header";
import { Title } from "../config/titleHeader";
import {VscThreeBars} from 'react-icons/vsc'
import {AiOutlineUser} from 'react-icons/ai'
import { Link, useNavigate, useParams } from "react-router-dom";
import eddify from "../assets/eddify.svg"
import React from 'react';
import axios from "axios"


export const Header_two = () => {
    
       


    return (
        <>
        <div className="flex justify-between h-[5%]   items-center">
            <div className="">
                <img src={eddify} className="lg:h-full h-[60%] lg:w-full w-[60%]" alt="Eddify"/>
            </div>


            <div className='flex border border-gray-300 rounded-full px-3 gap-2 justify-center items-center'>
     
       
       
        {window.innerWidth <= 768 ? (
          <div  className="">
            {/* <Link to={user ? "/account" : "/login"}> */}
               
            < VscThreeBars/>
                {/* </Link> */}
           
          </div>
        ) : (
        //    <DrawerDefault />
        ""
        )}

      
      
      
      </div>
        </div>
    
     </>
    );
}
