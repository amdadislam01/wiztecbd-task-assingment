import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
  FaThreads,
  FaTiktok,
} from "react-icons/fa6";
import wiztecBD from "/WiztecBD.png";

const Footer = () => {
  return (
    <footer
      className="relative px-6 md:px-16 pt-20 pb-0"
      style={{
        background: "linear-gradient(180deg, #251621, #42233A 60%)",
        borderTopLeftRadius: "30px",
        borderTopRightRadius: "30px",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 text-white mb-12 gap-10 max-w-[1500px] mx-auto px-6">
        <div>
          <h3 className="font-semibold text-[20px] mb-4">About Us</h3>
          <ul className="space-y-2 text-[#d7d4d4] text-[15px]">
            <li>Resources</li>
            <li>Company</li>
            <li>Property</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-[20px] mb-4">Contact Us</h3>
          <p className="text-[#d7d4d4] text-[15px]">hello abc@gmail.com</p>
          <p className="text-[#d7d4d4] text-[15px] mt-1">+012233455667</p>
        </div>

        <div>
          <h3 className="font-semibold text-[20px] mb-4">Follow Us</h3>
          <div className="flex items-center gap-4 text-white text-[20px]">
            <span className="p-[6px] rounded-full border border-white">
              <FaFacebookF />
            </span>
            <span className="p-[6px] rounded-full border border-white">
              <FaXTwitter />
            </span>
            <span className="p-[6px] rounded-full border border-white">
              <FaInstagram />
            </span>
            <span className="p-[6px] rounded-full border border-white">
              <FaWhatsapp />
            </span>
            <span className="p-[6px] rounded-full border border-white">
              <FaThreads />
            </span>
            <span className="p-[6px] rounded-full border border-white">
              <FaTiktok />
            </span>
          </div>
          <br />
          <div className="text-[#d7d4d4] text-[14px] mb-6 md:mb-8">
            © 2025 Havenix. All rights reserved.
          </div>
        </div>
      </div>

      {/* Full Width Image */}
      <div className="w-full">
        <img
          src={wiztecBD}
          alt="WiztecBD"
          className="w-full h-auto object-cover"
        />
      </div>
    </footer>
  );
};

export default Footer;
