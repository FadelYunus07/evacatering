// import { Accordion } from "flowbite-react";
import { useState } from "react";
import { faq } from "../assets/navbar";

function FaqItems({ title, content }) {
  const [accordion, setAccordion] = useState(false);
  return (
    <div className="w-full">
      <div className="w-[80%] mx-auto">
        <button onClick={() => setAccordion(!accordion)} className="flex shadow-lg justify-between w-full rounded-lg bg-[#9FBB73] p-5 text-white text-sm md:text-md font-bold items-center">
          {title}
          {accordion ? <i className="fa fa-minus"></i> : <i className="fa fa-plus"></i>}
        </button>
        <div className={`grid overflow-hidden mx-auto transition-all duration-300 ease-in-out ${accordion ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
          <div className="overflow-hidden text-gray-500 rounded-lg m-2 text-center shadow-lg ">
            <p className="m-5 md:text-base text-sm">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqItems;
