import React, { useEffect, useState } from 'react'
import Table from './Table'
import classes from "../css/Admin.module.css"
import { Link } from 'react-router-dom'


const Admin = () => {
  const { body, column, left, right, section } = classes

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/api/users/${JSON.parse(localStorage.getItem('user'))._id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        accept: 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data)
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
          <Table users={users} ></Table>
        </div>
      </div>
    </>
  )
}

export default Admin