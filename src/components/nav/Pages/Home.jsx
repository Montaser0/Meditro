import HeaderImg from "../../../assets/doctor.png";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faDroplet,
  faSquare,
  faSyringe,
  faTruckMedical,
} from "@fortawesome/free-solid-svg-icons";
import add from "../../../assets/add.png";
import seq2 from "../../../assets/2.png";
import side1 from "../../../assets/side.jpg";
import side2 from "../../../assets/side2.jpg";
import side3 from "../../../assets/side3.jpg";
import { WorkingProcess } from "./WorkingProcess";
import { Appoinment } from "./Appoinment";
import Baz from './HorizontalScroll'
import Testimoinal from './Testimoinal'
import OurLestNews from './ourLestNews'
export default function Home() {
  return (
    <header>
      <div className="container header-container">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 container-2">
            <h5>We Provide All Health Care Solution</h5>
            <h2>Protect Your Health And Take Care Of Your Health</h2>
            <button>
              <a href="#">Read More</a>
            </button>
            <br />
            <img src={add} alt="Add Icon" className="add main-image" />
            <br />
            <img src={seq2} alt="Sequence Icon" className="seq2 main-image" />
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="header-box">
              <img src={HeaderImg} alt="Main Doctor" className="main-image" />
              <p className="faSquare">
              <FontAwesomeIcon icon={faSquare}/>
              </p>
            </div>
          </div>
        </div>
      </div>

      <main>
        <div className="container">
          <div className="row">
            {/* القسم الأيسر (الصور) */}
            <div className="col-md-6 col-lg-6 col-sm-12 right-section">
              <div className="row ">
                <div className="col-6">
                  <img src={side1} alt="Doctors" className="side1" />
                </div>
                <div className="col-6">
                  <img src={side2} alt="Doctor" className="side2" />
                </div>
                <div className="col-6">
                  <img src={side3} alt="Family" className="side3" />
                </div>
                <div className="col-6">
                  <div className="text-center num-cotainer">
                    <h1 className="num">20+</h1>
                    <p className="num-down">Year Experience</p>
                  </div>
                </div>
              </div>
            </div>

            {/* القسم الأيمن (المحتوى النصي) */}
            <div className="col-md-6 col-lg-6 col-sm-12 left-section">
              <h2>
                The Great Place Of Medical Hospital Center
              </h2>
              <p>
                We provide the special tips and advice for health care treatment
                and high level of best technology involve in our hospital.
              </p>

              <div className="services-container">
                <div className="service-box emergency">
                  <FontAwesomeIcon
                    icon={faTruckMedical}
                    size="2x"
                    className="service-icon"
                  />
                  <span className="service-title">Emergency Help</span>
                </div>
                <div className="service-box doctors">
                  <FontAwesomeIcon
                    icon={faBed}
                    size="2x"
                    className="service-icon"
                  />
                  <span className="service-title">Qualified Doctors</span>
                </div>
                <div className="service-box professionals">
                  <FontAwesomeIcon
                    icon={faDroplet}
                    size="2x"
                    className="service-icon"
                  />
                  <span className="service-title">Best Professionals</span>
                </div>
                <div className="service-box treatment">
                  <FontAwesomeIcon
                    icon={faSyringe}
                    size="2x"
                    className="service-icon"
                  />
                  <span className="service-title">Medical Treatment</span>
                </div>
              </div>

              <div className="mt-4 ">
                <button className="bottun-2">Read More</button>
              </div>
            </div>
          </div>
        </div>
        <WorkingProcess />
        <Appoinment />
        <Baz />
        <Testimoinal />
        <OurLestNews />
      </main>
    </header>
  );
}
