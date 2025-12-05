import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
  FaThreads,
  FaTiktok,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <footer
      className="relative px-6 md:px-16 pt-20 pb-10"
      style={{
        background: "linear-gradient(180deg, #251621, #42233A 60%)",
        borderTopLeftRadius: "30px",
        borderTopRightRadius: "30px",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 text-white mb-112 gap-10 max-w-[1500px] mx-auto px-6">
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
            <div className="text-[#d7d4d4] text-[14px] mb-10">
              © 2025 Havenix. All rights reserved.
            </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none">
        <h1 className="text-[140px] md:text-[420px] font-extrabold tracking-tight text-white opacity-[0.3] leading-none">
          WiztecBD
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
