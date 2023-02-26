import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import searchIcon from "../images/search.svg";

function Card({
  type,
  search,
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
      } relative w-full h-16 bg-white rounded-md gray-shadow max-w-[400px] m-3`}
    >
      {search ? (
        <div className="flex items-center w-11/12 h-full mx-auto ">
          <img
            src={searchIcon}
            alt="Search"
            className="block float-left w-2/12 h-6 opacity-80"
          />
          <input
            type="text"
            placeholder="search"
            className="w-10/12 outline-none"
          />
        </div>
      ) : (
        <>
          <p className="absolute top-5 left-5 w-[50px] ">{type}</p>
          <div className="relative w-5/12 mx-auto my-3 top-3">
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
          <p className="absolute top-5 right-5 w-[50px] ">
            {type === "Size" ? sizePercentage : strokePercentage}px
          </p>
        </>
      )}
    </div>
  );
}

export default Card;
