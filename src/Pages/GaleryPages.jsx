// GaleryPages.jsx
import React, { useRef, useState } from "react";
import { galeri } from "../assets/navbar";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function GaleryPages() {
  const [data, setData] = useState({ img: "", i: 0 });

  const imgView = (img, i) => {
    setData({ img, i });
  };

  const imgAction = (action) => {
    let i = data.i;
    if (action === "next") {
      setData({ img: galeri[i + 1].image, i: i + 1 });
    }
    if (action === "previous") {
      setData({ img: galeri[i - 1].image, i: i - 1 });
    }
    if (!action) {
      setData({ img: "", i: 0 });
    }
  };

  return (
    <>
      {data.img && (
        <div className="fixed md:top-14 lg:top-14 top-14 left-0 w-full h-full bg-[#2b2626af] flex justify-center items-center overflow-hidden">
          <button className="absolute top-10 right-10 text-white" onClick={() => imgAction()}>
            <i className="fa-solid fa-circle-xmark text-4xl"></i>
          </button>
          <div className="flex items-center">
            <button className="text-white absolute top-[50%] left-11" onClick={() => imgAction("previous")}>
              <i className="fa-solid fa-chevron-left text-4xl"></i>
            </button>
            <img className="m-auto w-auto max-w-[50%] max-h-[50%]" src={data.img} alt="" />
            <button className="text-white absolute top-[50%] right-11" onClick={() => imgAction("next")}>
              <i className="fa-solid fa-chevron-right text-4xl"></i>
            </button>
          </div>
        </div>
      )}

      <div className="bg-gradient-to-b from-[#F1EB90] to-[#ffe1ba] lg:pt-[15%] md:pt-[30%] pt-[95px] text-gray-800 text-5xl font-bold">
        <h1 className="text-center pb-[3%]">Galeri</h1>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry className="p-[5%]">
            {galeri.map((items, i) => (
              <img
                key={i}
                data-aos="fade-up"
                data-aos-duration="1000"
                className="m-2 block cursor-pointer border-[4px] rounded-lg border-[#fff] hover:scale-105 transition-all duration-150 ease-in"
                src={items.image}
                alt=""
                onClick={() => imgView(items.image, i)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
}

export default GaleryPages;
