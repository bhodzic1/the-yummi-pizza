import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';


const ImageSlider = () => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/pizza1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>The most delicious pizza in town</h3>
            <p>The highest quality of ingredients.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/pizza2.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>The best chefs</h3>
            <p>In here, you can always try something new.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/pizza4.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Don't wait, contact us, or come here</h3>
            <p>
              Order a pizza with ingredients of your choice.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}

export default ImageSlider;
  