import React, { createRef, useEffect, useRef, useState } from 'react';
import { svgObjects } from '../svg-library/svgs';
import useSvgZustand from '../state/useSvgZustand';
import c from 'classnames';
import searchIcon from '../images/search.svg';
import { reactIconObjects } from '../data/reactIconList';
import { GenIcon } from 'react-icons/lib';

function SvgCard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [clickedIndex, setClickedIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [box, setBox] = useState(null);
  const [inputSelected, setInputSelected] = useState(false);
  const ICONS_PER_PAGE = 50;

  const { size, stroke, initialColor } = useSvgZustand((state) => ({
    size: state.size,
    stroke: state.stroke,
    initialColor: state.initialColor
  }));

  const svgRefs = useRef(
    Array.from({
      length: svgObjects(size, stroke, initialColor).length
    }).map(() => createRef())
  );

  // Merge custom SVGs and react-icons
  const allIcons = [
    ...svgObjects(size, stroke, initialColor).map((obj, i) => ({
      ...obj,
      type: 'custom',
      ref: svgRefs.current[i]
    })),
    ...reactIconObjects.map((obj) => ({
      ...obj,
      type: 'react-icon'
    }))
  ];

  // Filter by search term
  const filteredIcons = allIcons.filter((icon) =>
    icon.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredIcons.length / ICONS_PER_PAGE);

  // Get current page icons
  const getCurrentPageIcons = () => {
    const startIndex = (currentPage - 1) * ICONS_PER_PAGE;
    const endIndex = startIndex + ICONS_PER_PAGE;
    return filteredIcons.slice(startIndex, endIndex);
  };

  // Reset to first page when search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // Always show first page
    pageNumbers.push(1);

    // Calculate start and end of the sliding window
    let start = Math.max(2, currentPage - 1);
    let end = Math.min(totalPages - 1, currentPage + 1);

    // Adjust window if at the edges
    if (currentPage <= 2) {
      end = 4;
    } else if (currentPage >= totalPages - 1) {
      start = totalPages - 3;
    }

    // Add ellipsis and numbers
    if (start > 2) pageNumbers.push('...');
    for (let i = start; i <= end; i++) {
      pageNumbers.push(i);
    }
    if (end < totalPages - 1) pageNumbers.push('...');

    // Always show last page
    pageNumbers.push(totalPages);

    return pageNumbers;
  };

  // Handle click for both types
  const handleIconClick = (icon, index) => {
    if (icon.type === 'custom') {
      const svgElement = icon.ref?.current;
      if (!svgElement) return;
      const elementString = svgElement.outerHTML;
      navigator.clipboard.writeText(elementString);
    } else if (icon.type === 'react-icon') {
      const svgMarkup = generateSvgMarkup(icon);
      if (svgMarkup) {
        navigator.clipboard.writeText(svgMarkup);
      }
    }
    setClickedIndex(index);
    setTimeout(() => {
      setClickedIndex(null);
    }, 3000);
  };

  // Helper function to generate SVG markup from react-icon
  const generateSvgMarkup = (icon) => {
    // Get the icon data
    let iconData;
    if (typeof icon.icon === 'function') {
      iconData = icon.icon();
    } else if (icon.icon instanceof GenIcon) {
      iconData = icon.icon.data;
    } else {
      iconData = icon.icon;
    }

    if (!iconData) return null;

    // Extract SVG attributes
    const attr = {
      width: size,
      height: size,
      stroke: initialColor,
      fill: 'none',
      strokeWidth: stroke / 10,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      ...iconData.attr
    };

    // Start SVG markup
    let svg = `<svg xmlns="http://www.w3.org/2000/svg"`;

    // Add all attributes
    Object.keys(attr).forEach((key) => {
      if (attr[key] !== undefined) {
        // Convert camelCase to kebab-case for attributes
        const attrKey = key
          .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
          .toLowerCase();
        svg += ` ${attrKey}="${attr[key]}"`;
      }
    });

    svg += '>';

    // Add paths
    if (iconData.child) {
      const addChildren = (children) => {
        children.forEach((child) => {
          if (child.tag === 'path') {
            svg += `<path`;
            Object.keys(child.attr || {}).forEach((key) => {
              // Convert camelCase to kebab-case for attributes
              const attrKey = key
                .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
                .toLowerCase();
              svg += ` ${attrKey}="${child.attr[key]}"`;
            });
            svg += '/>';
          }
          if (child.child) {
            addChildren(child.child);
          }
        });
      };
      addChildren(iconData.child);
    }

    svg += '</svg>';
    return svg;
  };

  return (
    <>
      <div
        className={c(
          'sticky top-0 z-10 pt-4 pb-2',
          initialColor === '#ffffff' ? 'bg-[#0f0f0f]' : 'bg-[#fdfdff]'
        )}>
        <div
          id="main-card-for-color"
          className={c(
            `relative mx-auto w-full h-14 bg-white rounded-md gray-shadow max-w-[400px]`
          )}>
          <div
            className={c(
              'flex items-center w-full h-full rounded-md duration-500',
              inputSelected ? 'search-border' : ''
            )}>
            <img
              src={searchIcon}
              alt="Search"
              className="block float-left w-16 h-6 opacity-80"
            />
            <input
              type="text"
              placeholder="Search icons..."
              className={c(
                'pl-2 w-full outline-none rounded-md',
                initialColor === '#ffffff' ? 'bg-white' : 'bg-white'
              )}
              onFocus={() => setInputSelected(true)}
              onBlur={() => setInputSelected(false)}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        {filteredIcons.length > 0 && (
          <p
            className={c(
              'text-center mt-2 text-sm',
              initialColor === '#ffffff' ? 'text-gray-300' : 'text-gray-600'
            )}>
            Showing {getCurrentPageIcons().length} of {filteredIcons.length}{' '}
            icons
          </p>
        )}
      </div>

      <div className="grid w-11/12 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 h-min mb-[5vh] mx-auto">
        {getCurrentPageIcons().map((icon, index) => (
          <div
            key={index}
            className={c(
              'relative pt-3 pb-12 text-center rounded-md h-min place-content-center cursor-pointer group isolate',
              'transform transition-all duration-300 ease-out',
              'hover:scale-102 hover:z-10',
              'light-gray-shadow hover:shadow-lg hover:shadow-purple-100/30',
              'before:absolute before:inset-0 before:rounded-md before:transition-colors before:duration-300',
              'hover:before:bg-purple-50/5',
              initialColor === '#ffffff'
                ? 'bg-zinc-900 hover:before:bg-white/5'
                : 'bg-white hover:before:bg-purple-50/5'
            )}
            style={{
              outlineColor: box === index ? initialColor : '#ffffff',
              outlineWidth: '2px',
              outlineStyle: 'solid'
            }}
            onMouseEnter={() => setBox(index)}
            onMouseLeave={() => setBox(null)}
            onClick={() => handleIconClick(icon, index)}>
            <div
              className={c(
                'relative mx-auto mt-2 w-min z-1',
                'transition-all duration-300 ease-out transform',
                'group-hover:scale-105 group-hover:translate-y-[-2px]'
              )}>
              {icon.type === 'custom'
                ? React.cloneElement(icon.svg, { ref: icon.ref })
                : React.createElement(icon.icon, { size, color: initialColor })}
            </div>
            <p
              className={c(
                'absolute bottom-4 w-[100%] left-1/2 -ml-[50%] text-sm',
                'transform transition-all duration-300 ease-out',
                'group-hover:translate-y-[-2px]',
                initialColor === '#ffffff' ? 'text-white' : 'text-gray-700'
              )}>
              {clickedIndex === index ? (
                <span className="flex justify-center items-center">
                  <span className="mr-1 animate-bounce">🎉</span> Copied!
                </span>
              ) : (
                icon.title
              )}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex flex-col gap-4 items-center mb-8 w-full">
          <div className="flex gap-2 items-center">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={c(
                'px-4 py-2 rounded-md transition-all duration-200',
                currentPage === 1
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-gray-100',
                initialColor === '#ffffff'
                  ? 'bg-zinc-800 text-white hover:bg-zinc-700'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              )}>
              ←
            </button>

            <div className="flex gap-2">
              {getPageNumbers().map((number, index) => (
                <button
                  key={index}
                  onClick={() =>
                    typeof number === 'number' && setCurrentPage(number)
                  }
                  className={c(
                    'px-4 py-2 rounded-md transition-all duration-200',
                    typeof number === 'number'
                      ? number === currentPage
                        ? 'bg-blue-500 text-white'
                        : initialColor === '#ffffff'
                        ? 'bg-zinc-800 text-white hover:bg-zinc-700'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                      : 'cursor-default',
                    typeof number !== 'number' && 'px-2'
                  )}>
                  {number}
                </button>
              ))}
            </div>

            <button
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className={c(
                'px-4 py-2 rounded-md transition-all duration-200',
                currentPage === totalPages
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-gray-100',
                initialColor === '#ffffff'
                  ? 'bg-zinc-800 text-white hover:bg-zinc-700'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              )}>
              →
            </button>
          </div>

          <p
            className={c(
              'text-sm',
              initialColor === '#ffffff' ? 'text-gray-300' : 'text-gray-600'
            )}>
            Page {currentPage} of {totalPages}
          </p>
        </div>
      )}

      {filteredIcons.length === 0 && (
        <div
          className={c(
            'text-center py-12',
            initialColor === '#ffffff' ? 'text-white' : 'text-gray-700'
          )}>
          <p className="text-xl font-semibold">No icons found</p>
          <p className="mt-2">Try adjusting your search term</p>
        </div>
      )}
    </>
  );
}

export default SvgCard;
