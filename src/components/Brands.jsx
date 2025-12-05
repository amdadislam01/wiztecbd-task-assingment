import React from 'react';
import brand1 from '../assets/brand-1.png';
import brand2 from '../assets/brand-2.png';
import brand3 from '../assets/brand-3.png';
import brand4 from '../assets/brand-4.png';
import brand5 from '../assets/brand-5.png';

const Brands = () => {
    const logos = [brand1, brand2, brand3, brand4, brand5];

    return (
        <section className="py-20 bg-white relative overflow-hidden">

            {/* Title */}
            <h2 className="text-center text-gray-600 tracking-wide text-xl font-semibold mb-10">
                TRUSTED BY +10,000 CONSULTANTS & ORGANISATIONS
            </h2>

            <div className="relative overflow-hidden rounded-2xl w-full py-6">
                <div className="absolute inset-0 bg-linear-to-r from-[#f7f7f7]  to-[#f7f7f7] opacity-90 rounded-2xl"></div>

                <div className="absolute top-0 left-0 w-48 h-full bg-linear-to-r from-white to-transparent"></div>
                <div className="absolute top-0 right-0 w-48 h-full bg-linear-to-l from-white to-transparent"></div>

                {/* Auto-scrolling row */}
                <div className="overflow-hidden relative">
                    <div className="flex items-center gap-20 animate-marquee whitespace-nowrap opacity-80">

                        {/* Repeat 2X for infinite scroll */}
                        {[...logos, ...logos].map((logo, index) => (
                            <img
                                key={index}
                                src={logo}
                                alt="brand"
                                className="h-12 grayscale opacity-80"
                            />
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brands;
