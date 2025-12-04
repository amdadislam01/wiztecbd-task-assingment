import { useState } from "react";
import homeIcon from "/logo.png";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";

const Navbar = () => {
    const [open, setOpen] = useState(false);
  return (
    <nav className="w-full bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo  */}
        <div className="flex items-center gap-2">
          <img src={homeIcon} alt="home" className="w-8 h-8" />
          <span className="text-2xl font-bold text-pink-700">WiztecBD</span>
        </div>

        {/*  Menu-bar */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li className="cursor-pointer hover:text-pink-600 font-bold">Buy</li>
          <li className="cursor-pointer hover:text-pink-600">Rent</li>
          <li className="cursor-pointer hover:text-pink-600">Sell</li>
          <li className="cursor-pointer hover:text-pink-600">Agents</li>
          <li className="cursor-pointer hover:text-pink-600">Blogs</li>
          <li className="cursor-pointer hover:text-pink-600">Contact Us</li>
        </ul>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-1 cursor-pointer">
            <AiOutlineHeart className="w-5 h-5 text-gray-700" />
            <span className="text-gray-700 font-medium">Favourite</span>
          </div>

          <button className="bg-[#5c375a] text-white px-5 py-2 rounded-full hover:bg-[#492c47] transition">
            Login Now
          </button>
        </div>

        <div
          className="md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <HiX className="w-7 h-7 text-gray-700" />
          ) : (
            <HiOutlineMenu className="w-7 h-7 text-gray-700" />
          )}
        </div>
      </div>

      <div
        className={`md:hidden bg-white px-4 overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 text-gray-700 font-medium">
          <li className="cursor-pointer font-bold">Buy</li>
          <li className="cursor-pointer">Rent</li>
          <li className="cursor-pointer">Sell</li>
          <li className="cursor-pointer">Agents</li>
          <li className="cursor-pointer">Blogs</li>
          <li className="cursor-pointer">Contact Us</li>
        </ul>

        <div className="flex items-center gap-2 mt-4">
          <AiOutlineHeart className="w-5 h-5 text-gray-700" />
          <span className="text-gray-700 font-medium">Favourite</span>
        </div>

        <button className="mt-4 w-full bg-[#5c375a] text-white py-2 rounded-full">
          Login Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
