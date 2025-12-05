import React from "react";
import { Star, Play } from "lucide-react";
import TestimonialCard from "./TestimonialCard";
const Testmonials = () => {
  return (
    <div className="bg-linear-to-b from-[#2b0b31] to-[#3C4C5AD4] py-16 px-4">

      <div className="text-center mb-12">
        <span className="bg-linear-to-br from-[#FCC3FF] to-[#F75EFF] text-sm font-semibold px-4 py-2 rounded-full">
          TESTIMONIALS
        </span>

        <h2 className="text-5xl font-extrabold mt-4 leading-tight text-white">
          Trusted by Creators <br /> & Proven by Results.
        </h2>

        <p className="text-gray-300 mt-2">
          See how others grow with Growhubs — real stories, real success.
        </p>
      </div>

      <div className="overflow-hidden relative w-full">
        <div className="flex space-x-6 marquee-track">
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
};

export default Testmonials;
