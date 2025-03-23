import logo from "../../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import face from "../../../assets/face.png";
import inst from "../../../assets/instgram.png";
import linked from "../../../assets/linked.png";
import Twit from "../../../assets/twit.png";
import "../footer/footer.css";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <img src={logo} alt="" className="logo" />
            <p>
              Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore
              smod tempor incididunt ut labore et.
            </p>

            <div className="footer-contact">
              <div className="footer-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="footer-text">
                <h6>Contact Us</h6>
                <h4>+123-456-7890</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <h2>Quick Links</h2>
            <ul>
              <li>About us</li>
              <li>Our Team</li>
              <li>Services</li>
              <li>Booking</li>
              <li>Blog</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h2>Our Service</h2>
            <ul>
              <li>Dental Care</li>
              <li>Cardiac Clinic</li>
              <li>Massege Therapy</li>
              <li>Cardiology</li>
              <li>Precise Diagnosis</li>
              <li>Abmbulance Services</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h2>Subcribe</h2>
            <form action="">
              <input type="Email" placeholder="Email Adress"/>
              <button type="submit">Subscribe</button>
            </form>
            <ul className="Social">
              <li>
                <a href="">
                  <img src={face} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={inst} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={linked} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={Twit} alt="" />
                </a>
              </li>
            </ul>
          </div>
          
          <div className="footer-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <p>Copyright &copy; 2021 All rights reserved | This template is made with</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
