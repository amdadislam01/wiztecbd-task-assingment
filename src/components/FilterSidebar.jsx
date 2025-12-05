import React from "react";
import { MdLockReset } from "react-icons/md";

const FilterSidebar = () => {
  return (
    <div className="space-y-5 w-full">
      <div className="border border-gray-200 rounded-2xl p-2">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p>Property Preference</p>
          <p className="flex items-center gap-1 bg-gray-200 px-4 py-2 rounded-xl text-sm sm:px-6 sm:py-2">
            Reset Filter <span><MdLockReset size={20} /></span>
          </p>
        </div>
      </div>

      <div className="border border-gray-200 rounded-2xl p-5">
        <h3 className="font-semibold text-lg mb-4">Rent Budget</h3>
        <div className="relative w-full mt-3 mb-6 h-2 rounded-full bg-[#bb8ca9]">
          <div className="absolute top-0 left-0 h-2 bg-[#4c0033] w-1/2 rounded-full"></div>
          <div className="absolute top-1/2 -translate-y-1/2 left-0">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#bb8ca9] rounded-full flex items-center justify-center border-4 border-[#4c0033]"></div>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#bb8ca9] rounded-full flex items-center justify-center border-4 border-[#4c0033]"></div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-2 text-sm">
          <p className="bg-gray-200 px-4 py-2 rounded-xl text-center sm:px-6 sm:py-2">
            Minimum <br /> $300
          </p>
          <p className="bg-gray-200 px-4 py-2 rounded-xl text-center sm:px-6 sm:py-2">
            Maximum <br /> $67000
          </p>
        </div>
      </div>

      <div className="border border-gray-200 rounded-2xl p-5">
        <h3 className="font-semibold text-lg mb-2">Suburb</h3>
        <div className="h-0.5 bg-gray-200 rounded-full mb-2"></div>
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="accent-[#6c0443]" /> Eshelby Drive, Cranbrook
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="accent-[#6c0443]" /> 2–6 Eshelby Dr, Cannovale
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="accent-[#6c0443]" checked /> 59/3 Eshelby Drive Cannovale
          </label>
        </div>
      </div>

      <div className="border border-gray-200 rounded-2xl p-5">
        <h3 className="font-semibold text-lg mb-2">Property Type</h3>
        <div className="h-0.5 bg-gray-200 rounded-full mb-2"></div>
        <div className="space-y-2 text-sm">
          {["House","Land","Appartment","Town House","Villa","Acreage"].map((type, i) => (
            <label key={i} className="flex items-center gap-2">
              <input type="checkbox" className="accent-[#6c0443]" defaultChecked={i > 2}/> {type}
            </label>
          ))}
        </div>
      </div>

      <div className="border border-gray-200 rounded-2xl p-5">
        <h3 className="font-semibold text-lg mb-2">Amenities</h3>
        <div className="h-0.5 bg-gray-200 rounded-full mb-2"></div>
        <div className="space-y-2 text-sm">
          {["Pet-friendly","Parking","Private Pool"].map((amenity, i) => (
            <label key={i} className="flex items-center gap-2">
              <input type="checkbox" className="accent-[#6c0443]" defaultChecked={i === 2}/> {amenity}
            </label>
          ))}
        </div>
        <p className="text-[#6c0443] text-sm mt-2 cursor-pointer underline">See more</p>
      </div>
    </div>
  );
};

export default FilterSidebar;
