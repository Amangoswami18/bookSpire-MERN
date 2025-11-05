import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        // ✅ Only Paid Books
        const paidBooks = res.data.filter(
          (item) => item.category?.toLowerCase() === "paid"
        );
        setBook(paidBooks);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Welcome to our BookSpire — a space where stories inspire, knowledge empowers,
            and imagination knows no limits. Explore a thoughtfully curated collection
            of <span className="font-semibold text-pink-500">premium paid books</span>,
            from timeless classics to modern bestsellers, each crafted to spark curiosity
            and fuel your passion for learning. Whether you’re a lifelong reader or just
            beginning your journey, discover your next favorite read today!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          {book.length === 0 ? (
            <p className="text-center text-red-500 font-medium col-span-4">
              No paid books found. Check your backend data.
            </p>
          ) : (
            book.map((item) => (
              <Cards key={item._id || item.id} item={item} />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Course;
