import React from 'react'
import BackImg from "../images/vid.mp4"
import classes from "../css/Home.module.css"

const Home = () => {
  return (
    <>
      <div >
        <div className='home-body'>
          <video className={classes.myVideo} src={BackImg} loop autoPlay muted >
          </video>
          <div className={classes.content}>
            <h1>Learnpedia</h1>
            <p>Welcome to the education domain</p>
            <a href="/signup" ><button className={classes.homeBtn}>Join for free</button></a>
            <a href="/signup" ><button className={classes.homeBtn}>Try Learnpedia for business</button></a>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home