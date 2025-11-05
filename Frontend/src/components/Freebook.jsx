import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Cards";
import { useNavigate } from "react-router-dom";

function Freebook() {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        const filtered = res.data.filter(
          (item) => item.category?.toLowerCase() === "free"
        );
        setBook(filtered);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };
    getBook();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-gradient-to-br from-purple-800 via-indigo-900 to-gray-900 py-16">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center md:items-start gap-12">

        <div className="w-full md:w-1/3 text-center md:text-left space-y-6 order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-snug">
            🎓 Free Offered <span className="text-purple-300">Courses</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Explore our collection of free courses and enhance your skills with
            top-quality content designed by experts. Start learning today and
            unlock your potential for free!
          </p>

          <button
            onClick={() => navigate("/course")}
            className="mt-4 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-pink-400/50"
          >
            🚀 Start Learning Now
          </button>
        </div>

        <div className="w-full md:w-2/3 order-1 md:order-2">
          {loading ? (
            <p className="text-center text-gray-300">Loading books...</p>
          ) : book.length === 0 ? (
            <p className="text-center text-red-400 font-medium">
              No free books found. Check your backend data.
            </p>
          ) : (
            <Slider {...settings}>
              {book.map((item) => (
                <div key={item._id || item.id} className="px-3">
                  <div className="transform hover:scale-105 transition duration-300">
                    <Cards item={item} />
                  </div>
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
    </section>
  );
}

export default Freebook;
