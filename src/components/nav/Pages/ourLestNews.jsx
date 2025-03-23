import "./ourLestNews.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import news1 from "../../../assets/new1.jpg";
import news2 from "../../../assets/new2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

import side1 from "../../../assets/side.jpg";
import side2 from "../../../assets/side2.jpg";
import side3 from "../../../assets/side3.jpg";

export default function OurLestNews() {
  return (
    <div className="container">
      <div className="row com2">
        <p className="title-testimoinal">Latest News</p>
        <h3 className="h3-testimonal">Our Lates News</h3>
        <div className="col-md-3 mt-5">
          <Card style={{ width: "18rem" }} className="car-container">
            <Card.Img variant="top" src={news1} className="card-img" />
            <Card.Body>
              <Card.Title className="card-title">
                <img src={side3} className="avatar" alt="avatar" />
                <p>Montaser</p>
                <FontAwesomeIcon icon={faCalendar} className="icon-check" />
                <p>23 mars 2025</p>
              </Card.Title>
              <Card.Text className="card-text">
                In this hospital there are specail surgeon
              </Card.Text>
              <Button className="card-btn">Read More</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 mt-5">
          <Card style={{ width: "18rem" }} className="car-container">
            <Card.Img variant="top" src={news2} className="card-img" />
            <Card.Body>
              <Card.Title className="card-title">
                <img src={side1} className="avatar" alt="avatar" />
                <p>Montaser</p>
                <FontAwesomeIcon icon={faCalendar} className="icon-check" />
                <p>23 mars 2025</p>
              </Card.Title>
              <Card.Text className="card-text">
                In this hospital there are specail surgeon
              </Card.Text>
              <Button className="card-btn">Read More</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 mt-5">
          <Card style={{ width: "18rem" }} className="car-container">
            <Card.Img variant="top" src={side2} className="card-img" />
            <Card.Body>
              <Card.Title className="card-title">
                <img src={side2} className="avatar" alt="avatar" />
                <p>Montaser</p>
                <FontAwesomeIcon icon={faCalendar} className="icon-check" />
                <p>23 mars 2025</p>
              </Card.Title>
              <Card.Text className="card-text">
                In this hospital there are specail surgeon
              </Card.Text>
              <Button className="card-btn">Read More</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
