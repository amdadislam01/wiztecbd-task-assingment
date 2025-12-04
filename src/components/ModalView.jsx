import React, { useState } from "react";

const ModalView = ({ data, onClose }) => {
  const [mainImage, setMainImage] = useState(data.images[0]);

  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-40 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full relative p-6">

        <button
          className="absolute top-4 right-4 text-3xl px-2 py-1.2 bg-gray-50 border border-gray-200 rounded-full font-bold text-gray-700 hover:text-gray-900 cursor-pointer"
          onClick={onClose}
        >
          ×
        </button>

        <div className="w-full h-96 md:h-112 mb-4">
          <img
            src={mainImage}
            className="w-full h-full object-cover rounded-2xl shadow-inner"
          />
        </div>

        <div className="flex gap-3 overflow-x-auto py-2">
          {data.images.map((img, i) => (
            <img
              key={i}
              src={img}
              onClick={() => setMainImage(img)}
              className={`w-28 h-20 object-cover rounded-xl cursor-pointer border-3 ${
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
