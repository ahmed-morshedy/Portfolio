/* eslint-disable no-unused-vars */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import robot from "../assets/Robot.jpg";
import avater from "../assets/9440461.jpg";
import reactlogo from "../assets/react.png";
import jslogo from "../assets/js.png";
import htmllogo from "../assets/html-5.png";
import csslogo from "../assets/css-3.png";
import gitlogo from "../assets/social.png";
import githublogo from "../assets/github.png";
import bootlogo from "../assets/Bootstrap_logo.svg.png";
import fontlogo from "../assets/font-awesome-logo-3010FE2434-seeklogo.com.png";
import style from "./style.module.css";

function Home() {
  return (
    <>
      {/* Intro Start*/}
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
          <a href="#contact" className={style.btn} data-content=" Book a date">
            Book a date
          </a>
        </div>
        <div className={style.img}>
          <img src={robot} alt="robot" decoding="auto"></img>
        </div>
      </div>
      {/* Intro End*/}

      {/* About ME Start*/}
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
      {/* About ME End*/}

      {/* Tools Start*/}
      <div
        className="d-flex flex-column align-items-center container justify-content-center py-5 "
        id="skills"
      >
        <p className={style.title}>Skills and Tools</p>
        <h2 className="text-primary ">I am really good at :</h2>
        <div className={style.logo}>
          <Container>
            <Row className={style.col}>
              <Col className="d-flex justify-content-center">
                <img src={htmllogo} alt="logo" />
              </Col>
              <Col className="d-flex justify-content-center  ">
                <img src={csslogo} alt="logo" />
              </Col>
              <Col className="d-flex justify-content-center ">
                <img src={jslogo} alt="logo" />
              </Col>{" "}
              <Col className="d-flex justify-content-center  ">
                <img src={reactlogo} alt="logo" />
              </Col>
              <Col className="d-flex justify-content-center  ">
                <img src={bootlogo} alt="logo" />
              </Col>
              <Col className="d-flex justify-content-center  ">
                <img src={gitlogo} alt="logo" />
              </Col>{" "}
              <Col className="d-flex justify-content-center ">
                <img src={githublogo} alt="logo" />
              </Col>
              <Col className="d-flex justify-content-center  ">
                <img src={fontlogo} alt="logo" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Home;
