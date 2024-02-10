// GaleryPages.jsx
import React, { useRef, useState } from "react";
import { testimoni } from "../assets/navbar";
import TestimoniItems from "../Component/TestimoniItems";

function TestimoniPages() {
  const elementRef = useRef();
  const screenWidth = window.innerWidth;

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 130;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 130;
  };

  return (
    <div className="bg-[#F1EB90] md:h-[800px] lg:h-screen h-screen pt-[95px] pb-[55%] text-gray-800 text-5xl">
      <h1 className="text-center pb-[10%]">Testimonial</h1>
      <div className="flex overflow-x-auto w-[90%] h-[400px] pt-5 gap-4 scroll-smooth px-4 mx-auto" ref={elementRef}>
        {testimoni.map((items, i) => (
          <TestimoniItems key={i} title={items.title} text={items.text} image={items.image} />
        ))}
      </div>
      <div className="flex justify-center md:mt-[30px] text-gray-700 text-[30px] gap-[70px]">
        <button className="text-gray-600 cursor-pointer">
          <i className="fa-solid fa-chevron-left text-4xl" onClick={() => sliderLeft(elementRef.current)}></i>
        </button>
        <button className="text-gray-600 cursor-pointer">
          <i className="fa-solid fa-chevron-right text-4xl" onClick={() => sliderRight(elementRef.current)}></i>
        </button>
      </div>
    </div>
  );
}

export default TestimoniPages;
