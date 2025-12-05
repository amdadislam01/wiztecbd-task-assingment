import React from "react";
import testimonial from "../assets/testimonial.png";
import testimonial1 from "../assets/testimonial-1.png";
import { FaPlay } from "react-icons/fa";

const TestimonialCard = () => {
  return (
    <div className="min-w-full sm:min-w-[450px] md:min-w-[550px] lg:min-w-[650px] 
                    bg-white rounded-3xl shadow-md p-4 md:p-6 
                    flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">

      <div className="w-full md:w-[300px] h-[220px] sm:h-[280px] md:h-[350px] 
                      rounded-xl overflow-hidden relative">
        <img
          src={testimonial}
          alt="thumbnail"
          className="w-full h-full object-cover"
        />
        <button className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/80 w-12 h-12 sm:w-14 sm:h-14 rounded-full 
                          flex items-center justify-center text-xl sm:text-2xl">
            <FaPlay />
          </div>
        </button>
      </div>

      <div className="flex-1 w-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <img src={testimonial1} alt="" className="rounded-full w-10 h-10" />
            <div>
              <h3 className="font-bold text-lg">IvaRyan</h3>
              <p className="text-sm text-gray-500">
                Marketing manager at <span className="font-semibold">Adobe</span>
              </p>
            </div>
          </div>

          <div className="flex space-x-1 text-yellow-400 text-xl">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span className="text-[#6A4F15]">★</span>
            <span className="text-[#6A4F15]">★</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          <span className="px-3 py-1 border text-gray-600 text-xs rounded-full">
            Content Creator
          </span>
          <span className="px-3 py-1 border text-gray-600 text-xs rounded-full">
            Youtuber
          </span>
          <span className="px-3 py-1 border text-gray-600 text-xs rounded-full">
            Growth Expert
          </span>
        </div>

        <p className="mt-4 text-sm sm:text-base leading-relaxed">
          I recently had the opportunity to use the platform, and I must say,
          the feature that allows you to set your own commission is a game
          changer!
        </p>

        <h3 className="font-extrabold text-3xl mt-4">$2M</h3>
        <p className="text-xs text-gray-500 -mt-1">EARNED IN HELENUIL</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
