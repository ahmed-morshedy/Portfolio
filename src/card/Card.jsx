import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import style from "./css.module.css";
function Cards(props) {
  return (
    <Card className={style.card}>
      <Card.Img variant="top" src={props.img} className={style.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        {/* <Card.Text>{props.text}</Card.Text> */}
        <div className="my-3">
          Technology :{" "}
          <span className=" mx-3 ">
            {props.tech.map((data, id) => {
              return (
                <span
                  key={id}
                  id={id}
                  className="me-2 mb-1 border border-secondary-subtle p-1 rounded bg-secondary-subtle "
                >
                  {data}
                </span>
              );
            })}
          </span>
        </div>

        <Button variant="outline-primary" href={props.link} target="_blank">
          Demo :<FontAwesomeIcon icon={faLink} />
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
