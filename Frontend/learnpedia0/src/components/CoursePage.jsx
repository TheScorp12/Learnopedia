import React from 'react'
import { useParams } from 'react-router-dom'
import '../css/CoursePage.css'


const CoursePage = () => {
    const { courseid } = useParams();
    return (
        <>
            <div className='coursepage-body'>CoursePage of id: {courseid}</div> 
        </>
    )
}

export default CoursePage