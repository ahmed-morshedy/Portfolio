import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import emailjs from "emailjs-com";

export default function Contact() {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      console.log(message);
      sendEmail(form);
    }

    setValidated(true);
  };

  const sendEmail = (form) => {
    // Replace with your EmailJS template ID and user ID
    emailjs
      .sendForm(
        "service_hoo3ca8",
        "template_yj9pz4t",
        form,
        "CowEBnjtfM0J6o5Du"
      )
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        setEmail("");
        setName("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
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
          <Form.Control
            type="text"
            placeholder="Full Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <InputGroup className="mb-3">
          <Form.Control
            as="textarea"
            aria-label="Large"
            placeholder="Yor Massage"
            style={{ resize: "none", width: "290px", height: "100px" }}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
