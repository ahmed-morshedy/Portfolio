/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Cards from "../card/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import bondi from "../assets/bondi-home.png";

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
          width: "fit-content",
          padding: "5px 7px",
          backgroundColor: " #e2e3e5",
          borderRadius: "4px",
          textAlign: "center",
          marginBlock: "10px",
        }}
      >
        Projects
      </div>
      <Row className="g-4 " xs={1} md={3}>
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
        </Col>{" "}
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
        </Col>{" "}
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
        </Col>{" "}
      </Row>
    </div>
  );
};

export default Work;
