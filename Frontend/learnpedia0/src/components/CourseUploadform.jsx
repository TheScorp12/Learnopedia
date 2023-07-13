import React, { useState } from 'react'
import classes from '../css/CourseUploadform.module.css'
import Img1 from '../images/pexels-thisisengineering-3862130.jpg'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const CourseUploadform = ({userDetails}) => {

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
    

    async function postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem('jwt')}`
          },
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
      }
    
    
      const submitHandler = (event) => {
        event.preventDefault();
        console.log(formDetails);
        postData(`http://localhost:3001/api/courseupload/${userDetails._id}`, formDetails)
          .then((data) => {
            console.log(data); // JSON data parsed by `data.json()` call
            if (data.error) {
                alert(data.error)
            }else {
                alert("Course uploaded successfully")
                navigate("/educator")
            }
          })
          .catch((error) => {
            console.log(error)
            });
        setFormDetails({});
      }



    return (
        <>
            <div className={classes.body}>
                <div className={classes.container}>
                    <div className={classes.content}>
                        <div className={classes.imageBox}>
                            <img src={Img1} alt="" />
                        </div>
                        <form action="#">
                            <div className={classes.topic}>Create a new Course</div>
                            <div className={classes.inputBox}>
                                <input onChange={changeHandler} name="title" type="text" value={formDetails.title || ""} required />
                                <label>Enter title of the course</label>
                            </div>
                            <div className={classes.inputBox}>
                                <input onChange={changeHandler} type="number" name='price' value={formDetails.price || ""} required />
                                <label>Enter Price of the Course</label>
                            </div>
                            <div className={classes.inputBox}>
                                <select onChange={changeHandler} name="category" value={formDetails.category || ""} aria-label="Default select example" required>
                                    <option value="">Select a Category</option>
                                    <option value="Arts">Arts</option>
                                    <option value="Engineering">Engineering</option>
                                    <option value="Sciences">Sciences</option>
                                    <option value="Computer Science">Computer Science</option>

                                </select>

                            </div>

                            <div  className={classes.messageBox}>
                                <textarea onChange={changeHandler} minlength="125"   name='desc' value={formDetails.desc || ""}>
                                </textarea>
                                <label>Enter description of the course</label>
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

const mapStateToProps = state => {
    return {
        userDetails: state.learnpedia
    }
}


const mapDispatchToProps = dispatch => ({
    // signOut: (userDetails) => {
    //     dispatch(signOut())
    // },
})

export default connect(mapStateToProps, mapDispatchToProps)(CourseUploadform)

// export default CourseUploadform