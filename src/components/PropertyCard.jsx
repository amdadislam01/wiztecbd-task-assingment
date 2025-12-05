import React, { useState } from "react";
import ModalView from "./ModalView";
import bed from "../assets/bed.png";
import bathroom from "../assets/bathroom.png";
import arrow from "../assets/arrow.png";

const PropertyCard = ({ data }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="cursor-pointer rounded-xl overflow-hidden hover:shadow-md transition w-full max-w-full"
      >
        <img
          src={data.thumbnail}
          className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover rounded-2xl"
        />

        <div className="flex flex-wrap justify-between items-center mt-3 px-1 gap-3">
          <div className="flex items-center gap-1">
            <img src={bed} alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
            <p className="text-gray-500 text-xs sm:text-sm">Bed - 0{data.beds}</p>
          </div>

          <div className="flex items-center gap-1">
            <img src={bathroom} alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
            <p className="text-gray-500 text-xs sm:text-sm">
              Bathroom - 0{data.bathrooms}
            </p>
          </div>

          <div className="flex items-center gap-1">
            <img src={arrow} alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
            <p className="text-gray-500 text-xs sm:text-sm">{data.size}</p>
          </div>
        </div>

        <div className="p-3 sm:p-4">
          <h3 className="font-semibold text-base sm:text-lg">{data.title}</h3>

          <div className="mt-2 flex flex-wrap items-center gap-1 text-base sm:text-lg font-bold">
            <span>${data.price}</span>
            <span className="text-gray-500 text-xs sm:text-sm font-normal">
              /week
            </span>
            <span className="text-gray-500 text-xs sm:text-sm font-semibold">
              • {data.location}
            </span>
          </div>
        </div>
      </div>

      {open && <ModalView data={data} onClose={() => setOpen(false)} />}
    </>
  );
};

export default PropertyCard;
