import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import classes from '../css/CourseUploadform.module.css'
import Img1 from '../images/pexels-thisisengineering-3862130.jpg'


const ModuleUpload = () => {

    const navigate = useNavigate();
    const [formDetails, setFormDetails] = useState({})
    const changeHandler = (event) => {
        let name = event.target.name;
        setFormDetails((prev) => {
            return (
                {
                    ...prev,
                    [name]: event.target.value
                }
            )
        })
    }

    const [courses, setCourses] = useState([])
    const user = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        console.log(user._id);
        fetch(`http://localhost:3001/api/courses/${user._id}`, {
            method: 'GET',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                if (data.error) {
                    alert(data.error)
                }else {
                    setCourses(data)
                }
            })
            .catch((error) => {
                console.log(error)
            });
    }, [])

    async function postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }


    const submitHandler = (event) => {
        event.preventDefault();
        console.log(formDetails);
        postData(`http://localhost:3001/api/moduleupload/${user._id}`, formDetails)
            .then((data) => {
                console.log(data); // JSON data parsed by `data.json()` call
                if (data.error) {
                    alert(data.error)
                } else {
                    alert("Module Created Successfully")
                }
            })
            .catch((error) => {
                console.error(error);
                alert(error)
            });
        setFormDetails({});
        navigate('/educator')
    }





    return (
        <>
            <div style={{ marginTop: "20px" }} className={classes.body}>
                <div className={classes.container}>
                    <div className={classes.content}>
                        <div className={classes.imageBox}>
                            <img src={Img1} alt="" />
                        </div>
                        <form action="#">
                            <div className={classes.topic}>Create a  Module</div>
                            <div className={classes.inputBox}>
                                <input onChange={changeHandler} name="title" type="text" value={formDetails.title || ""} required />
                                <label>Enter title of the Module</label>
                            </div>
                            <div className={classes.inputBox}>
                                <select onChange={changeHandler} name="courseId" value={formDetails.courseId || ""} aria-label="Default select example" required>
                                    <option value="">Select Course</option>
                                    {courses.map(course => {
                                        return (
                                            <option key={course._id} value={course._id}>{course.title}</option>
                                        )
                                    })}


                                </select>

                            </div>

                            <div className={classes.messageBox}>
                                <textarea onChange={changeHandler} minlength="125" name='desc' value={formDetails.desc || ""}>
                                </textarea>
                                <label>Enter description of the Module</label>
                            </div>
                            <div className={classes.inputBox}>
                                <input onClick={submitHandler} type="submit" value="Create" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModuleUpload