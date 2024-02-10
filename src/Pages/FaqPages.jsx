// import { Accordion } from "flowbite-react";
import FAQ from "../Component/FAQ";

function FaqPages(title, content) {
  return (
    <div className="p-4 bg-white lg:pt-[10%] md:pt-[10%] pt-[20%] ">
      <h1 className="text-center text-5xl font-bold text-gray-900 lg:py-[4%] md:py-[4%] py-[20%]">FAQ</h1>
      <FAQ />
    </div>
  );
}

export default FaqPages;
