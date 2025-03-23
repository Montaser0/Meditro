import "./Testimoinal.css";
import Slider from "react-slick";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRightAlt } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import doc1 from "../../../assets/doc1.jpg";
import doc2 from "../../../assets/doc2.jpg";
import doc3 from "../../../assets/doc3.jpg";
import doc4 from "../../../assets/doc4.jpg";
import doc5 from "../../../assets/doc5.jpg";

export default function Testimoinal() {
  // تصحيح بيانات الصور: تمرير المتغير مباشرةً دون تغليف داخل كائن
  const doctors = [
    { src: doc1, alt: "Doctor 1" },
    { src: doc2, alt: "Doctor 2" },
    { src: doc3, alt: "Doctor 3" },
    { src: doc4, alt: "Doctor 4" },
    { src: doc5, alt: "Doctor 5" },
  ];

  let sliderRef = useRef(null);
  
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  return (
    <div className="container">
      <div className="row">
        <p className="title-testimoinal">Testimonail</p>
        <h3 className="h3-testimonal">
          See What Are The Patients Saying About Us
        </h3>
        <div className="col-md-6">
          <div className="hexagon-container">
            {/* الشكل السداسي في المنتصف */}
            <div className="hexagon-center"></div>
  
            {/* توزيع صور الأطباء حول الشكل */}
            {doctors.map((doctor, index) => {
              // حساب الزاوية لكل صورة
              const angle = (360 / doctors.length) * index;
              return (
                <div
                  className="hexagon-item"
                  style={{ "--angle": `${angle}deg` }}
                  key={index}
                >                  
                <img src={doctor.src} alt={doctor.alt} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-md-6">
          <div className="slider-container">
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
            >
              <div key={1}>
                <Card className="card-testimonial">
                  <Card.Body className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sint explicabo consequuntur esse totam. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Deleniti, commodi vel odio
                    temporibus non, consectetur nostrum explicabo atque quam
                    provident iste fuga aliquam suscipit corrupti cumque amet
                    placeat architecto magnam.
                    <br />
                    <h3 className="card-h3">Montaser</h3>
                    <br />
                    <h4 className="card-h4">Patient</h4>
                    <FontAwesomeIcon icon={faQuoteRightAlt} />
                  </Card.Body>
                </Card>
              </div>
              <div key={2}>
                <Card className="card-testimonial">
                  <Card.Body className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga voluptates, labore aperiam dignissimos voluptas maiores
                    atque nesciunt illo enim blanditiis quos alias numquam
                    consequuntur reiciendis cum eligendi. Veniam, et est? Sint
                    explicabo consequuntur esse totam.
                    <br />
                    <h3 className="card-h3">Montaser</h3>
                    <br />
                    <h4 className="card-h4">Patient</h4>
                    <FontAwesomeIcon icon={faQuoteRightAlt} />
                  </Card.Body>
                </Card>
              </div>
              <div key={3}>
                <Card className="card-testimonial">
                  <Card.Body className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint animi eos nostrum totam, hic perspiciatis voluptates
                    iste nihil ipsum perferendis ipsa. Aperiam eum voluptatem
                    illo ducimus, eveniet expedita accusantium ut. Sint
                    explicabo consequuntur esse totam.
                    <br />
                    <h3 className="card-h3">Montaser</h3>
                    <br />
                    <h4 className="card-h4">Patient</h4>
                    <FontAwesomeIcon icon={faQuoteRightAlt} />
                  </Card.Body>
                </Card>
              </div>
              <div key={4}>
                <Card className="card-testimonial">
                  <Card.Body className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sint explicabo consequuntur esse totam. Lorem ipsum dolor sit
                    amet consectetur, adipisicing elit. Aliquam laborum laudantium
                    modi, nam sapiente minus officia blanditiis reprehenderit odit
                    impedit, itaque obcaecati ullam molestiae eos tempore similique
                    fuga pariatur totam! Sint explicabo consequuntur esse totam.
                    <br />
                    <h3 className="card-h3">Montaser</h3>
                    <br />
                    <h4 className="card-h4">Patient</h4>
                    <FontAwesomeIcon icon={faQuoteRightAlt} />
                  </Card.Body>
                </Card>
              </div>
              <div key={5}>
                <Card className="card-testimonial">
                  <Card.Body className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sint explicabo consequuntur esse totam. Lorem ipsum dolor sit
                    amet consectetur, adipisicing elit. Aliquam laborum laudantium
                    modi, nam sapiente minus officia blanditiis reprehenderit odit
                    impedit, itaque obcaecati ullam molestiae eos tempore similique
                    fuga pariatur totam! Sint explicabo consequuntur esse totam.
                    <br />
                    <h3 className="card-h3">Montaser</h3>
                    <br />
                    <h4 className="card-h4">Patient</h4>
                    <FontAwesomeIcon icon={faQuoteRightAlt} />
                  </Card.Body>
                </Card>
              </div>
            </Slider>
            <div
              style={{
                textAlign: "center",
                margin: "20px",
                fontSize: "20px",
                marginTop: "-70px",
              }}
            >
              <button
                className="button"
                onClick={previous}
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "15px",
                  marginRight: "10px",
                  width: "100px",
                  height: "40px",
                  boxShadow: "none",
                  backgroundColor: "#F17732",
                  border: "none",
                  opacity: "0.8",
                }}
              >
                Previous
              </button>
              <button
                className="button"
                onClick={next}
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "15px",
                  marginRight: "10px",
                  width: "100px",
                  height: "40px",
                  boxShadow: "none",
                  backgroundColor: "#F17732",
                  border: "none",
                  opacity: "0.8",
                }}
              >
                Next
              </button>
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
