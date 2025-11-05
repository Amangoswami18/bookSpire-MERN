import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-gray-900 text-white py-16 px-6 md:px-20">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-8 px-4 py-2 bg-pink-500 hover:bg-pink-600 rounded-lg text-white font-semibold transition-all duration-300"
      >
        ← Back
      </button>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-6 text-gradient bg-clip-text text-transparent bg-pink-500">
          About Us
        </h1>
        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
          Welcome to <span className="font-semibold text-pink-500">bookSpire</span>! 
          Our mission is to make learning accessible, fun, and immersive. We provide a wide range of free and paid books and courses for learners of all ages.
        </p>
        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
          Our platform is designed to enhance your knowledge journey with carefully curated resources, modern UI, and a focus on interactivity. We believe in lifelong learning and innovation.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-3 text-pink-500">Our Vision</h2>
            <p className="text-gray-300">
              To empower every learner with high-quality content, accessible anytime, anywhere.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-3 text-pink-500">Our Mission</h2>
            <p className="text-gray-300">
              To build a platform where knowledge meets creativity, and learning becomes an engaging journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
