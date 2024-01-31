import React from "react";

function AboutPages() {
  return (
    <div className="bg-[#d2f2ff] md:h-screen text-gray-700 md:pt-[150px] py-[50%]">
      <h1 className="md:text-5xl text-2xl text-center">Tentang Kami</h1>
      <div data-aos="fade-right" data-aos-duration="1000" className="md:px-[25%] px-[5%] pt-[5%] text-justify tracking-widest">
        <h1 className="md:text-4xl text-xl text-center font-light pb-5">eva aqiqah & catering</h1>
        <p className="md:text-lg text-md tracking-widest font-light">
          <span className="text-3xl">M</span>erupakan sebuah usaha yang bergerak di bidang kuliner yang membantu pelaksanaan prosesi aqiqah, mulai dari penyembelihan kambing hingga selesai dimasak dan menyediakan masakan - masakan katering
          yang di jamin Halal dan Enak di daerah Banyuwangi
        </p>
        <p className="pt-5 text-end text-sm font-light">Terima kasih atas dukungan Anda, setiap suapan dari hidangan kami mengandung cerita keluarga, semangat Islami, dan do'a</p>
      </div>
    </div>
  );
}

export default AboutPages;
