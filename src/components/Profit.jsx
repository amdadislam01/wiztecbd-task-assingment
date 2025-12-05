import React from "react";

const Profit = () => {
  return (
    <section className="relative overflow-hidden bg-[#14000f] text-white pt-20 md:pt-32 pb-32 md:pb-48">

      <div className="absolute inset-0 bg-linear-to-b from-[#2b0022] via-[#3b0030] to-[#14000f] opacity-70"></div>

      <div className="absolute -top-60 md:-top-72 -left-60 md:-left-72 w-[500px] md:w-[800px] h-[500px] md:h-[800px] rounded-full glow-1"></div>

      <div className="absolute -bottom-60 md:-bottom-72 -right-60 md:-right-72 w-[450px] md:w-[750px] h-[450px] md:h-[750px] rounded-full glow-2"></div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 md:top-32 left-20 md:left-52 w-1 h-1 md:w-2 md:h-2 bg-white/40 rounded-full"></div>
        <div className="absolute top-40 md:top-56 left-1/4 md:left-1/3 w-1 h-1 bg-white/50 rounded-full"></div>
        <div className="absolute top-12 md:top-20 right-32 md:right-80 w-1 h-1 md:w-2 md:h-2 bg-white/40 rounded-full"></div>
        <div className="absolute top-40 md:top-72 right-1/4 w-1 h-1 bg-white/30 rounded-full"></div>
        <div className="absolute top-20 md:top-32 left-20 md:left-52 w-1 h-1 md:w-2 md:h-2 bg-white/40 rounded-full"></div>
        <div className="absolute top-40 md:top-56 left-1/4 md:left-1/3 w-1 h-1 bg-white/50 rounded-full"></div>
        <div className="absolute top-12 md:top-20 right-32 md:right-80 w-1 h-1 md:w-2 md:h-2 bg-white/40 rounded-full"></div>
        <div className="absolute top-40 md:top-72 right-1/4 w-1 h-1 bg-white/30 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">

        <button className="px-4 md:px-5 py-1 bg-white/10 rounded-full text-sm border border-white/20 tracking-wide">
          BUILD FOR YOU
        </button>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-4 md:mt-6 tracking-tight">
          Built for <span className="text-[#d6f0fc]">Creators.</span> <br />
          Powered for <span className="text-[#bceaff]">Profit</span>
        </h1>

        <div className="w-96 h-96 bg-[#e7cbb570] rounded-full blur-3xl absolute top-26 -right-26 animate-[floatSlow_8s_ease-in-out_infinite]"></div>
        <div className="w-96 h-96 bg-[#ecd6c55b] rounded-full blur-3xl absolute top-26 -left-26 animate-[floatSlowReverse_10s_ease-in-out_infinite]"></div>

        <p className="mt-4 md:mt-6 text-base md:text-lg text-white/70 max-w-xl mx-auto">
          Create and sell courses, consulting services, and communities — with
          zero marketing cost and a built-in sales network.
        </p>

        <div className="flex flex-col md:flex-row justify-center mt-6 md:mt-10 gap-3 md:gap-3">
          <input
            type="email"
            placeholder="Enter Your Email Here"
            className="px-4 md:px-6 py-2 md:py-3 rounded-full bg-white/10 border border-white/20 w-full md:w-80 focus:outline-none placeholder-white/60"
          />

          <button
            className="px-6 md:px-8 py-2 md:py-3 rounded-full bg-linear-to-r from-[#d667ff] to-[#6a3cff] text-white font-medium shadow-xl text-sm md:text-base"
          >
            Start for Free <br />
            <span className="text-xs opacity-80 block md:inline">No credit card Required</span>
          </button>
        </div>

        <p className="mt-2 md:mt-3 text-xs text-white/50">
          By proceeding you agree to our Platform terms & Privacy Notice
        </p>
      </div>

      <div
        className="relative z-10 w-full md:w-[1470px] mx-auto mt-16 md:mt-32 bg-white/5 backdrop-blur-xl 
        border border-white/10 rounded-3xl p-6 md:p-10 shadow-xl"
      >
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8 gap-3 md:gap-0">
          <h2 className="text-lg md:text-xl font-semibold text-center md:text-left">
            Sell from day one — even with zero audience
          </h2>
          <button className="px-3 md:px-4 py-1 md:py-2 border border-white/30 rounded-full text-sm">
            Open calculator
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
          {[
            ["CO-SELLERS IN NETWORK", "21,500+", "People who can co-promote"],
            ["EXPECTED BUYERS / MONTH", "86", "With zero personal audience"],
            ["EST. MRR AT US$9/MO", "US$774", "From membership sales"],
            ["EARN W/O A PRODUCT", "US$300", "Just by co-selling"],
          ].map(([title, value, desc], i) => (
            <div
              key={i}
              className="p-3 md:p-4 border border-white/10 rounded-2xl bg-white/5"
            >
              <p className="text-xs md:text-sm text-white/50">{title}</p>
              <p className="text-xl md:text-3xl font-bold mt-1 md:mt-2">{value}</p>
              <p className="text-xs text-white/50 mt-1">{desc}</p>
            </div>
          ))}
        </div>

        <div className="w-full overflow-hidden bg-[#fff3d8] mt-4 md:mt-6 rounded-xl">
          <div className="animate-marquee whitespace-nowrap text-center text-gray-900 font-medium py-1 md:py-2 text-xs md:text-sm">
            Unlike Kajabi, Teachable, or Skool, Growhubs helps you find and
            convert clients inside the platform so you can sell from day one without ads.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profit;
