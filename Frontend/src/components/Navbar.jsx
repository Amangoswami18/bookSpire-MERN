import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";

function Navbar() {
  const [authUser] = useAuth();
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = (
    <>
      <li>
        <Link
          to="/"
          className="block py-2 text-gray-700 font-medium hover:text-purple-600 transition-colors duration-200"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/course"
          className="block py-2 text-gray-700 font-medium hover:text-purple-600 transition-colors duration-200"
          onClick={() => setMenuOpen(false)}
        >
          Course
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className="block py-2 text-gray-700 font-medium hover:text-purple-600 transition-colors duration-200"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="block py-2 text-gray-700 font-medium hover:text-purple-600 transition-colors duration-200"
          onClick={() => setMenuOpen(false)}
        >
          About
        </Link>
      </li>
    </>
  );

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        sticky ? "backdrop-blur-lg bg-white/70 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold text-purple-700 tracking-tight hover:scale-105 transition-transform duration-200"
        >
          bookSpire
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">{navItems}</ul>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {authUser ? (
            <Logout />
          ) : (
            <>
              <button
                onClick={() =>
                  document.getElementById("my_modal_3")?.showModal()
                }
                className="bg-purple-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-purple-700 transition-all duration-300 hover:scale-105"
              >
                Login
              </button>
              <Login />
            </>
          )}
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-gray-700 text-3xl focus:outline-none hover:text-purple-600 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md rounded-b-2xl px-6 py-4 space-y-2">
          <ul className="flex flex-col space-y-2">{navItems}</ul>
          <div className="mt-3">
            {authUser ? (
              <Logout />
            ) : (
              <>
                <button
                  onClick={() => {
                    document.getElementById("my_modal_3")?.showModal();
                    setMenuOpen(false);
                  }}
                  className="w-full bg-purple-600 text-white py-2 rounded-full hover:bg-purple-700 transition-all duration-300"
                >
                  Login
                </button>
                <Login />
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
