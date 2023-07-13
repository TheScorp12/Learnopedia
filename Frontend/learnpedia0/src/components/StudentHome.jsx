import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import classes from '../css/StudentHome.module.css'
import Image from '../images/pexels-thisisengineering-3862130.jpg'
import Card from './Card'


const StudentHome = ({ userDetails }) => {
  const [courses, setCourses] = useState([])
  useEffect( () => {
    fetch('http://localhost:3001/api/courses')
        .then((response) => response.json())
        .then((data) => {
          setCourses(data)
        });
}, [])


  return (
    <div>
      {userDetails ? <div>
        <div className={`${classes.welcome} ${classes.typewriter}`}>
          <h3>Hi {userDetails.firstname}, </h3>
          <h1>Welcome to Learnpedia!</h1>
        </div>
        <div className={classes.continueLearning}>
          <span className={classes.left}>Continue Learning </span>
          <Link to={'/sprofile'}><span className={classes.right}><button className={classes.btnShome}> MY ENROLLMENTS <i className='bx bx-right-arrow-alt'></i></button> </span></Link>
          <div className={classes.recentCourse}>
            <img src={Image} alt="" />
            <div className={classes.recentDetails}>
              <p>Course</p>
              <h2>Fundamentals of Full stack Development</h2>
              <div className={classes.progressBar}>
                <div></div>
              </div>
            </div>
          </div>

        </div>
        <div>
          <div style={{margin: '20px 0 0 30px'}}><h2>Courses</h2> </div>
          <div className={classes.coursesBody}>
            <div className={classes.cardGrid}>
              {courses.map(course => {
                return (
                  <Card key={course._id} {...course} />
                )
              })}

            </div>
          </div>
        </div>
      </div> : <div></div>}

    </div>
  )
}

const mapStateToProps = state => {
  return {
    userDetails: state.learnpedia
  }
}


const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(StudentHome)