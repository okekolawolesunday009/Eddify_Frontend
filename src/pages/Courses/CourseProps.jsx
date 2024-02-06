import React from 'react';
import './course.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';

export default function CourseProps({ courses }) {
    return (
        // <Link to={"/courses/lessons"}>
        <Link to={""}>
        <div className='flex flex-col course gap-4 p-8 '>
            <div className='flex items-center gap-4'>
                pics <h1>{courses.title}</h1>
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
