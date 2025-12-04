import React, { useState } from "react";
import ModalView from "./ModalView";

const PropertyCard = ({ data }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="cursor-pointer rounded-xl overflow-hidden hover:shadow-md transition"
      >
        <img src={data.thumbnail} className="w-full h-56 object-cover rounded-2xl" />

        <div className="p-4">
          <h3 className="font-semibold text-lg">{data.title}</h3>
          <p className="text-gray-500 text-sm">{data.location}</p>

          <p className="mt-3 text-lg font-bold">
            ${data.price}
            <span className="text-sm text-gray-500">/week</span>
          </p>
        </div>
      </div>

      {open && <ModalView data={data} onClose={() => setOpen(false)} />}
    </>
  );
};

export default PropertyCard;
