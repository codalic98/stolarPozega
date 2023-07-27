import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./corouselPocetna.css";
const CorouselPocetna = () => {
  return (
    <div>
      <Carousel data-bs-theme="ligth" style={{ marginTop: "-15px" }}>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="https://rnb.scene7.com/is/image/roomandboard/HH_BdrRtr_S1021_0623?size=1600,1600&scl=1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="https://rnb.scene7.com/is/image/roomandboard/HH_BdrRtr_S1021_0623?size=1600,1600&scl=1"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="https://rnb.scene7.com/is/image/roomandboard/HH_BdrRtr_S1021_0623?size=1600,1600&scl=1"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CorouselPocetna;
