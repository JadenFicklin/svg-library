import "./App.css";
import { useState } from "react";
import { colors } from "./data/colors";
import check from "./images/check.svg";

function App() {
  const [svgNumber] = useState(0);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [color, setColor] = useState("#2c3e50");

  const handleColorClick = (index) => {
    setSelectedColorIndex(index);
    setColor(colors[index]);
  };

  return (
    <div className="bg-[#fdfdff] w-full min-h-screen">
      <header>
        <h1 className="font-semibold text-3xl text-[#2c3e50] text-center pt-20">
          SVG Library
        </h1>
        <p className="w-10/12 text-[#2c3e50] mx-auto text-center mt-3">
          {svgNumber} Open source free SVG icons. Highly customizable. No
          attribution required. For commercial use.
        </p>
      </header>

      <div className="w-11/12 mx-auto mt-6 h-min ">
        {/* size card */}
        <div className="relative w-full h-16 bg-white rounded-md gray-shadow">
          <p className="absolute top-5 left-5">Size</p>
          <p className="h-1 bg-gray-700 self-center rounded-full absolute w-[50%] xs:w-[54%] left-1/2 -ml-[27%] md:w-[70%] md:-ml-[35%] top-8"></p>
          <p className="absolute top-5 right-5">44px</p>
        </div>
        {/* stroke card */}
        <div className="relative w-full h-16 mt-3 bg-white rounded-md gray-shadow">
          <p className="absolute top-5 left-5">Stroke</p>
          <p className="h-1 bg-gray-700 self-center rounded-full absolute w-[46%] xs:w-[54%] xs:-ml-[27%] left-1/2 -ml-[23%] md:w-[70%] md:-ml-[35%] top-8"></p>
          <p className="absolute top-5 right-5">1.5px</p>
        </div>
        {/* Color card */}
        <div className="relative flex items-center justify-center w-full h-16 mt-3 bg-white rounded-md gray-shadow">
          <div className="w-[150px] h-[60%]  relative">
            <p className="absolute top-[5px] left-0">Color</p>
            <div
              className={` border-2 rounded-md h-full w-[100px] absolute right-0 grid place-content-center`}
              style={{ borderColor: color }}
            >
              <input
                type="text"
                placeholder={color}
                className="w-full h-full pl-1 ml-3 bg-transparent focus:outline-none"
              />
            </div>
          </div>
        </div>
        {/* colors selection */}
        <div className="flex flex-wrap content-center justify-center w-11/12 mx-auto mt-4">
          {colors.map((color, index) => (
            <div
              key={index}
              style={{ backgroundColor: color }}
              className="w-11 h-11 m-1 rounded-xl border-[1px] border-gray-300 grid place-content-center"
              onClick={() => handleColorClick(index)}
            >
              {selectedColorIndex === index && (
                <div
                  className="grid w-6 h-6 rounded-full place-content-center"
                  style={{
                    backgroundColor: `rgba(0, 0, 0, 0.2)`, // 10% darker than the background color
                  }}
                >
                  <img
                    src={check}
                    alt="check"
                    className="w-[90%] h-[90%] mt-[1px]"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
