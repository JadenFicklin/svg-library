import './App.css';
import Card from './components/Card.js';
import ColorSelection from './components/ColorSelection';
import ColorInputCard from './components/ColorInputCard.js';
import useSvgZustand from './state/useSvgZustand';
import SvgCard from './components/SvgCard';
import { svgObjects } from './svg-library/svgs';
import c from 'classnames';

import { useEffect, useState } from 'react';

function App() {
  const [color, setColor] = useState('#2c3e50');
  const [sizePercentage, setSizePercentage] = useState(50);
  const [strokePercentage, setStrokePercentage] = useState(30);

  const { initialColor, setSize, setStroke, setInitialColor } = useSvgZustand(
    (state) => ({
      size: state.size,
      stroke: state.stroke,
      initialColor: state.initialColor,
      setSize: state.setSize,
      setStroke: state.setStroke,
      setInitialColor: state.setInitialColor
    })
  );

  useEffect(() => {
    setSize(sizePercentage);
    setStroke(strokePercentage);
    setInitialColor(color);
  }, [color, sizePercentage, strokePercentage]); // eslint-disable-line

  return (
    <div
      className={c(
        ' w-full min-h-screen',
        initialColor === '#ffffff' ? 'bg-[#0f0f0f]' : 'bg-[#fdfdff]'
      )}>
      <header>
        <h1
          className={c(
            'font-semibold text-3xl text-[#2c3e50] text-center pt-20',
            initialColor === '#ffffff' ? 'text-white' : 'text-[#2c3e50]'
          )}>
          SVG Library
        </h1>
        <p
          className={c(
            'w-10/12 text-[#2c3e50] mx-auto text-center mt-3',
            initialColor === '#ffffff' ? 'text-white' : 'text-[#2c3e50]'
          )}>
          {svgObjects().length} Open source free SVG icons. Highly customizable.
        </p>
      </header>

      <div className="flex flex-wrap justify-center mx-auto mt-6 w-11/12 h-min">
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
        <SvgCard />
      </div>
    </div>
  );
}

export default App;
