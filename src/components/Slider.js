import React, { useState } from "react";
import { IMGS } from "../utils/constants";
import BtnSlider from "./BtnSlider";
const Slider = () => {
  const [images, setImages] = useState(IMGS);
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== images.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === images.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(images.length);
    }
  };
  return (
    <div className="container-slider">
      {images.map((item, index) => (
        <div
          className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          key={item.id}
        >
          <img src={item.url} />
        </div>
      ))}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
    </div>
  );
};

export default Slider;
