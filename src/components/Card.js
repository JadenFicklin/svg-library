import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import searchIcon from "../images/search.svg";
import c from "classnames";

function Card({
  type,
  maxWidth,
  sizePercentage,
  setSizePercentage,
  strokePercentage,
  setStrokePercentage,
}) {
  const handleSliderChange = (value) => {
    setSizePercentage(value);
  };
  const handleSliderChangeStroke = (value) => {
    setStrokePercentage(value);
  };

  return (
    <div
      className={`${
        maxWidth && `max-w-[800px] `
      } relative w-full h-14 bg-white rounded-md gray-shadow max-w-[400px] m-3`}
    >
      <p className="absolute top-4 left-5 w-[50px] ">{type}</p>
      <div className="relative w-5/12 mx-auto my-3 top-[10px]">
        {type === "Size" ? (
          <Slider
            railStyle={{ backgroundColor: "gray" }}
            trackStyle={{ backgroundColor: "black" }}
            handleStyle={{
              border: "none",
              boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)",
              backgroundColor: "white",
              opacity: 1,
            }}
            value={sizePercentage}
            onChange={handleSliderChange}
          />
        ) : (
          <Slider
            railStyle={{ backgroundColor: "gray" }}
            trackStyle={{ backgroundColor: "black" }}
            handleStyle={{
              border: "none",
              boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)",
              backgroundColor: "white",
              opacity: 1,
            }}
            value={strokePercentage}
            onChange={handleSliderChangeStroke}
          />
        )}
      </div>
      <p className="absolute top-4 right-5 w-[50px] ">
        {type === "Size" ? sizePercentage : strokePercentage / 20}px
      </p>
    </div>
  );
}

export default Card;
