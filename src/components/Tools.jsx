import React, { useEffect, useRef } from "react";
import tools1 from '../assets/tools/tools-1.png';
import tools2 from '../assets/tools/tools-2.png';
import tools3 from '../assets/tools/tools-3.png';
import tools4 from '../assets/tools/tools-4.png';
import tools5 from '../assets/tools/tools-5.png';
import tools6 from '../assets/tools/tools-6.png';
import tools7 from '../assets/tools/tools-7.png';
import tools8 from '../assets/tools/tools-8.png';

const tools = [
  {
    title: "Payments",
    desc: "Responsibly sourced materials and eco-friendly fabrics for a better tomorrow.",
    icon: tools1,
  },
  {
    title: "Analytics",
    desc: "Understand your growth with smart, built-in analytics.",
    icon: tools2,
  },
  {
    title: "Newsletters",
    desc: "Build your audience with engaging, branded newsletter.",
    icon: tools3,
  },
  {
    title: "Pages",
    desc: "Showcase your expertise with a personal profile that sells for you.",
    icon: tools4,
  },
  {
    title: "Contact",
    desc: "Organize your contacts and turn them into your most valuable asset.",
    icon: tools5,
  },
  {
    title: "Emails",
    desc: "Showcase your expertise with a personal profile that sells for you.",
    icon: tools6,
  },
  {
    title: "Co-sell network",
    desc: "Collaborate with others to sell more without ad spend or extra effort.",
    icon: tools7,
  },
];
const Tools = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);
  return (
    <div className="bg-[#f6eedf] py-20 px-4">

      <div className="text-center mb-14">
        <span className="bg-[#e4d7c0] text-black text-sm px-4 py-2 rounded-full">
          ESSENTIAL TOOLS
        </span>

        <h2 className="text-5xl font-extrabold mt-5 text-black leading-tight">
          Essential Tools <br /> Zero Distractions
        </h2>

        <p className="text-gray-600 mt-3 max-w-xl mx-auto">
          Create diverse products on the platform and leverage our powerful
          tools to drive sales within and beyond GrowHubs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1500px] mx-auto px-6">
        {tools.map((t, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="opacity-0 translate-y-6 transition-all duration-700 
                       bg-white rounded-2xl p-7 shadow-sm"
          >
            <div className="flex justify-between">
              <h3 className="text-xl font-bold text-[#4E4E4E]">{t.title}</h3>
              <img src={t.icon} alt="" className="w-10 h-10" />
            </div>

            <p className="text-gray-600 mt-3">{t.desc}</p>

            <button className="text-[#dfac08] mt-4 font-semibold flex items-center space-x-1">
              <span>Learn more</span> <span>→</span>
            </button>
          </div>
        ))}


        <div
          ref={(el) => (cardsRef.current[tools.length] = el)}
          className="opacity-0 translate-y-6 transition-all duration-700 
                     md:col-span-2 rounded-2xl p-7 text-white"
          style={{
            background:
              "linear-gradient(90deg, #4D5D69, #A16A6B)",
          }}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold text-[#fde047]">Enterprise plan</h3>
            <img src={tools8} alt="tools-image" className="w-10 h-10"/>
            </div> 
          <p className="mt-3 max-w-2xl">
            Full white-label platform hosted on a dedicated, auto-scaling
            server. Includes branding freedom, private content protection, and
            24/7 service availability.
          </p>
          <button className="text-[#fde047] mt-4 font-semibold flex items-center space-x-1">
            <span>Learn more</span> <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tools;
