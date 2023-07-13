import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import classes from '../css/StudentHome.module.css'
import Card from './Card'


const InstructorHome = ({ userDetails }) => {
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
        <div className={`${classes.continueLearning} ${classes.addGrid}`}>
          <Link to='/educator/courseupload'>
            <div className={classes.add}>
              <div className={classes.addBtn}>Add Course</div>
              <i className='bx bx-plus'></i>
            </div>
          </Link>
          <Link to='/educator/moduleupload'>
            <div className={classes.add}>
              <div className={classes.addBtn}>Add Module</div>
              <i className='bx bx-plus'></i>
            </div>
          </Link>
          <Link to='/educator/lessonupload'>
            <div className={classes.add}>
              <div className={classes.addBtn}>Add Lesson</div>
              <i className='bx bx-plus'></i>
            </div>
          </Link>

        </div>
        <div>
          <div style={{ margin: '20px 0 0 30px' }}><h2>Courses</h2> </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(InstructorHome)