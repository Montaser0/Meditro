import { Card, Button } from "react-bootstrap";
import "./WorkingProcess.css";
import { useNavigate } from "react-router-dom";
export const WorkingProcess = () => {
  const navigate = useNavigate();
  return (
    <div className="working-process py-5">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-8">
            <h2 className="mb-4">How we works?</h2>
            <p>
              Our working process is designed to ensure that every project is
              completed to the highest standard
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-3">
            <Card className="process-card">
              <Card.Body>
                <div className="process-number">01</div>
                <Card.Title className="process-title">
                  Make Appointment
                </Card.Title>
                <Card.Text className="process-text">
                  It is a long established fact that a reader will be distracted
                  by the dsfdsfrf.
                </Card.Text>
                <Button className="process-btn">View More</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3 mb-4">
            <Card className="process-card active-card">
              <Card.Body>
                <div className="process-number">02</div>
                <Card.Title className="process-title">
                  Take Treatment
                </Card.Title>
                <Card.Text className="process-text">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page.
                </Card.Text>
                <Button className="process-btn">View More</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3 mb-4">
            <Card className="process-card ">
              <Card.Body>
                <div className="process-number">03</div>
                <Card.Title className="process-title">Registration</Card.Title>
                <Card.Text className="process-text">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page.
                </Card.Text>
                <Button
                  className="process-btn"
                  onClick={() => navigate("/Contact")}
                >
                  View More
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
