import React from "react";
import leftArrow from "../assets/images/left-arrow.svg";
import rightArrow from "../assets/images/right-arrow.svg";

const BtnSlider = ({ direction, moveSlide }) => {
  return (
    <button
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
      onClick={moveSlide}
    >
      <img src={direction == "next" ? rightArrow : leftArrow} />
    </button>
  );
};

export default BtnSlider;
