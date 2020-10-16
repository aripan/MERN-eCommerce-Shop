import React from "react";
import { Carousel, Image } from "react-bootstrap";

const ProductCarousel = () => {
  return (
    <Carousel pause="hover" className="bg-dark">
      <Carousel.Item>
        <Image src="/images/discount.jpg" fluid />
        <Carousel.Caption className="carousel-caption">
          <h4>WEEKEND DISCOUNT 25% on more than &euro;150</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="/images/transportation.jpg" fluid />
        <Carousel.Caption className="carousel-caption">
          <h4>Buy more than &euro;100, Shipping price is &euro;0.00</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="/images/playstation.jpg" fluid />
        <Carousel.Caption className="carousel-caption">
          <h4>Top rated product only at (&euro;399.99)</h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarousel;
