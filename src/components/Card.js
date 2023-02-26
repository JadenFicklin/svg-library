import React from "react";
import searchIcon from "../images/search.svg";

function card({ type, progress, pixels, search, maxWidth }) {
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
          <p className="relative w-5/12 h-1 mx-auto bg-gray-700 rounded-full xs:w-6/12 md:w-7/12 top-8"></p>
          <p className="absolute top-5 right-5 w-[50px] ">{pixels}px</p>
        </>
      )}
    </div>
  );
}

export default card;
