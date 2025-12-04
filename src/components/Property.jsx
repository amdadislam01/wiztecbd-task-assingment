import React, { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import FilterSidebar from "./FilterSidebar";

const Property = () => {
  const [properties, setProperties] = useState([]);
  const [page, setPage] = useState(1);

  const itemsPerPage = 6;
  const totalPages = 10;

  useEffect(() => {
    fetch("/property.json")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);

  const paginatedData = properties.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          Property — Showing result: ({properties.length})
        </h2>

        <button className="border border-gray-200 rounded-xl px-4 py-2 flex items-center gap-2 shadow-sm hover:bg-gray-50">
          Sort By: Low to High ▼
        </button>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-3">
          <FilterSidebar />
        </div>

        <div className="col-span-12 md:col-span-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {paginatedData.map((item) => (
              <PropertyCard key={item.id} data={item} />
            ))}
          </div>

          <div className="flex justify-center items-center gap-2 mt-10">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="px-4 py-2 border border-gray-200 rounded-lg bg-white shadow-sm disabled:opacity-40"
            >
              ← Prev
            </button>

            {[1, 2, 3, 4].map((num) => (
              <button
                key={num}
                onClick={() => setPage(num)}
                className={`px-4 py-2 rounded-lg border border-gray-200 shadow-sm ${
                  page === num ? "bg-[#6c0443] text-white" : "bg-white"
                }`}
              >
                {num}
              </button>
            ))}

            <span className="px-3">...</span>

            <button
              onClick={() => setPage(10)}
              className={`px-4 py-2 rounded-lg border border-gray-200 shadow-sm ${
                page === 10 ? "bg-[#6c0443] text-white" : "bg-white"
              }`}
            >
              10
            </button>

            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="px-4 py-2 border border-gray-200 rounded-lg bg-white shadow-sm disabled:opacity-40"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
