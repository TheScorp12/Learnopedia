import React from 'react';
import  { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import classes from '../css/StudentProfile.module.css'
import Image from '../images/loginimg2.jpg'
import { connect } from 'react-redux'


const StudentProfile = ({ userDetails })=>{
    const [courses, setCourses] = useState([])
    console.log(userDetails);
    useEffect( () => {
      fetch(`http://localhost:3001/api/enrolled/${JSON.parse(localStorage.getItem('user'))._id}`, {
        method: 'get',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem('jwt')}`
        }
      })
          .then((response) => response.json())
          .then((data) => {
            if (data == null || data.error) {
                console.log(data.error)
                setCourses([])
            } else {
                setCourses(data)
            }
          });
  }, [])
    return (
        <>
        <div className={classes.body}>
        <div className={classes.studentprofilebody}>
            <section className={classes.userprofile}>
                <h1 className={classes.heading}>User Profile</h1>
                <div className={classes.userprofilecontainer}>
                <div className={classes.userdetails}>
                  <div className={classes.user}>
                    <img src={Image} alt=""/>
                    <h2>{userDetails.firstname}</h2>
                    <p>{userDetails.role}</p>
                    <p>{userDetails.email}</p>
                    {/* <div className={classes.userbuttons}>
                    <a href="/usprofile" className={classes.userinlinebtn}>follow</a>
                    <a href="/usprofile" className={classes.userinlinebtn}>like</a>
                    </div> */}
                    </div>
                </div>
                <div className={classes.info}>
                    <div className={classes.user}>
                        <div className={classes.rowdetails}>
                        <h6>FIRST NAME</h6>
                        <h6>{userDetails.firstname} </h6>
                        </div>
                        <div className={classes.rowdetails}>
                        <h6>LAST NAME</h6>
                        <h6>{userDetails.lastname}</h6>
                        </div>
                        <div className={classes.rowdetails}>
                        <h6>CONTACT DETAILS</h6>
                        <h6>{userDetails.phoneno}</h6>
                        </div>
                        <div className={classes.rowdetails}>
                        <h6>NUMBER OF COURSES ENROLLED</h6>
                        <h6>{courses.length}</h6>
                        </div>
                        <div className={classes.rowdetails}>
                        <h6>NUMBER OF ACTIVE LEARNING DAYS</h6>
                        <h6>24</h6>
                        </div>
                        <div className={classes.rowdetails}>
                        <h6>PLACE OF STUDY</h6>
                        <h6>IIIT SRICITY</h6>
                        </div>
                        <Link  to={`/usprofile`} className={classes.inlinebtn}>update profile</Link> 
                    {/* <img src={Image} alt=""/>
                    <h3>shaikh anas</h3>
                    <p>student</p>
                    <a href="/usprofile" className={classes.inlinebtn}>update profile</a> */}
                    </div>
                </div>
                </div>
            </section>
            <div className={classes.courses}>
                <h1 className={classes.heading}>Your courses</h1>
                <div className={classes.boxcontainer}>
                    {
                        courses.map(course =><div  className={classes.box} key={course._id}>
                            <div className={classes.thumb}>
                            <img src={Image} alt="" />
                                {/* <span>10 videos</span> */}
                            </div>
                            <Link  to={`#`} className={classes.title}>{course.title}</Link>
                            <h3 className={classes.universityname}>{course.categorydb}</h3>
                            <h5 className={classes.description}>{course.desc}</h5>
                            <div className={classes.coursetype}>
                                <h5>Course</h5>
                                <h5>Price: {course.price}</h5> 
                            </div>
                            <div className={classes.enroll}><Link  to={`/courses/${course._id}`} className={classes.inlinebtn}>Continue</Link></div>
                            {/* <a href="" className={classes.inlinebtn}>view playlist</a> */}
                        </div>)
                    }

                </div>
            </div>
         </div>
        </div>
        </>
    )
}

const mapStateToProps = state => {
    console.log(state);
    return {
      userDetails: state.learnpedia
    }
  }
  
  
  const mapDispatchToProps = dispatch => ({})
  
  export default connect(mapStateToProps, mapDispatchToProps)(StudentProfile)