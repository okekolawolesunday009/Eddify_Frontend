import React from 'react';
import './course.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';

export default function CourseDB({ course}) {
    return (
        // <Link to={"/courses/lessons"}>
        <Link to={""}>
        <div className='flex coursedb gap-4 p-8 '>
            <div className='flex items-center gap-4'>
                pics <h1>{course.title}</h1>
            </div>

        </div>
        </Link>
    );
}
