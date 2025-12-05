import React, { useState } from "react";

const ModalView = ({ data, onClose }) => {
  const [mainImage, setMainImage] = useState(data.images[0]);

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl relative p-4 sm:p-6">

        <button
          className="absolute top-4 right-4 text-2xl sm:text-3xl px-2 py-1 bg-gray-50 border border-gray-200 rounded-full text-gray-700 hover:text-gray-900"
          onClick={onClose}
        >
          ×
        </button>

        <div className="w-full h-64 sm:h-96 md:h-112 mb-3 sm:mb-4">
          <img
            src={mainImage}
            className="w-full h-full object-cover rounded-2xl shadow-inner"
          />
        </div>

        <div className="flex gap-2 sm:gap-3 overflow-x-auto py-2">
          {data.images.map((img, i) => (
            <img
              key={i}
              src={img}
              onClick={() => setMainImage(img)}
              className={`w-20 h-16 sm:w-28 sm:h-20 object-cover rounded-xl cursor-pointer border-2 ${
                mainImage === img
                  ? "border-[#9d5781]"
                  : "border-gray-200 hover:border-[#9d5781]"
              } transition`}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default ModalView;
