import Banner from "../../Banner/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faContactCard,
  faEarth,
  faLocation,
  faMap,
  faMessage,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./contact.css";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";

function Contact() {
  const navigate = useNavigate(); // Hook للتوجيه
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({});

  // دالة للتحقق من الإدخالات
  const validateForm = () => {
    let tempErrors = {};
    if (!name.trim()) tempErrors.name = "The name is required.";
    if (!email.trim()) tempErrors.email = "The email is required.";
    if (!phone.trim()) tempErrors.phone = "The phone number is required.";
    if (!department || department === "Select")
      tempErrors.department = "Please select a department.";
    if (!message.trim()) tempErrors.message = "The message is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // دالة معالجة النموذج
  const FormHandler = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setShowModal(true); // عرض المودال عند نجاح الإدخال
    }
  };

  return (
    <>
      <Banner title="Contact Us" smtitle="Contact Us" />
      <section className="contact-us">
        <div className="container">
          <div className="row">
            {/* القسم الأيسر (النموذج) */}
            <div className="col-lg-6 col-md-6">
              <form onSubmit={FormHandler}>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errors.name && <p className="error">{errors.name}</p>}
                </div>

                <div className="form-control">
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && <p className="error">{errors.email}</p>}
                </div>

                <div className="form-control">
                  <input
                    type="number"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  {errors.phone && <p className="error">{errors.phone}</p>}
                </div>

                <div className="form-control">
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                  >
                    <option value="Select">Select Department</option>
                    <option value="One">One</option>
                    <option value="Two">Two</option>
                    <option value="Three">Three</option>
                  </select>
                  {errors.department && (
                    <p className="error">{errors.department}</p>
                  )}
                </div>

                <div className="form-control">
                  <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  {errors.message && <p className="error">{errors.message}</p>}
                </div>

                <button type="submit">Submit</button>
              </form>
            </div>

            {/* القسم الأيمن (معلومات الاتصال) */}
            <div className="col-lg-6 col-md-6">
              <div className="side">
                <div className="overlay">
                  <h3>Contact Us for Any Information</h3>

                  <div className="info-section">
                    <FontAwesomeIcon icon={faMap} />
                    <strong> Location</strong>
                    <hr />
                    <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                  </div>

                  <div className="info-section">
                    <FontAwesomeIcon icon={faContactCard} />
                    <strong> Email & Phone</strong>
                    <hr />
                    <p>Ahmad@yourdomain.com</p>
                    <p>(+68) 120034509</p>
                  </div>

                  <div className="info-section">
                    <FontAwesomeIcon icon={faEarth} />
                    <strong> Follow Us</strong>
                    <hr />
                    <div className="social-icons">
                      <ul>
                        <li>
                          <a
                            href="https://www.facebook.com/yourdomain"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FontAwesomeIcon
                              icon={faFacebook}
                              className="social-icon facebook"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/yourdomain"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FontAwesomeIcon
                              icon={faInstagram}
                              className="social-icon instagram"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/yourdomain"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FontAwesomeIcon
                              icon={faLinkedin}
                              className="social-icon linkedin"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* مودال التأكيد */}
      {showModal && (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>User Information</Modal.Title>
          </Modal.Header>
          <Modal.Body className="body">
            <p>
              <strong>Name:</strong> {name}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Phone:</strong> {phone}
            </p>
            <p>
              <strong>Department:</strong> {department}
            </p>
            <p>
              <strong>Message:</strong> {message}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="Uptade-model"
              onClick={() => setShowModal(false)}
            >
              Update Info
            </Button>
            <Button className="Go-model" onClick={() => navigate("/Home")}>
              Go to Home
            </Button>
          </Modal.Footer>
        </Modal>
      )}
<div className="container card-container">
  <div className="row">
    <section className="d-flex flex-wrap gap-1">
      <div className="col">
        <Card style={{ width: "17rem"}}>
          <Card.Body>
            <Card.Title className="icon-container">
              <FontAwesomeIcon
                icon={faPhoneAlt}
                className="Card-icon phone"
              />
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted sub-title">
              Contact Number
            </Card.Subtitle>
            <Card.Text>
              <p>+001 897 417 147 <br />+001 897 417 147</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div className="col">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title className="icon-container">
              <FontAwesomeIcon
                icon={faLocation}
                className="Card-icon location"
              />
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted sub-title">
              Address
            </Card.Subtitle>
            <Card.Text>
              <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div className="col">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title className="icon-container">
              <FontAwesomeIcon
                icon={faMessage}
                className="Card-icon message"
              />
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted sub-title">
              Email Address
            </Card.Subtitle>
            <Card.Text>
              <p>Ahmad@yourdoma.com <br />Example@gmail.com</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </section>
  </div>
</div>

    </>
  );
}

export default Contact;
