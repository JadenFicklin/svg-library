import React, { useState } from 'react';
import check from '../images/check.svg';
import { colors } from '../data/colors';

function ColorSelection({ setColor }) {
    const [selectedColorIndex, setSelectedColorIndex] = useState(-1);

    const handleColorClick = (index) => {
        setSelectedColorIndex(index);
        setColor(colors[index]);
    };
    return (
        <div className="flex flex-wrap content-center justify-center w-11/12 mx-auto mt-4">
            {colors.map((color, index) => (
                <div
                    key={index}
                    style={{
                        backgroundColor: color,
                        border:
                            index === colors.length - 1
                                ? '1px solid #d1d1d1'
                                : undefined
                    }}
                    className="grid m-1 cursor-pointer w-11 h-11 rounded-xl place-content-center hover:opacity-90"
                    onClick={() => handleColorClick(index)}>
                    {selectedColorIndex === index && (
                        <div
                            className="grid w-6 h-6 rounded-full place-content-center"
                            style={{
                                backgroundColor: `rgba(0, 0, 0, 0.2)`
                            }}>
                            <img
                                src={check}
                                alt="check"
                                className="w-[90%] h-[90%] mt-[2px] relative left-[1px] scale-[70%]"
                            />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default ColorSelection;
