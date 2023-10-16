import Carousel from "react-bootstrap/Carousel";
import grooming from "../../Images/grooming.webp";
import haircut from "../../Images/haircut.jpeg";
import hairwash from "../../Images/hairwash.jpeg";

import "./Slider.css";

function Slider() {
  return (
    <>
      <div className="slider">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img className="images" src={hairwash} alt="First slide" />
            <Carousel.Caption>
              <h5>Hairwash</h5>
              <p>Get a thorough bath for your dog.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="images" src={haircut} alt="Second slide" />
            <Carousel.Caption>
              <h5>Haircut</h5>
              <p>Beat the heat and get your dog a fresh haircut.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="images" src={grooming} alt="Third slide" />
            <Carousel.Caption>
              <h5>Grooming</h5>
              <p>Get your dog's nails trim.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Slider;
