import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="container border-top pt-3 pb-3 d-flex justify-content-between align-items-center ">
      <p className="name">
        &lt; M<span>orshedy</span> /&gt;
      </p>

      <div>
        <a href="https://github.com/ahmed-morshedy" target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            style={{
              marginRight: "10px",
              color: "#000",
            }}
            size="xl"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/ahmed-morshedy-346b12251/"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ color: "#0a63bc", marginRight: "10px" }}
            size="xl"
          />
        </a>
        <a href="mailto:ahmedmorshedy270@yahoo.com" target="_blank">
          <FontAwesomeIcon icon={faEnvelope} size="xl" />
        </a>
      </div>
    </footer>
  );
}
