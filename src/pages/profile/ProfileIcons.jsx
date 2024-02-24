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
                    <div 
                       className={`${classnames('icon px-4 py-2  shadow-lg hover:shadow-lg focus:shadow-lg text-center active:shadow-lg transition duration-150 ease rounded-sm',
                        { active: index === activeIndex })}`} 
                       style={{fontSize:"20px", fontWeight:"bolder", display:"flex", alignItems:"center",  width:"130px", justifyContent:"", gap:"15px"}}>
                      <p className='left'>{item.icon} </p>
                      <p className="text-center">{item.title}</p>
                      </div>
                   </Link>

                </div>
             )
            })}
        </ProfileWrapper>
    
    </div>
  )
}