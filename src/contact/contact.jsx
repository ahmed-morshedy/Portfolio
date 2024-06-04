import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
export default function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    if (validated) {
      console.log("true");
    }
  };
  return (
    <div
      className="py-4 container d-flex align-items-center justify-content-center  flex-column "
      id="contact"
    >
      <p className="title">Contact</p>
      <div className="mt-3">
        <a href="https://github.com/ahmed-morshedy" target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            style={{
              marginRight: "10px",
              color: "#000",
              height: "50px",
            }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/ahmed-morshedy-346b12251/"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ color: "#0a63bc", height: "50px" }}
          />
        </a>
      </div>
      <Form
        className="my-3 d-flex justify-content-center flex-column"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Full Name" required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="Email" required />
        </Form.Group>

        <InputGroup className="mb-3">
          <Form.Control
            as="textarea"
            aria-label="Large"
            placeholder="Yor Massage"
            style={{ resize: "none", width: "290px", height: "100px" }}
            required
          />
        </InputGroup>

        <button className="Cbtn" data-content="Send" type="submit">
          Send
        </button>
      </Form>
    </div>
  );
}
//color: "#0d6efd"
