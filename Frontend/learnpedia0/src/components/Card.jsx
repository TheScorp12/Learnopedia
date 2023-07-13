import React from 'react'
import Image from '../images/pexels-pixabay-276452.jpg'
import classes from '../css/Card.module.css'
import { connect } from 'react-redux'


const Card = (props) => {
    const { title, price, categorydb, desc, _id } = props
    const courseId = _id
    let fdesc = desc.substr(0, 150)
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
        const userDetails = JSON.parse(localStorage.getItem('user'))
        console.log(userDetails);
        postData(`http://localhost:3001/api/enroll/${userDetails._id}/${courseId}`,)
            .then((data) => {
                console.log(data); // JSON data parsed by `data.json()` call
                // throw error even if response status 500
                
                if (data.error) {
                    alert(data.error)
                } else {
                    alert("Course enrolled successfully")
                }
                if (data.error == "Already enrolled") {
                    alert("Already enrolled, go to profile to check your enrolled courses")
                }
            })
            .catch((error) => {
                console.log(error)
            });
    }

    return (
        <>
            <div className={classes.wrapper}>
                <div className={classes.right}>
                    <div className={classes.logo}>{title}</div>
                    <div className={classes.stars}>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>
                    <div className={classes.about}>
                        <p>{fdesc}</p>
                    </div>
                    <button onClick={submitHandler} className={classes.button}>
                        <h2  className={classes.price}>Enroll Now</h2>
                        <h2>₹{price}</h2>
                    </button>
                </div>
                <div style={{
                    "background": `url(${Image}) no-repeat`, "backgroudSize": "cover", "backgroundPosition": "center", "height": "100%",
                    "width": "50%", "borderRadius": "0 5px 5px 0"
                }} className={classes.left} >
                    <ul>
                        <li>Flexible</li>
                        <li>Life time access</li>
                        <li>Taught by professionals</li>
                        <li>Doubt assistance</li>
                        <li>@just ₹{price}</li>
                    </ul>
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


const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Card)