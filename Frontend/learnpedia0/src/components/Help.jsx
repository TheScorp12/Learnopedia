import { useEffect } from "react";
import { useState } from "react";
import classes from "../css/Help.module.css";
import Faq from '../images/R.png'


const Help = (props) => {

  const [vr, setvr] = useState(true);
  const [vr1, setvr1] = useState(true);
  const [vr2, setvr2] = useState(true);
  const [vr3, setvr3] = useState(true);
  const [vr4, setvr4] = useState(true);


  return (
    <>
      <div className={`${classes.helpbody}`} style={{
        // backgroundImage: 'url(' + Faq + ')' ,
        // backgroundSize: "cover",
        // height: "100vh",
        //   color: "#f5f5f5"
      }}>

        <h2 className={`${classes.helpheading}`} style={{ align: "left" }}>FAQs</h2>
        <button className={`${classes.accordion}`} onClick={() => setvr(prev => !prev)}>How do i know the right courses for me?</button>
        <div className={vr ? ` ${classes.panel} ${classes.none}` : `${classes.panel} `}>
          <p>
            Decide what interests you. List the fields of study that interest you, and
            come up with a list of courses you would consider studying based on these
            interests. Add the topics that you were most interested in. Check online
            about the courses you are interested in and find out about the career
            prospects and the other information. Check out the course content. To
            avoid making mistakes, make sure you review the course outline of the
            course(s) you want to apply for. Have a look at the subjects you must
            undertake and the types of learning, assignments and examination tasks
            involved.
          </p>
        </div>

        <button className={`${classes.accordion}`} onClick={() => setvr1(prev => !prev)}>
          Do i get a certificate for every course i take?
        </button>
        <div className={vr1 ? ` ${classes.panel} ${classes.none}` : `${classes.panel} `} >
          <p>Yes, You will.</p>
        </div>

        <button className={`${classes.accordion}`} onClick={() => setvr2(prev => !prev)}>
          Do i get a refund if the course isnt worth my money?
        </button>
        <div className={vr2 ? ` ${classes.panel} ${classes.none}` : `${classes.panel} `}>
          <p>
            No you dont get the refund back. But you need not worry about it because
            the course which we provide on our website will definetly worth it.
          </p>
        </div>

        <button className={`${classes.accordion}`} onClick={() => setvr3(prev => !prev)}>
          Will i have a life time access to courses i purchase?
        </button>
        <div className={vr3 ? ` ${classes.panel} ${classes.none}` : `${classes.panel} `}>
          <p>yes!</p>
        </div>

        <button className={`${classes.accordion}`} onClick={() => setvr4(prev => !prev)}>What are your payment options?</button>
        <div className={vr4 ? ` ${classes.panel} ${classes.none}` : `${classes.panel} `}>
          <p>UPIs, debit card, credit card, net banking.</p>
        </div>

        <br />
        <br />
        <form>
          <label htmlFor="w3review">Questions:</label><br />
          <textarea
            id="w3review"
            name="w3review"
            style={{ fontSize: "15pt" }}
            rows="5"
            cols="49"
            placeholder="Any questions..."
          >
          </textarea>

          <br />
          <input
            type="submit"
            style={{
              fontSize: "large",
              backgroundColor: "rgb(13, 110, 253)",
              color: "antiquewhite"
            }}
            value=" Submit "
          />
        </form>

        {/* <script>
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("help-active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  </script> */}

        {/* <div className={classes.imgright}>
          <img src={Faq}></img>
        </div> */}
      </div>

    </>
  )
}

export default Help;
