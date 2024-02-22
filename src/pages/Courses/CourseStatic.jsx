import React, { useEffect, useState } from 'react';
import './course.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';
import { FaPlay } from "react-icons/fa";

export default function CourseStatic({ courses }) {
    const [course_id, setCourse_id] = useState("")
    const [title, setTitle] = useState("")
    const [progress, setProgress] = useState(10)
    console.log(courses)
   
    
    useEffect(() => {
    if(courses)
       setCourse_id(courses.id)
        setTitle(courses.title)
      
    })

    console.log(course_id)
    return (
        // <Link to={"/courses/lessons"}>
        <Link to={`/course/${course_id}/lessons`}>
        <div className='flex flex-col course gap-4 p-8 '>
            <div className='flex items-center gap-4 justify-around'>
            <div className='flex justify-center items-center gap-4'>
                <img className='image rounded-2xl' 
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="card-image"
                /> 
                <h1>{title}</h1>
            </div>
            <div className='ml-[40px]'>
                 <FaPlay className='bg-green-500' />

            </div>
            </div>

            <div className="progress-container">
                <div className="progress-bar" style={{ width: `${progress}%` }}>
                    {progress}%
                </div>
            </div>
        </div>
        </Link>
    );
}
