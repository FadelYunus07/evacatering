import React from "react";
import MenuPages from "./MenuPages";
import image from "../assets/umiLogo.png";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import GaleryPages from "./GaleryPages";
import TestimoniPages from "./TestimoniPages";
import OrderPages from "./OrderPages";
import FaqPages from "./FaqPages";
import AboutPages from "./AboutPages";
import ScrollToTop from "../Component/ScrollToTop";
import { Link } from "react-router-dom";

function HomePages() {
  return (
    <div className="min-h-screen bg-white lg:pt-[10px] md:py-[2%] pt-[30%]">
      <div className="relative bg-white md:h-[820px] grid md:grid-cols-2 sm:grid-cols-1 md:gap-4  text-gray-700">
        <div className="md:self-center" data-aos="fade-right" data-aos-duration="1000">
          <img src={image} alt="Logo Umi" className="md:w-[100%] w-[80%] mx-auto lg:w-[90%] m-0" />
        </div>
        <div className="md:self-center md:m-[40px] md:tracking-widest text-center mb-5" data-aos="fade-left" data-aos-duration="1000">
          <p className="md:text-5xl md:pb-5 text-4xl pb-3 leading-snug">
            Aqiqah dan Katering praktis <span className="text-[#9FBB73] font-bold">Banyuwangi</span>
          </p>
          <p className="md:text-xl text-base leading-normal">Menyajikan Aqiqah dengan Amanah, Syar'i, dan Profesionalisme. Nikmati Menu Enak dengan Pelayanan Ramah yang Menyenangkan! </p>
        </div>
        <div className="lg:absolute md:absolute top-[87%] lg:left-[10%] md:left-[0%] w-full md:h-[200px] h-screen lg:w-[80%] lg:h-[200px] overflow-hidden shadow-2xl mx-auto bg-[#d0eea0] lg:rounded-3xl md:rounded-3xl col col-span-1 md:col-span-3 flex justify-center items-center">
          {/* komponen terbang */}
          <div className="lg:flex md:flex justify-center items-center lg:gap-5 md:gap-4 mx-5">
            <div className="flex lg:gap-5 border-[1px] border-[#574040] items-center rounded-xl p-3 shadow-2xl hover:scale-110 hover:bg-[#F1EB90] transition-all duration-150 ease-in">
              <img className="md:border-[4px] border-[2px] border-[#25130c] bg-white rounded-xl md:w-[80px] lg:w-[40%] w-[100px]" src={image2} alt="" />
              <p className="lg:text-md lg:ms-0 md:text-sm text-md ms-3">
                Masakan Enak dan tidak bau <br />
                Kambing
              </p>
            </div>
            <div className="flex lg:gap-5 border-[1px] border-[#574040] items-center rounded-xl p-3 shadow-2xl hover:scale-110 hover:bg-[#F1EB90] transition-all duration-150 ease-in">
              <img className="md:border-[4px] border-[2px] border-[#25130c] bg-white rounded-xl md:w-[80px] lg:w-[40%] w-[100px]" src={image1} alt="" />
              <p className="lg:text-md lg:ms-0 md:text-sm text-md ms-3">Menu bisa di modifikasi sesuai selera</p>
            </div>
            <div className="flex lg:gap-5 border-[1px] border-[#574040] items-center rounded-xl p-3 shadow-2xl hover:scale-110 hover:bg-[#F1EB90] transition-all duration-150 ease-in">
              <img className="md:border-[4px] border-[2px] border-[#25130c] bg-white rounded-xl md:w-[80px] lg:w-[40%] w-[100px]" src={image3} alt="" />
              <p className="lg:text-md lg:ms-0 md:text-sm text-md ms-3">
                Pemotongan Syar'i sesuai <br /> Tuntunan Islam
              </p>
            </div>
          </div>
        </div>
      </div>
      <GaleryPages />
      <MenuPages />
      <OrderPages />
      {/* <TestimoniPages /> */}
      <FaqPages />
    </div>
  );
}

export default HomePages;
