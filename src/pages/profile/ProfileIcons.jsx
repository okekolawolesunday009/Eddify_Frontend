import React, { useState } from 'react'
import { SideBar } from './sideBar'
import { Link } from 'react-router-dom'
import classnames from 'classnames';
import { ProfileWrapper } from './ProfileWrapper';


export default function ProfileIcons({column}) {

    const  [activeIndex, setActiveIndex] = useState(0);


    const handleItemClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
      }

  return (
    <div className=''>
        <ProfileWrapper column = {column} >
            {SideBar.map((item, index) =>{
                return (
                <div key={index}  onClick = {()=> handleItemClick(index)}  className={index == activeIndex? 'active_item' : ''} id="icon-padding">
                   <Link to={item.path}>
                    <div className={classnames('icon', { active: index === activeIndex })} style={{fontSize:"20px", fontWeight:"bolder"}}> {item.title}</div>
                   </Link>

                </div>
             )
            })}
        </ProfileWrapper>
    
    </div>
  )
}