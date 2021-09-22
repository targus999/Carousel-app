import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";
import Ratio from 'react-bootstrap/Ratio';

const Slides = () => {
  return (
    <div style={{ width: 700, height: 450 }}>
      <Carousel fade >
        <Carousel.Item>
        <Ratio aspectRatio="16x9">
          <img
            className=" "
            src="https://i.pinimg.com/originals/61/e7/8b/61e78b08a8dd18779132812218a9f2a8.jpg"
          />
          </Ratio>
        </Carousel.Item>
        <Carousel.Item>
        <Ratio aspectRatio="16x9">
          <img
            className=" "
            src="https://wallpaperaccess.com/full/109666.jpg"
          />
          </Ratio>
        </Carousel.Item>
        <Carousel.Item>
        <Ratio aspectRatio="16x9">
          <img
            className=" "
            src="https://www.teahub.io/photos/full/20-207621_1080p-pc-wallpapers-hd-desktop-wallpapers-cool-images.jpg"
          />
          </Ratio>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Slides;
