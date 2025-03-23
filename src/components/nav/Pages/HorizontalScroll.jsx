import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HorizontalScroll.css"; // تأكد من وجود ملف Baz.css

const Baz = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    arrows: true, // تأكد من تفعيل الأسهم
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  const cards = [
    {
      image: "https://cdn-icons-png.flaticon.com/512/3448/3448590.png",
      title: "Diagnostics",
      description: "Phasellus venenatis porta rhoncus. Integer et viverra felis."
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png",
      title: "Treatment",
      description: "Phasellus venenatis porta rhoncus. Integer et viverra felis."
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/2965/2965478.png",
      title: "Surgery",
      description: "Phasellus venenatis porta rhoncus. Integer et viverra felis."
    }
  ];

  return (
   <div className="container">
    <div className="row">
        <div className="col-md-6 left-section-2">
            <h3>
                We cover A Big Varity Of Medical Services
            </h3>
            <p>
                We have a wide range of medical services to cater to your needs. Our team of experienced doctors
            </p>
            <button>
                All Services
            </button>
        </div>
        <div className="col-md-6">
        <div className="container-slide mt-5">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="card-box">
            <div className="card-content">
              <div className="icon-container-2">
                <img src={card.image} alt={card.title} className="icon-style" />
              </div>
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.description}</p>
              <button className="view-more-btn">View More</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
        </div>
    </div>
   </div>
  );
};

export default Baz;