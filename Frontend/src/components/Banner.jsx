import React, { useState } from "react";
import banner from "../../public/Banner.png";

function Banner() {
  const [email, setEmail] = useState("");

  const handleGetStarted = () => {
    setEmail(""); 
  };

  return (
    <section className="relative overflow-hidden bg-gray-900 text-white">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 "></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96"></div>
        <div className="absolute top-20 right-1/2 w-80 h-80 "></div>
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-20 py-20 md:py-32 flex flex-col-reverse md:flex-row items-center gap-12">

        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-snug text-white drop-shadow-xl">
            Welcome to <span className="text-pink-500">Next-Level Learning</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            Experience a futuristic, immersive learning journey. Explore new skills and ideas every day in a sleek, modern environment.
          </p>

          {/* Email Input & Button */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <label className="flex items-center bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-pink-500 transition backdrop-blur-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-5 h-5 text-gray-400 mr-2"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="outline-none w-full text-white placeholder-gray-400 bg-transparent"
              />
            </label>
            <button
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold py-3 px-6 rounded-xl shadow-xl hover:scale-105 transform transition-all duration-300"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl ring-2 ring-pink-500/40 transform hover:scale-105 transition duration-100">
            <img
              src={banner}
              alt="Banner"
              className="w-full max-w-md object-cover"
            />
          </div>
          {/* Neon Glow Accent */}
          <div className="absolute -top-16 -right-16 w-36 h-36 "></div>
          <div className="absolute -bottom-12 -left-12 w-48 h-48 "></div>
        </div>

      </div>
    </section>
  );
}

export default Banner;
