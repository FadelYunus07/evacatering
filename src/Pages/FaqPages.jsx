// import { Accordion } from "flowbite-react";
import FAQ from "../Component/FAQ";

function FaqPages(title, content) {
  return (
    <div className="p-4 bg-white rounded-lg">
      <h1 className="text-center text-5xl font-bold text-gray-900 lg:my-[10%] md:my-[10%] my-[50%]">FAQ</h1>
      <FAQ />
    </div>
  );
}

export default FaqPages;
