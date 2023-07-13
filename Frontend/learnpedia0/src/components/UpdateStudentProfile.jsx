import React from 'react';
import { useState } from 'react'
import classes from '../css/UpdateStudentProfile.module.css';

const UpdateStudentProfile = () => {

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
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem('jwt')}`
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
    if (formDetails.cnfpassword !== formDetails.password) {
      alert("password mush match confirm password")
      return false
    }

    postData(`http://localhost:3001/api/user/${JSON.parse(localStorage.getItem('user'))._id}`, formDetails)
    setFormDetails({});
  }

  return (
    <>
      <div className={classes.body}>
        <section className={classes.studentprofilebody}>
          <section className={classes.formcontainer}>
            <form action="#" onSubmit={submitHandler} encType="multipart/form-data">
              <h3>update profile</h3>
              <p>update firstname</p>
              <input onChange={changeHandler} type="text" name="firstname" placeholder="firstname" maxLength="50" className={classes.box} />
              <p>update lastname</p>
              <input onChange={changeHandler} type="text" name="lastname" placeholder="lastname" maxLength="50" className={classes.box} />
              <p>new password</p>
              <input onChange={changeHandler} type="password" name="password" placeholder="enter your new password" className={classes.box} />
              <p>confirm password</p>
              <input onChange={changeHandler} type="password" name="cnfpassword" placeholder="confirm your new password" className={classes.box} />
              <p>phone number</p>
              <input onChange={changeHandler} type="text" name="phoneno" placeholder="enter your phone number" className={classes.box} />
              {/* <p>update pic</p>
               <input onChange={changeHandler} type="file" accept="image/*" className={classes.box}/> */}
              <input onChange={changeHandler} type="submit" value="update profile" name="submit" className={classes.btn}></input>
            </form>
          </section>
        </section>
      </div>
    </>
  )
}

export default UpdateStudentProfile