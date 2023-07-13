import React, { useState } from 'react'
import Image from '../images/loginimg2.jpg'
import '../css/Loginform.css'

import { connect } from 'react-redux'
import { signIn } from '../action/learnpedia'
import { useNavigate } from 'react-router-dom'


const Loginform = ({ signIn }) => {
  let navigate = useNavigate()
  const [formDetails, setFormDetails] = useState({ email: "", password: "" })

  async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

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

  const submitHandler = async (event) => {
    event.preventDefault();
    if (formDetails.email.length <= 0 || formDetails.password.length <= 0) {
      alert("enter email and password")
      return
    }
    postData('http://localhost:3001/api/login', formDetails)
      .then((data) => {
        if (data.user) {
          const userData = data.user
          signIn(data)
          if (userData.role === 'student') {
            navigate('/shome')
          } else if(userData.role === 'educator') {
            navigate('/educator')
          }else if(userData.role === 'admin') {
            navigate('/admin')
          }
        }else if(data.error) {
          alert(data.error)
        }
    });
    

    setFormDetails({ email: "", password: "" });

  }

  return (
    <div className="lbody">
      <div className="lcontainer">
        <div className="cover">
          <div className="front">
            <img src={Image} alt="" />
            <div className="text">
              <span className="text-1">Every new course is a <br /> new journey</span>
              <span className="text-2">Let's get started</span>
            </div>
          </div>
        </div>
        <div className="forms">
          <div className="form-content">
            <div className="login-form">
              <div className="title">Login</div>
              <form action="#" onSubmit={submitHandler}>
                <div className="input-boxes">
                  <div className="input-box">
                    <input onChange={changeHandler} name='email' type="text" placeholder="Enter your email" value={formDetails.email} required />
                  </div>
                  <div className="input-box">
                    <input onChange={changeHandler} name='password' type="password" placeholder="Enter your password" value={formDetails.password} required />
                  </div>
                  <div className="text"><a href="#">Forgot password?</a></div>
                  <div className="button input-box">
                    <input type="submit" value="Submit" />
                  </div>
                  <div className="text sign-up-text">Don't have an account? <label htmlFor="flip">Sigup now</label></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state);
  return {
    userDetails: state.userDetails
  }
}

const mapDispatchToProps = dispatch => ({
  signIn: (userDetails) => {
    dispatch(signIn(userDetails))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Loginform);