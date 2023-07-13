import React, { useEffect, useState } from 'react'
import classes from "../css/Admin.module.css"
import CoursesTable from './CoursesTable'
import { Link } from 'react-router-dom'

const Admin = () => {
  const { body, column, left, right, section } = classes

  const [courses, setCourses] = useState([])

  useEffect( () => {
    fetch('http://localhost:3001/api/courses')
        .then((response) => response.json())
        .then((data) => {
          setCourses(data)
        });
}, [])

  return (
    <>

      <div className={body}>
        <div className={`${column} ${left}`}>
          <Link style={{ "textDecoration": "none" }} to={"/admin"}> <div className={section}>Users</div></Link>
          <Link style={{ "textDecoration": "none" }} to={"/admin/courses"}> <div className={section}>Courses</div></Link>
        </div>
        <div className={`${column} ${right}`}>
          <CoursesTable courses={courses} ></CoursesTable>
        </div>
      </div>
    </>
  )
}

export default Admin