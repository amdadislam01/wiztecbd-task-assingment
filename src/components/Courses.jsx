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
    <div className="w-full bg-linear-to-br from-[#ffeafe] via-white to-[#f7dfff] py-20 px-4">
      <div className="w-full flex justify-center mb-6">
        <span className="bg-linear-to-br from-[#FCC3FF] to-[#F75EFF] text-sm font-bold px-4 py-2 rounded-full shadow-sm">
          DIVERSIFY REVENUE STREAM
        </span>
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold text-center leading-tight text-black">
        Maximise earnings with <br /> limitless revenue streams.
      </h1>

      <p className="text-center max-w-2xl mx-auto text-gray-600 mt-4">
        Create and sell courses, consulting services, and communities — with
        Zero marketing cost and a built-in sales network.
      </p>

      <div className="w-full flex justify-center mt-10">
        <div className="bg-white shadow-sm  rounded-full px-4 py-3 flex gap-6 items-center overflow-x-auto">
          <button className="flex items-center gap-2 bg-[#450021] text-white px-4 py-2 rounded-full shadow">
            <MdCastForEducation size={24} className="bg-linear-to-br from-[#EAF6FF] to-[#ADDCFF] p-1 text-black rounded-2xl" />
            <span className="text-sm font-semibold">Courses</span>
          </button>

          <button className="flex items-center gap-2 text-gray-600">
            <FiUsers size={ 24} className="bg-linear-to-br from-[#f3f3f3] to-[#d5d5d5] p-1 text-black rounded-2xl" />
            <span className="text-sm font-medium">Communities</span>
          </button>

          <button className="flex items-center gap-2 text-gray-600">
            <FiGrid size={ 24} className="bg-linear-to-br from-[#f3f3f3] to-[#d5d5d5] p-1 text-black rounded-2xl" />
            <span className="text-sm font-medium">Coaching & Consulting</span>
          </button>

          <button className="flex items-center gap-2 text-gray-600">
            <FiShoppingBag size={ 24} className="bg-linear-to-br from-[#f3f3f3] to-[#d5d5d5] p-1 text-black rounded-2xl" />
            <span className="text-sm font-medium">Merchandise</span>
          </button>

          <button className="flex items-center gap-2 text-gray-600">
            <FiMic size={ 24} className="bg-linear-to-br from-[#f3f3f3] to-[#d5d5d5] p-1 text-black rounded-2xl" />
            <span className="text-sm font-medium">Podcasts</span>
          </button>

          <button className="flex items-center gap-2 text-gray-600">
            <FiBarChart size={ 24} className="bg-linear-to-br from-[#f3f3f3] to-[#d5d5d5] p-1 text-black rounded-2xl" />
            <span className="text-sm font-medium">Events</span>
          </button>

          <button className="flex items-center gap-2 text-gray-600">
            <FiBarChart size={ 24} className="bg-linear-to-br from-[#f3f3f3] to-[#d5d5d5] p-1 text-black rounded-2xl" />
            <span className="text-sm font-medium">Brokerage</span>
          </button>
        </div>
      </div>

      <div className="mt-16 max-w-[1400px] mx-auto px-6 rounded-l-[500px] rounded-4xl p-10 relative  bg-linear-to-r from-[#470431] to-[#ac699a] flex flex-col md:flex-row items-center gap-10 pl-16">
        <div className="text-white w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Courses</h2>

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

          <button className="bg-black text-white px-5 py-2 rounded-full font-semibold">
            Learn More
          </button>
        </div>

        <div className="relative w-full md:w-1/2">
          <div className="rounded-3xl overflow-hidden">
            <img src={courses} alt="demo" className="w-full object-cover" />
          </div>


          <div className="absolute bottom-36 right-16 bg-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 z-20">
            <button className="bg-[#1973ff] text-white px-4 py-2 rounded-lg text-sm font-semibold">
              Subscribe for $5.00/mo
            </button>
          </div>

          <div className="absolute bottom-24 right-12 bg-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 z-10">
            <div className="bg-blue-100 text-blue-600 text-xs font-bold px-2 py-1 rounded">
              PT 01
            </div>
            <div>
              <p className="font-medium text-sm">Lady Dentaa Amoateng MBE</p>
              <p className="text-xs text-gray-500">54 min • Oct 17, 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
