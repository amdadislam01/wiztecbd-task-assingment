import React, { useState } from "react";
import ModalView from "./ModalView";
import bed from '../assets/bed.png';
import bathroom from '../assets/bathroom.png';
import arrow from '../assets/arrow.png';

const PropertyCard = ({ data }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="cursor-pointer rounded-xl overflow-hidden hover:shadow-md transition"
      >
        <img src={data.thumbnail} className="w-full h-56 object-cover rounded-2xl" />
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-1">
            <img src={bed} alt="Bed-Image" />
            <p className="text-gray-500 text-sm">Bed - 0{data.beds}</p>
          </div>
          <div className="flex items-center gap-1">
            <img src={bathroom} alt="Bed-Image" />
            <p className="text-gray-500 text-sm">Bathroom - 0{data.bathrooms}</p>
          </div>
          <div className="flex items-center gap-1">
            <img src={arrow} alt="Bed-Image" />
            <p className="text-gray-500 text-sm">{data.size}</p>
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-lg">{data.title}</h3>

          <p className="mt-3 text-lg font-bold flex items-center">
            ${data.price}
            <span className="text-sm text-gray-500">/week </span>
            <p className="text-gray-500 text-sm font-semibold"> . {data.location}</p>
          </p>
        </div>
      </div>

      {open && <ModalView data={data} onClose={() => setOpen(false)} />}
    </>
  );
};

export default PropertyCard;
