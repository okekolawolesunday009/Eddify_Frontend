import React from 'react'
import { Link } from 'react-router-dom'
import {profileStyle} from './profile.style'

export default function ProfileProp({item, stepActive}) {
  return (
    <Link to={item.path}>
    <profileStyle stepActive={stepActive}>
      
             {item.icon}
            {/* <span>Icon</span> */}
     
    </profileStyle>
    </Link>
  )
}