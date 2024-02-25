// import Header from "../Component/Header";
import { Title } from "../config/titleHeader";
import {VscThreeBars} from 'react-icons/vsc'
import {AiOutlineUser} from 'react-icons/ai'
import { Link, useNavigate, useParams } from "react-router-dom";
import eddify from "../assets/eddify.svg"
import React from 'react';
import axios from "axios"
import Images from "../Images/images";


export const HeaderTwo = () => {
    
       


    return (
        <>
        <div >
          
                <img className="w-[200px] h-[100px]" src={Images.eddify_white}  alt="Eddify"/>
  
        </div>
    
     </>
    );
}
