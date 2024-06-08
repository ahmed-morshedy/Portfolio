import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import style from "./css.module.css";
function Cards(props) {
  return (
    <Card className={style.card}>
      <a href={props.link} target="_blanc">
        {" "}
        <Card.Img variant="top" src={props.img} className={style.image} />
      </a>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        <div className="my-3">
          {props.tech.map((data, id) => {
            return (
              <span
                key={id}
                id={id}
                className="me-2 mb-1 border border-secondary-subtle p-1 rounded bg-secondary-subtle fs-6"
              >
                {data}
              </span>
            );
          })}
        </div>

        <Button variant="outline-primary" href={props.link} target="_blank">
          <FontAwesomeIcon icon={faLink} /> live preview
        </Button>
      </Card.Body>
    </Card>
  );
}
Cards.propTypes = {
  tech: PropTypes.array,
  link: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};
export default Cards;
