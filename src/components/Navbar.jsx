// src/components/Navbar.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // simple icons
import "./styles/navbar.scss";
import { Link } from "react-router-dom";
import Logo from "../assets/components/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // ↓ Scroll Down → Hide
      setShowNavbar(false);
    } else {
      // ↑ Scroll Up → Show
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const navLinks = ["Home", "About", "Our Products", "Contact"];

  return (
    <nav
      className={`navbar transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="px-4 mx-auto flex items-center justify-between h-auto">
        {/* Left: Logo */}
        <div className="nav-logo font-bold text-yellow-500 cursor-pointer">
          <img src={Logo} alt="" />
        </div>

        {/* Middle: Links (Desktop) */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li
              key={link}
              className="hover:text-yellow-500 cursor-pointer nav-links"
            >
              <Link onClick={() => setIsOpen(false)}
                to={
                  link.toLowerCase() === "home"
                    ? "/"
                    : link.toLowerCase() === "our products"
                    ? "/ourproducts"
                    : `/${link.toLowerCase()}`
                }
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Button */}
        <button className="hidden bg-yellow-500 nav-button px-5 py-1 rounded-full shadow hover:bg-yellow-600 text-md font-medium transition md:inline-block">
          <a href="tel:8107069915"  >
            Call Now
          </a>
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden  bg-yellow-500 text-white px-5 py-2 rounded-full shadow hover:bg-yellow-600 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden  shadow-md px-4 py-4"
          >
            <ul className="flex items-center flex-col space-y-4 text-gray-700 font-medium">
              {navLinks.map((link) => (
                <li
                  key={link}
                  className="hover:text-yellow-500 block w-fit text-center cursor-pointer nav-links"
                >
                  <Link onClick={() => setIsOpen(false)}
                    to={
                      link.toLowerCase() === "home"
                        ? "/"
                        : link.toLowerCase() === "our products"
                        ? "/ourproducts"
                        : `/${link.toLowerCase()}`
                    }
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex justify-center items-center">
              <button className="mt-4 bg-yellow-500 cursor-pointer nav-button px-5 py-1 rounded-full shadow hover:bg-yellow-600 text-md font-medium transition md:inline-block">
                <a href="tel:8107069915">Call Now</a>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
