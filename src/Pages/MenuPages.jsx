import React from "react";
import { aqiqah, katering } from "../assets/navbar";
import { Link } from "react-router-dom";
import KateringItems from "../Component/KateringItems";
import AqiqahItems from "../Component/AqiqahItems";

function MenuPages() {
  return (
    <div className="bg-gradient-to-b from-[#ffe1ba] to-[#F3B664] text-gray-700 py-[10%] lg:pt-[10%] md:pt-[10%] pt-[40%]">
      <h1 className="text-5xl font-bold text-center">Menu Paket</h1>
      <h1 className="text-2xl mt-9 font-bold text-center">AQIQAH</h1>
      <div className="rounded-md md:rounded-lg gap-4 p-5 grid md:grid-cols-2 grid-cols-1">
        {aqiqah.map((paket) => (
          <div data-aos="fade-up" data-aos-duration="1000" className="md:text-2xl shadow-xl p-5 bg-[#c5df9b] border-[4px] rounded-lg border-[#fff] hover:scale-105 transition-all duration-150 ease-in">
            <AqiqahItems tambahan={paket.tambahan} paket={paket.text} sate={paket.sate} gule={paket.gule} jumlah={paket.kambing} harga={paket.harga} />
          </div>
        ))}
      </div>
      <h1 className="text-2xl mt-9 font-bold text-center">KATERING</h1>
      <div className="rounded-lg gap-4 p-5 grid md:grid-cols-4 grid-cols-2">
        {katering.map((paket) => (
          <div data-aos="fade-right" data-aos-duration="1000" className="shadow-xl p-2 bg-[#c5df9b] border-[2px] rounded-lg border-[#fff] hover:scale-105 transition-all duration-150 ease-in">
            <KateringItems title={paket.text} />
          </div>
        ))}
      </div>
      <p className="ms-3 text-red-500">*Note: Semua Paket Aqiqah dan Katering, dapat diubah dan disesuaikan melalui pesan whatsapp</p>
      <div className="text-center lg:w-[20%] md:w-[60%] mb:py-0 py-[5%] m-auto">
        <h3 className="text-2xl pb-8">Tanya dan Konsultasi</h3>
        <div className="hover:scale-110 transition-all duration-150 ease-in">
          <Link className="bg-green-600 rounded-full p-5 text-white font-semibold" to={"https://wa.me/6283847761042"}>
            <i className="fa-brands fa-whatsapp pe-3"></i>
            HUBUNGI SEKARANG
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MenuPages;
