import Button from "react-bootstrap/Button";
/* eslint-disable no-unused-vars */
import robot from "../assets/Robot.jpg";
import avater from "../assets/9440461.jpg";
import reactlogo from "../assets/react.png";
import jslogo from "../assets/js.png";
import htmllogo from "../assets/html-5.png";
import csslogo from "../assets/css-3.png";
import gitlogo from "../assets/social.png";
import githublogo from "../assets/github.png";
import bootlogo from "../assets/Bootstrap_logo.svg.png";
import style from "./style.module.css";

function Home() {
  return (
    <>
      <div
        className="container d-flex align-items-center justify-content-between py-5 mt-5 "
        id="home"
      >
        <div>
          <h3 className=" mb-1">
            Hi There! <span className={style.wave}>👋🏻</span>{" "}
          </h3>
          <h2>I&apos;M Ahmed Morshedy,</h2>
          <p>
            A Passionate{" "}
            <span className="text-primary fw-medium">
              &lt;Frontend Web Development /&gt;
            </span>{" "}
            with 1 year <br /> experience creating user friendly websites
          </p>
          <Button variant="primary" href="#contact">
            Book a Date
          </Button>
        </div>
        <div className={style.img}>
          <img src={robot} alt="robot"></img>
        </div>
      </div>

      <div className="py-4 container d-flex align-items-center " id="about">
        <div className={style.avatar}>
          <img src={avater} alt="avatar" className="rounded-pill " />
        </div>
        <div>
          <p className={style.title}>About me</p>
          <h2 className="text-primary ">Transforming Visions into</h2>
          <h2 className="text-primary ">exceptional portfolios</h2>
          <p className={style.about}>
            My journey into frontend development began with a fascination for
            blending creativity with technology. Over the year, I&apos;ve honed
            my skills in HTML, CSS, and JavaScript, constantly staying updated
            with the latest trends and technologies in the rapidly evolving
            landscape of web development.
          </p>
        </div>
      </div>

      <div
        className="d-flex flex-column align-items-center container justify-content-center py-5 "
        id="skills"
      >
        <p className={style.title}>Skills</p>
        <h2 className="text-primary ">I am really good at :</h2>
        <div className={style.logo}>
          <img src={htmllogo} alt="logo" />
          <img src={csslogo} alt="logo" />
          <img src={jslogo} alt="logo" />
          <img src={reactlogo} alt="logo" />
        </div>
      </div>

      <div className="d-flex flex-column align-items-center container justify-content-center pb-5 ">
        <p className={style.title}>Tools</p>
        <h2 className="text-primary ">I am really good at :</h2>
        <div className={style.logo}>
          <img src={bootlogo} alt="logo" />
          <img src={gitlogo} alt="logo" />
          <img src={githublogo} alt="logo" />
        </div>
      </div>
    </>
  );
}

export default Home;
