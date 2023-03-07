import React, { useState } from "react";
import { svgObjects } from "../svg-library/svgs";
import useSvgZustand from "../state/useSvgZustand";
import c from "classnames";

function SvgCard() {
  const { size, stroke, initialColor } = useSvgZustand((state) => ({
    size: state.size,
    stroke: state.stroke,
    initialColor: state.initialColor,
  }));

  const [box, setBox] = useState(null);

  return (
    <div className="grid w-11/12 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 py-4 h-min mb-[10vh]">
      {svgObjects(size, stroke, initialColor).map((svg, index) => (
        <div
          key={index}
          className={c(
            "relative pt-3 pb-12 hover:pt-2 hover:pb-[52px] duration-200 text-center bg-white rounded-md h-min light-gray-shadow place-content-center cursor-pointer"
          )}
          style={{
            outlineColor: box === index ? initialColor : "#ffffff",
            outlineWidth: "2px",
            outlineStyle: "solid",
          }}
          onMouseEnter={() => setBox(index)}
          onMouseLeave={() => setBox(null)}
        >
          <div className="mx-auto mt-2 duration-300 w-min">{svg.svg}</div>
          <p className="absolute bottom-4 w-[100%] left-1/2 -ml-[50%] text-sm text-gray-700">
            {svg.title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default SvgCard;
