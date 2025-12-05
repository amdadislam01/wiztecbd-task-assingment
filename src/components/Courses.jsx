import React from "react";
import {
  FiMic,
  FiUsers,
  FiShoppingBag,
  FiGrid,
  FiBarChart,
} from "react-icons/fi";
import { MdCastForEducation } from "react-icons/md";
import courses from "../assets/course.png";

const Courses = () => {
  return (
    <div className="w-full bg-linear-to-br from-[#ffeafe] via-white to-[#f7dfff] py-16 px-4 md:px-10 lg:px-20">
      <div className="w-full flex justify-center mb-6">
        <span className="bg-linear-to-br from-[#FCC3FF] to-[#F75EFF] text-sm font-bold px-4 py-2 rounded-full shadow-sm">
          DIVERSIFY REVENUE STREAM
        </span>
      </div>

      <h1 className="text-3xl md:text-5xl font-extrabold text-center leading-tight text-black">
        Maximise earnings with <br className="hidden md:block" /> limitless
        revenue streams.
      </h1>

      <p className="text-center max-w-2xl mx-auto text-gray-600 mt-4 text-sm md:text-base">
        Create and sell courses, consulting services, and communities — with
        Zero marketing cost and a built-in sales network.
      </p>

      <div className="w-full flex justify-center mt-8 md:mt-10">
        <div className="bg-white shadow-sm rounded-full px-4 py-3 flex items-center justify-center flex-wrap  gap-4 sm:gap-6 ">
          <button className="flex items-center gap-2 bg-[#450021] text-white px-4 py-2 rounded-full shadow text-sm">
            <MdCastForEducation size={22} className="p-1 bg-linear-to-br from-[#EAF6FF] to-[#ADDCFF] text-black rounded-2xl" />
            Courses
          </button>

          <button className="flex items-center gap-2 text-gray-600 text-sm">
            <FiUsers size={22} className="p-1 bg-linear-to-br from-[#f3f3f3] to-[#d5d5d5] rounded-2xl" />
            Communities
          </button>

          <button className="flex items-center gap-2 text-gray-600 text-sm">
            <FiGrid size={22} className="p-1 bg-linear-to-br from-[#f3f3f3] to-[#d5d5d5] rounded-2xl" />
            Coaching & Consulting
          </button>

          <button className="flex items-center gap-2 text-gray-600 text-sm">
            <FiShoppingBag size={22} className="p-1 bg-linear-to-br from-[#f3f3f3] to-[#d5d5d5] rounded-2xl" />
            Merchandise
          </button>

          <button className="flex items-center gap-2 text-gray-600 text-sm">
            <FiMic size={22} className="p-1 bg-linear-to-br from-[#f3f3f3] to-[#d5d5d5] rounded-2xl" />
            Podcasts
          </button>

          <button className="flex items-center gap-2 text-gray-600 text-sm">
            <FiBarChart size={22} className="p-1 bg-linear-to-br from-[#f3f3f3] to-[#d5d5d5] rounded-2xl" />
            Events
          </button>

          <button className="flex items-center gap-2 text-gray-600 text-sm">
            <FiBarChart size={22} className="p-1 bg-linear-to-br from-[#f3f3f3] to-[#d5d5d5] rounded-2xl" />
            Brokerage
          </button>
        </div>
      </div>

      <div className="mt-12 md:mt-16 max-w-[1400px] mx-auto px-4 md:px-6 md:rounded-l-[500px] rounded-4xl p-6 md:p-10 relative bg-linear-to-r from-[#470431] to-[#ac699a] flex flex-col md:flex-row items-center gap-10">
        <div className="text-white w-full md:w-1/2 md:ml-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Courses</h2>

          <p className="text-sm mb-4">
            Turn your knowledge into structured, sellable products.
          </p>

          <p className="text-sm mb-4">
            Build online, drip, academic, or challenge-based courses with
            built-in tools for gamification, accountability, and engagement.
          </p>

          <p className="text-sm mb-6">
            Every course is optimized to deliver value and generate recurring
            income.
          </p>

          <button className="bg-black text-white px-5 py-2 rounded-full font-semibold text-sm md:text-base">
            Learn More
          </button>
        </div>

        <div className="relative w-full md:w-1/2">
          <div className="rounded-3xl overflow-hidden">
            <img src={courses} alt="demo" className="w-full object-cover" />
          </div>

          <div className="absolute bottom-24 sm:bottom-28 right-6 sm:right-12 bg-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 z-20">
            <button className="bg-[#1973ff] text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold">
              Subscribe for $5.00/mo
            </button>
          </div>

          <div className="absolute bottom-10 sm:bottom-16 right-4 sm:right-10 bg-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 z-10">
            <div className="bg-blue-100 text-blue-600 text-xs font-bold px-2 py-1 rounded">
              PT 01
            </div>
            <div>
              <p className="font-medium text-xs sm:text-sm">
                Lady Dentaa Amoateng MBE
              </p>
              <p className="text-xs text-gray-500">54 min • Oct 17, 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
