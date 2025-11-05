import React from "react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Jobs", href: "#" },
    { name: "Press Kit", href: "#" },
  ];

  const socialIcons = [
    {
      href: "#",
      svg: (
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
      ),
    },
    {
      href: "#",
      svg: (
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
      ),
    },
    {
      href: "#",
      svg: (
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
      ),
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-100 py-12">
      <div className="max-w-screen-lg mx-auto px-4 text-center space-y-8 rounded-lg p-6">
        
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm md:text-base font-semibold tracking-wide">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="relative group text-gray-300 hover:text-pink-400 transition duration-300"
            >
              <span className="relative z-10">{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-pink-400 rounded-full transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mt-4">
          {socialIcons.map((icon, i) => (
            <a
              key={i}
              href={icon.href}
              className="transform hover:scale-110 hover:text-pink-400 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="hover:drop-shadow-[0_0_6px_rgba(255,0,200,0.7)] transition-shadow duration-300"
              >
                {icon.svg}
              </svg>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/50 mt-6"></div>

        {/* Copyright */}
        <p className="text-sm md:text-sm text-gray-400 leading-relaxed px-2 tracking-wide">
          © 2025 <span className="font-bold text-white tracking-wider">Aman Goswami</span>. All rights reserved.
        </p>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="mt-4 px-3 py-2 bg-pink-400/20 text-pink-400 rounded-full font-semibold hover:bg-pink-400/40 hover:scale-110 transition-all duration-300"
        >
          ↑ Back to Top
        </button>
      </div>
    </footer>
  );
}

export default Footer;
