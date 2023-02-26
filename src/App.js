import "./App.css";
import Card from "./components/Card.js";
import ColorSelection from "./components/ColorSelection";
import ColorInputCard from "./components/ColorInputCard.js";

import { useState } from "react";

function App() {
  const [svgNumber] = useState(0);
  const [color, setColor] = useState("#2c3e50");
  const [sizePercentage, setSizePercentage] = useState(50);
  const [strokePercentage, setStrokePercentage] = useState(50);

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

      <body className="flex flex-wrap justify-center w-11/12 mx-auto mt-6 h-min">
        <Card
          type="Size"
          sizePercentage={sizePercentage}
          setSizePercentage={setSizePercentage}
        />
        <Card
          type="Stroke"
          strokePercentage={strokePercentage}
          setStrokePercentage={setStrokePercentage}
        />
        <ColorInputCard color={color} setColor={setColor} />
        <ColorSelection setColor={setColor} />
        <Card search={true} mt={true} maxWidth={true} />
      </body>
    </div>
  );
}

export default App;
