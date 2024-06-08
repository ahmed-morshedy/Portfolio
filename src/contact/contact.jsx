import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  return (
    <div
      className="py-4 container d-flex align-items-center justify-content-center  flex-column "
      id="contact"
    >
      <p className="title">Contact</p>

      <div
        className="contact d-flex align-items-center  mt-3 p-3 border rounded"
        style={{ backgroundColor: "#f6f6f6" }}
      >
        <div className="fs-4">Start a project </div>
        <div className="mx-4 fs-6">
          interesred in working together? We should queue up a time to chat .
          I&apos;ll buy the tea
        </div>
        <a
          href="mailto:ahmedmorshedy270@yahoo.com"
          className="p-2 border rounded"
          style={{ backgroundColor: "#ededed" }}
        >
          {" "}
          <FontAwesomeIcon icon={faHandshake} className="me-2" />
          Let&apos;s do this{" "}
        </a>
      </div>
    </div>
  );
}
//color: "#0d6efd"
