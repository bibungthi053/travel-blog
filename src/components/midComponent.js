import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./midComponent.css";

export default class midComponent extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="slider-container ">
        <h2> images</h2>
        <Slider {...settings}>
          <div>
            <img src="https://placekitten.com/600/300" alt="Slide 1" />
          </div>
          <div>
            <img src="https://placekitten.com/601/300" alt="Slide 2" />
          </div>
          <div>
            <img src="https://placekitten.com/602/300" alt="Slide 3" />
          </div>
          <div>
            <img src="https://placekitten.com/603/300" alt="Slide 4" />
          </div>
          <div>
            <img src="https://placekitten.com/608/300" alt="Slide 5" />
          </div>
          <div>
            <img src="https://placekitten.com/605/300" alt="Slide 6" />
          </div>
        </Slider>
      </div>
    );
  }
}
