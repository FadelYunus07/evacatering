import React from "react";
import image from "../assets/asset1.svg";
import { Link } from "react-router-dom";

function FooterComponent() {
  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="m-5 mx-auto text-left tracking-wider">
          <img className="lg:w-[30%] w-[40%] lg:mx-0 mx-auto my-3" src={image} alt="" />
          <div className="lg:text-left text-center">
            <p className="text-md md:text-xl font-bold">
              EVA AQIQAH & CATERING <br />
              BANYUWANGI
            </p>
            <p className="text-sm md:text-base">Perum Pengatigan Indah Blok BA.07 RT.02 RW.03</p>
            <p className="text-sm md:text-base">Kec.Rogojampi, Kab.Banyuwangi, Prov.Jawa Timur, Indonesia</p>
            <p className="text-sm md:text-base">Hubungi Kami di : </p>
          </div>
          <div className=" md:flex md:gap-3 grid grid-cols-1 text-center my-3 text-md">
            <Link to={"#"} className="hover:scale-105">
              <i className="fa-brands fa-instagram pe-1 text-xl"></i>
              @ummicatering
            </Link>
            <Link to={"https://wa.me/6283847761042"} className="hover:scale-105">
              <i className="fa-brands fa-whatsapp pe-1 text-xl"></i>
              +6283847761042
            </Link>
            <Link to={"#"} className="hover:scale-105">
              <i className="fa-brands fa-facebook pe-1 text-xl"></i>
              ummicatering
            </Link>
            <Link to={"#"} className="hover:scale-105">
              <i className="fa-brands fa-tiktok pe-1 text-xl"></i>
              @ummicatering
            </Link>
          </div>
        </div>
        <div className="lg:flex items-center md:hidden hidden">
          <h1 className="text-xl font-bold mx-auto ps-[20px]">Find Us Here: </h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15792.124788531608!2d114.2833878135659!3d-8.299694049488387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd151004b80e0a5%3A0x16562af1b4a91a11!2sEva%20Aqiqah%20%26%20Catering!5e0!3m2!1sen!2sid!4v1707637255525!5m2!1sen!2sid"
            width="400"
            height="300"
            className="border-[2px] border-white rounded-md me-5"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="text-center pb-4">
        <p>Copyright &copy; {new Date().getFullYear()}, by DGland</p>
      </div>
    </>
  );
}

export default FooterComponent;
