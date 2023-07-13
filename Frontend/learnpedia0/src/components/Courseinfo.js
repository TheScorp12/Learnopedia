
import React from 'react'
import '../css/Courseinfo.css'
// import Nav from './Nav'
import img from '../images/img.PNG'

const Courseinfo = () => {
  const styleobj = {
    height: "200px",
  }
  const sty = {
    height: "60px",
  }
  return (
    <>
      <div className="row-courseinfo">
        <div className="main-courseinfo">
          <h2>Programming with Python : HandsOn
            Introduction for Beginners</h2>
          <h5>Uploaded/Last updated on: Dec 7, 2017</h5>
          {/* <div className="fakeimg" style={styleobj}>Image</div> */}
          <p>Some text..</p>
          <h2>Star Rating</h2>

          <img className="stars" src={img} alt=""></img>
          <img className="stars" src={img} alt=""></img>
          <img className="stars" src={img} alt=""></img>
          <img className="stars" src={img} alt=""></img>
          {/* <img  className="stars" src="images/orangestar.svg" alt=""></img>
  <img  className="stars" src="images/orangestar.svg" alt=""></img>
  <img  className="stars" src="images/orangestar.svg" alt=""></img>
  <img className="stars" src="images/star.svg" alt=""></img> */}


          <div className="card">
            <div className="card-header">
              WHAT YOU WILL LEARN
            </div>
            <div className="row">
              {/*  <div className="col-sm-6"> */}
              <div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  </div>
                </div>
              </div>
              {/* <div className="col-sm-6"> */}
              <div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  </div>
                </div>
              </div>
              {/* <div className="col-sm-6">  */}
              <div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                {/*<div>*/}
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            {/* <div className="card text-white bg-info mb-3"> */}
            {/* <div>
              <h5 className="card-header">About the course</h5>
              <div className="card-body">
                <h5 className="card-title">Overview</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum doloremque quasi et nemo vel totam. Tempore, ipsam. Repellat tempore blanditiis nihil possimus fugiat aliquam aliquid iure quaerat incidunt reprehenderit quis illum nam saepe, ab laboriosam hic sit quibusdam, magni eveniet? Fugit necessitatibus cum laboriosam delectus maxime aperiam id, perferendis placeat ipsam exercitationem a dolor dolorum magni ipsa aspernatur pariatur fugiat tenetur modi vitae. Reiciendis, ducimus pariatur ipsum ex repudiandae repellat neque nulla rem iste debitis ea consequatur voluptatum nemo possimus cumque ullam, totam, quos veniam quam esse sequi! Quibusdam vero inventore consequuntur autem natus saepe necessitatibus porro nostrum atque quam.</p>
              </div>
            </div>
            <h3>About the course</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa nam, iusto itaque reiciendis voluptatem ab, error at quaerat accusamus perferendis similique nisi magni dignissimos dicta asperiores est dolores earum? Unde ea assumenda, ducimus, sapiente, nulla laudantium quam exercitationem soluta voluptatem tenetur possimus aut modi doloremque natus blanditiis iusto! Nesciunt, est?</p> */}
            {/* </div> */}
          </div>

          <div>
            <div className="card">
              <h5 className="card-header">Syllabus</h5>
              <div className="card-body">
                <h5 className="card-title">Module 0</h5>
                <p className="card-text"> <div>
                  <ol>
                    <li>lesson 0</li>
                    <li>lesson 1</li>
                    <li>lesson 2</li>
                  </ol>
                </div></p>
                <h5 className="card-title">Module 1</h5>
                <p className="card-text"> <div>
                  <ol>
                    <li>lesson 0</li>
                    <li>lesson 1</li>
                    <li>lesson 2</li>
                  </ol>
                </div></p>
              </div>
            </div>
          </div>

          <div>
            {/* <div className="card text-white bg-info mb-3"> */}
            <div>
              <h5 className="card-header">About the Insturctor</h5>
              <div className="card-body">
                <h5 className="card-title">Overview</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum doloremque quasi et nemo vel totam. Tempore, ipsam. Repellat tempore blanditiis nihil possimus fugiat aliquam aliquid iure quaerat incidunt reprehenderit quis illum nam saepe, ab laboriosam hic sit quibusdam, magni eveniet? Fugit necessitatibus cum laboriosam delectus maxime aperiam id, perferendis placeat ipsam exercitationem a dolor dolorum magni ipsa aspernatur pariatur fugiat tenetur modi vitae. Reiciendis, ducimus pariatur ipsum ex repudiandae repellat neque nulla rem iste debitis ea consequatur voluptatum nemo possimus cumque ullam, totam, quos veniam quam esse sequi! Quibusdam vero inventore consequuntur autem natus saepe necessitatibus porro nostrum atque quam.</p>
              </div>
            </div>
            <h3>About the course</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa nam, iusto itaque reiciendis voluptatem ab, error at quaerat accusamus perferendis similique nisi magni dignissimos dicta asperiores est dolores earum? Unde ea assumenda, ducimus, sapiente, nulla laudantium quam exercitationem soluta voluptatem tenetur possimus aut modi doloremque natus blanditiis iusto! Nesciunt, est?</p>
          </div>


          {/* <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          <br></br>
          <h2>TITLE HEADING</h2>
          <h5>Title description, Sep 2, 2017</h5>
          <div className="fakeimg" style={styleobj}>Image</div>
          <p>Some text..</p>
          <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p> */}
        </div>
        <div className="side-courseinfo">
          <h2>Unlimited access at</h2>
          <h5>Rs 999/-</h5>
          <div className="card card-shadow">
            <div className="card-header card-image">
              <img src="images/ffsdimg1.jpg"></img>
            </div>
            <div className="card-body">
              <h5>This course includes:</h5>
              <ul>
                <li>Sharable certificate</li>
                <li>100% online course</li>
                <li>Flexible Schedule</li>
                <li>Appoximately 4 months to complete</li>
              </ul>
            </div>
            {/* <div className="card-footer">
            <button type="button" className="btn btn-outline-primary btn-lg">Enroll Now</button>
        </div> */}
          </div>
          <div>
            <h3>Course is offered by:</h3>
            <h5>Harvard University</h5>
          </div>
          {/* <p>Some text about me in culpa qui officia deserunt mollit anim..</p> */}
          {/* <h3>More Text</h3>
          <p>Lorem ipsum dolor sit ame.</p>
          <div className="fakeimg" style={sty}>Image</div><br></br>
          <div className="fakeimg" style={sty}>Image</div><br></br>
          <div className="fakeimg" style={sty}>Image</div> */}
        </div>
      </div>


    </>
  )
}

export default Courseinfo




