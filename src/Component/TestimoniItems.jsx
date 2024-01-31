// GaleryItems.jsx
import React from "react";

function TestimoniItems({ title, image, text }) {
  return (
    <div data-aos="fade-down" data-aos-duration="1000" className="bg-white border-[2px] border-gray-800 rounded-lg hover:scale-105 transition-all duration-150 ease-in text-sm p-5 shadow-lg h-[300px]">
      <div className="md:w-[350px] w-[190px] h-[70%]">
        <p className="text-2xl">"</p>
        <p className="md:text-md md:text-justify tracking-widest">{text}</p>
        <p className="text-end text-2xl">"</p>
      </div>
      <div className="h-[13%]">
        <h1 className="text-center relative mt-5 align-bottom">{title}</h1>
      </div>
      <div className="md:w-[30%] w-[40%] mx-auto bg-white border-[2px] border-gray-800 rounded-full">
        <img src={image} alt={title} />
      </div>
    </div>
  );
}

export default TestimoniItems;
