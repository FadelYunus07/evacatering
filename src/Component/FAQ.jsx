import { faq } from "../assets/navbar";
import FaqItems from "./FaqItems";

function FAQ() {
  return (
    <div>
      {faq.map((tanya) => (
        <div key={tanya.id} data-aos="fade-right" data-aos-duration="1000">
          <FaqItems title={tanya.title} content={tanya.content} />
        </div>
      ))}
    </div>
  );
}

export default FAQ;
