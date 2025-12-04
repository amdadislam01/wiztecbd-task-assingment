import React from "react";

const FilterSidebar = () => {
  return (
    <div className="space-y-5">
      <div className="border border-gray-200 rounded-2xl p-5">
        <h3 className="font-semibold text-lg mb-4">Rent Budget</h3>
        <div className="h-1 bg-gray-300 rounded-full relative mb-4">
          <div className="absolute left-0 top-0 h-1 bg-[#6c0443] w-1/2 rounded-full"></div>
        </div>
        <div className="flex justify-between text-sm">
          <p className="bg-gray-200 px-6 py-2 rounded-xl">
            Minimum <br /> $300
          </p>
          <p className="bg-gray-200 px-6 py-2 rounded-xl">
            Maximum <br /> $67000
          </p>
        </div>
      </div>

      <div className="border border-gray-200 rounded-2xl p-5">
        <h3 className="font-semibold text-lg mb-2">Suburb</h3>
        <div className="h-0.5 bg-gray-200  rounded-full  mb-2"></div>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#6c0443]" />
            Eshelby Drive, Cranbrook
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#6c0443]" />
            2–6 Eshelby Dr, Cannovale
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#6c0443]" checked />
            59/3 Eshelby Drive Cannovale
          </label>
        </div>
      </div>

      <div className="border border-gray-200 rounded-2xl p-5">
        <h3 className="font-semibold text-lg mb-2">Property Type</h3>
        <div className="h-0.5 bg-gray-200  rounded-full  mb-2"></div>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#6c0443]" /> House
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#6c0443]" /> Land
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#6c0443]" /> Appartment
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#6c0443]" /> Town House
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#6c0443]" checked /> Villa
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#6c0443]" checked /> Acreage
          </label>
        </div>
      </div>

      <div className="border border-gray-200 rounded-2xl p-5">
        <h3 className="font-semibold text-lg mb-2">Amenities</h3>
        <div className="h-0.5 bg-gray-200  rounded-full  mb-2"></div>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#6c0443]" /> Pet-friendly
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#6c0443]" /> Parking
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#6c0443]" /> Private Pool
          </label>
        </div>

        <p className="text-[#6c0443] text-sm mt-2 cursor-pointer underline">See more</p>
      </div>
    </div>
  );
};

export default FilterSidebar;
