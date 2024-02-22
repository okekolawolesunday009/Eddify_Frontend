// import Header from "../Component/Header";
import { Title } from "../config/titleHeader";
import {VscThreeBars} from 'react-icons/vsc'
import {AiOutlineUser} from 'react-icons/ai'
import { Link, useNavigate, useParams } from "react-router-dom";
import eddify from "../assets/eddify.svg"
import React from 'react';
import axios from "axios"


export const HeaderTwo = () => {
    
       


    return (
        <>
        <div className="">
          
                <img src={eddify}  alt="Eddify"/>
  
        </div>
    
     </>
    );
}
