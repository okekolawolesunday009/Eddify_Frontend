import React from 'react';
import './course.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';

export default function CourseProps({ courses }) {
    return (
        // <Link to={"/courses/lessons"}>
        <Link to={""}>
        <div className='flex flex-col course gap-4 p-8 '>
            <div className='flex items-center gap-4'>
            <img className='image' 
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
            /> 
            <h1>{courses.title}</h1>
            </div>

            <div className="progress-container">
                <div className="progress-bar" style={{ width: `${courses.progress}%` }}>
                    {courses.progress}%
                </div>
            </div>
        </div>
        </Link>
    );
}
