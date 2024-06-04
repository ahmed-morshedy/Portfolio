/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Cards from "../card/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import bondi from "../assets/bondi-home.png";
import kasper from "../assets/kasper.png";
import dashbord from "../assets/dashbord.png";
import restaurant from "../assets/restaurant.png";
import elzero from "../assets/elzero.png";
import toDo from "../assets/toDo.png";
import date from "../assets/date.png";

const Work = () => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://api.github.com/users/ahmed-morshedy/repos"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch repos");
        }
        const data = await response.json();
        setRepos(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div
      className="container my-3 d-flex flex-column align-items-center"
      id="work"
    >
      <div
        style={{
          marginBlock: "30px",
        }}
        className="title"
      >
        Projects
      </div>
      <Row className="g-4 " xs={1} md={3}>
        {/*Dashboard*/}
        <Col className="d-flex justify-content-center ">
          <Cards
            tech={["HTML", "CSS", "JS"]}
            link={"https://ahmed-morshedy.github.io/Dashboard/"}
            img={dashbord}
            title={"Dashboard"}
            text={
              "The Bondi template is known for its clean and modern aesthetic, typically featuring bold typography, minimalistic layouts, and vibrant colors. "
            }
          />
        </Col>
        {/*Elzero-Template*/}
        <Col className="d-flex justify-content-center ">
          <Cards
            tech={["HTML", "CSS", "JS"]}
            link={"https://ahmed-morshedy.github.io/Elzero_Template/"}
            img={elzero}
            title={"Elzero-Template"}
            text={
              "The Bondi template is known for its clean and modern aesthetic, typically featuring bold typography, minimalistic layouts, and vibrant colors. "
            }
          />
        </Col>
        {/*Bondi-Template*/}
        <Col className="d-flex justify-content-center ">
          <Cards
            tech={["HTML", "CSS", "JS"]}
            link={"https://ahmed-morshedy.github.io/Bondi/"}
            img={bondi}
            title={"Bondi-Template"}
            text={
              "The Bondi template is known for its clean and modern aesthetic, typically featuring bold typography, minimalistic layouts, and vibrant colors. "
            }
          />
        </Col>
        {/*Restaurant*/}
        <Col className="d-flex justify-content-center ">
          <Cards
            tech={["HTML", "CSS"]}
            link={"https://ahmed-morshedy.github.io/restaurant/"}
            img={restaurant}
            title={"Restaurant"}
            text={
              "The Bondi template is known for its clean and modern aesthetic, typically featuring bold typography, minimalistic layouts, and vibrant colors. "
            }
          />
        </Col>{" "}
        {/*Date reminder*/}
        <Col className="d-flex justify-content-center ">
          <Cards
            tech={["React"]}
            link={"https://main--date-reminder-morshedy.netlify.app/"}
            img={date}
            title={"Date reminder"}
            text={"Date reminder with react "}
          />
        </Col>
        {/*To DO*/}
        <Col className="d-flex justify-content-center ">
          <Cards
            tech={["React"]}
            link={"https://to-do-reactproject.netlify.app/"}
            img={toDo}
            title={"To-Do List"}
            text={"S  imple to do list with react "}
          />
        </Col>
        {/*Kasper*/}
        <Col className="d-flex justify-content-center ">
          <Cards
            tech={["HTML", "CSS"]}
            link={"https://ahmed-morshedy.github.io/Kasper-Template/"}
            img={kasper}
            title={"Kasper-Template"}
            text={
              "The Bondi template is known for its clean and modern aesthetic, typically featuring bold typography, minimalistic layouts, and vibrant colors. "
            }
          />
        </Col>
      </Row>
    </div>
  );
};

export default Work;
