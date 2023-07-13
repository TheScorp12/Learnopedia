import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import classes from '../css/CourseUploadform.module.css'
import Img1 from '../images/pexels-thisisengineering-3862130.jpg'


const LessonUpload = () => {

    const navigate = useNavigate();
    const [formDetails, setFormDetails] = useState({})
    const [courses, setCourses] = useState([])
    const user = JSON.parse(localStorage.getItem('user'))
    const [modules, setModules] = useState([])
    const [file, setFile] = useState(null);


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

    useEffect(() => {
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
                } else {
                    setCourses(data)
                }
            })
            .catch((error) => {
                console.log(error)
            });
    }, [])

    const onCourseChange = (event) => {
        let courseid = event.target.value;
        fetch(`http://localhost:3001/api/module/${user._id}/${courseid}`, {
            method: 'GET',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            }
        })
            .then((response) => response.json())
            .then((data) => {
                setModules(data.modules)
                console.log(data.modules);
            }).catch((error) => {
                console.log(error)
            })
    }

    const getModuleList = (event) => {
        changeHandler(event);
        onCourseChange(event);
    }

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        console.log(e.target.files[0]);
    };
    
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append('video', file);
    //     axios.post('http://localhost:5000/upload', formData)
    //       .then(res => console.log(res.data))
    //       .catch(err => console.error(err));
    //   };


    async function postData(url = '', data ) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`,
            },
            body: data // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }


    const submitHandler = (event) => {
        event.preventDefault();
        const fd = new FormData();
        if (!formDetails.title || !formDetails.courseId || !formDetails.moduleId || !file) {
            alert("Please fill all the fields")
            return
        }
        fd.append('title', formDetails.title);
        fd.append('courseId', formDetails.courseId);
        fd.append('moduleId', formDetails.moduleId);
        fd.append('video', file);
        fd.append('desc', formDetails.desc);
        postData(`http://localhost:3001/api/lesson/${user._id}/${formDetails.courseId}`, fd)
            .then((data) => {
                console.log(data); // JSON data parsed by `data.json()` call
                if (data.error) {
                    alert(data.error)
                } else {
                    alert("Lesson uploaded Successfully")
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
                            <div className={classes.topic}>upload a Lesson</div>
                            <div className={classes.inputBox}>
                                <input onChange={changeHandler} name="title" type="text" value={formDetails.title || ""} required />
                                <label>Enter title of the Lesson</label>
                            </div>
                            <div className={classes.inputBox}>
                                <select onChange={getModuleList} name="courseId" value={formDetails.courseId || ""} aria-label="Default select example" required>
                                    <option value="">Select Course</option>
                                    {courses.map(course => {
                                        return (
                                            <option key={course._id} value={course._id}>{course.title}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className={classes.inputBox}>
                                <select onChange={changeHandler} name="moduleId" value={formDetails.moduleId || ""} aria-label="Default select example" required>
                                    <option value="">Select Module</option>
                                    {modules.map(module => {
                                        return (
                                            <option key={module._id} value={module._id}>{module.title}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className={classes.messageBox}>
                                <textarea onChange={changeHandler} minlength="125" name='desc' value={formDetails.desc || ""}>
                                </textarea>
                                <label>Enter description of the Lesson</label>
                            </div>
                            <div className={classes.inputBox}>
                                <input onChange={handleFileChange} style={{ padding: '15px' }} type="file" id="myfile" name="video" required/>
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

export default LessonUpload