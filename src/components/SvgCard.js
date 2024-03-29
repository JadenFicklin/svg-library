import React, { createRef, useEffect, useRef, useState } from 'react';
import { svgObjects } from '../svg-library/svgs';
import useSvgZustand from '../state/useSvgZustand';
import c from 'classnames';
import searchIcon from '../images/search.svg';

function SvgCard() {
    const svgRef = useRef(null);
    const [setSvgString] = useState();
    const [searchTerm, setSearchTerm] = useState('');
    const [clickedIndex, setClickedIndex] = useState(null);

    useEffect(() => {
        const svgElement = svgRef?.current;
        if (!svgElement) return;

        const elementString = svgElement.outerHTML;
        setSvgString(elementString);
    }, [svgRef?.current]);

    const { size, stroke, initialColor } = useSvgZustand((state) => ({
        size: state.size,
        stroke: state.stroke,
        initialColor: state.initialColor
    }));

    const [box, setBox] = useState(null);

    const handleSvgClick = (index) => {
        const svgElement = svgRefs.current[index]?.current;
        if (!svgElement) return;

        const elementString = svgElement.outerHTML;
        navigator.clipboard.writeText(elementString);
        setClickedIndex(index);
        setTimeout(() => {
            setClickedIndex(null);
        }, 3000);
    };

    const svgRefs = useRef(
        Array.from({
            length: svgObjects(size, stroke, initialColor).length
        }).map(() => createRef())
    );

    const [inputSelected, setInputSelected] = useState(false);

    const filteredSvgs = svgObjects(size, stroke, initialColor).filter((svg) =>
        svg.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div
                id="main-card-for-color"
                className={c(
                    ` relative w-full h-14 bg-white rounded-md gray-shadow max-w-[400px] m-3`
                )}>
                <div
                    className={c(
                        'flex items-center w-full rounded-md h-full duration-500',
                        inputSelected ? 'search-border' : ''
                    )}>
                    <img
                        src={searchIcon}
                        alt="Search"
                        className="block float-left w-16 h-6 opacity-80"
                    />
                    <input
                        type="text"
                        placeholder="search"
                        className="w-full pl-2 outline-none"
                        onFocus={() => setInputSelected(true)}
                        onBlur={() => setInputSelected(false)}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="grid w-11/12 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 py-4 h-min mb-[10vh]">
                {filteredSvgs.map((svg, index) => (
                    <div
                        key={index}
                        className={c(
                            'relative pt-3 pb-12 hover:pt-2 hover:pb-[52px] duration-200 text-center rounded-md h-min light-gray-shadow place-content-center cursor-pointer',
                            initialColor === '#ffffff'
                                ? ' bg-zinc-900'
                                : 'bg-white'
                        )}
                        style={{
                            outlineColor:
                                box === index ? initialColor : '#ffffff',
                            outlineWidth: '2px',
                            outlineStyle: 'solid'
                        }}
                        onMouseEnter={() => setBox(index)}
                        onMouseLeave={() => setBox(null)}
                        onClick={() => handleSvgClick(index)}>
                        <div className="mx-auto mt-2 duration-300 w-min">
                            {React.cloneElement(svg.svg, {
                                ref: svgRefs.current[index]
                            })}
                        </div>
                        <p
                            className={c(
                                'absolute bottom-4 w-[100%] left-1/2 -ml-[50%] text-sm ',
                                initialColor === '#ffffff'
                                    ? 'text-white'
                                    : 'text-gray-700'
                            )}>
                            {clickedIndex === index ? '🎉 copied' : svg.title}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default SvgCard;
