import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import loginImage from "../assets/login.png";
import homeIcon from "/logo.png";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        <div className="px-8 py-12 lg:px-20 lg:py-16 flex flex-col justify-center">
          <div className="mb-12 flex justify-center flex-col items-center">
            <div className="flex items-center gap-2">
              <img src={homeIcon} alt="home" className="w-8 h-8" />
              <span className="text-2xl font-bold text-pink-700">WiztecBD</span>
            </div>
            <div className="flex items-center flex-col mt-4">
              <p className="text-3xl font-bold text-gray-900 mt-1">
                Welcome Back
              </p>
              <p className="text-lg text-gray-600">
                Let's login to grab amazing deal
              </p>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <button className="w-full flex items-center justify-center gap-4 bg-white border border-gray-300 rounded-xl py-4 hover:bg-gray-50 transition font-medium text-gray-700">
              <FcGoogle className="text-2xl" />
              Continue with Google
            </button>
            <button className="w-full flex items-center justify-center gap-4 bg-white border border-gray-300 rounded-xl py-4 hover:bg-gray-50 transition font-medium text-gray-700">
              <FaApple className="text-2xl" />
              Continue with Apple
            </button>
          </div>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-6 text-gray-500 text-sm">Or</span>
            </div>
          </div>

          <form className="space-y-6">
            <input
              type="email"
              defaultValue="rownok@gmail.com"
              className="w-full px-6 py-5 border border-gray-300 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C0443]"
              placeholder="Email"
            />

            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                className="w-full px-6 py-5 border border-gray-300 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C0443] pr-14"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPass ? (
                  <AiOutlineEyeInvisible size={24} />
                ) : (
                  <AiOutlineEye size={24} />
                )}
              </button>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-[#6C0443] rounded border-gray-300"
                />
                <span className="text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-[#6C0443] font-medium underline">
                Forgot Password?
              </a>
            </div>

            <button className="w-full bg-[#6C0443] text-white text-lg font-semibold py-5 rounded-2xl shadow-md">
              Login
            </button>
          </form>

          <p className="text-center mt-10 text-gray-600">
            Don't have an account?{" "}
            <a href="#" className="text-[#6C0443] font-bold underline">
              Sign Up
            </a>
          </p>
        </div>

        <div className="mt-16">
          <img src={loginImage} alt="login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
