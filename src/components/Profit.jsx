import React from "react";

const Profit = () => {
  return (
    <section className="relative overflow-hidden bg-[#14000f] text-white pt-32 pb-48">


      <div className="absolute inset-0 bg-linear-to-b from-[#2b0022] via-[#3b0030] to-[#14000f] opacity-70"></div>

      <div className="absolute -top-72 -left-72 w-[800px] h-[800px] rounded-full glow-1"></div>

      <div className="absolute -bottom-72 -right-72 w-[750px] h-[750px] rounded-full glow-2"></div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-52 w-2 h-2 bg-white/40 rounded-full"></div>
        <div className="absolute top-56 left-1/3 w-1 h-1 bg-white/50 rounded-full"></div>
        <div className="absolute top-20 right-80 w-2 h-2 bg-white/40 rounded-full"></div>
        <div className="absolute top-72 right-1/4 w-1 h-1 bg-white/30 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">

        <button className="px-5 py-1 bg-white/10 rounded-full text-sm border border-white/20 tracking-wide">
          BUILD FOR YOU
        </button>

        <h1 className="text-6xl font-extrabold leading-tight mt-6 tracking-tight">
          Built for <span className="text-[#d6f0fc]">Creators.</span> <br />
          Powered for <span className="text-[#bceaff]">Profit</span>
        </h1>

        <p className="mt-6 text-lg text-white/70 max-w-xl mx-auto">
          Create and sell courses, consulting services, and communities — with
          zero marketing cost and a built-in sales network.
        </p>

        <div className="flex justify-center mt-10">
          <input
            type="email"
            placeholder="Enter Your Email Here"
            className="px-6 py-3 rounded-full bg-white/10 border border-white/20 
                       w-80 focus:outline-none placeholder-white/60"
          />

          <button
            className="ml-3 px-8 py-3 rounded-full bg-linear-to-r 
            from-[#d667ff] to-[#6a3cff] text-white font-medium shadow-xl"
          >
            Start for Free <br />
            <span className="text-xs opacity-80">No credit card Required</span>
          </button>
        </div>

        <p className="mt-3 text-xs text-white/50">
          By proceeding you agree to our Platform terms & Privacy Notice
        </p>
      </div>

      {/*  CARD BOX */}
      <div
        className="relative z-10 w-[1470px] mx-auto mt-32 bg-white/5 backdrop-blur-xl 
        border border-white/10 rounded-3xl p-10 shadow-xl"
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold">
            Sell from day one — even with zero audience
          </h2>
          <button className="px-4 py-2 border border-white/30 rounded-full text-sm">
            Open calculator
          </button>
        </div>

        <div className="grid grid-cols-4 gap-6 text-center">
          {[
            ["CO-SELLERS IN NETWORK", "21,500+", "People who can co-promote"],
            ["EXPECTED BUYERS / MONTH", "86", "With zero personal audience"],
            ["EST. MRR AT US$9/MO", "US$774", "From membership sales"],
            ["EARN W/O A PRODUCT", "US$300", "Just by co-selling"],
          ].map(([title, value, desc], i) => (
            <div
              key={i}
              className="p-4 border border-white/10 rounded-2xl bg-white/5"
            >
              <p className="text-sm text-white/50">{title}</p>
              <p className="text-3xl font-bold mt-2">{value}</p>
              <p className="text-xs text-white/50 mt-1">{desc}</p>
            </div>
          ))}
        </div>

        {/* MARQUEE BAR */}
        <div className="w-full overflow-hidden bg-[#fff3d8] mt-6 rounded-xl">
          <div className="animate-marquee whitespace-nowrap text-center text-gray-900 font-medium py-2">
            Unlike Kajabi, Teachable, or Skool, Growhubs helps you find and
            convert clients inside the platform so you can sell from day one without ads.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profit;
