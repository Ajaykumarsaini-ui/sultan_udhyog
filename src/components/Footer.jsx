import React from "react";
import "./styles/footer.scss";
import { Link } from "react-router-dom";
import Logo from "../assets/components/Logo.png";
import Trustedseller from "../assets/components/trusted-seller.svg";

const Footer = () => {
  return (
    <footer className="footer bg-gray-900 text-white py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        {/* Logo Section */}
        <div className="logo flex flex-col items-center md:items-start space-y-3">
          <img className="w-36 h-auto" src={Logo} alt="Company Logo" />
          <p className="text-gray-400 text-sm">
            Delivering quality products with trust & care.
          </p>
        </div>

        {/* Quick Links */}
        <div className="quick-links">
          <h1 className="mb-4 text-lg text-black font-semibold border-b-2 border-yellow-500 inline-block pb-1">
            Quick Links
          </h1>
          <ul className="space-y-3">
            <li>
              <Link
                to="/"
                className="hover:text-yellow-400 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-yellow-400 transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/ourproducts"
                className="hover:text-yellow-400 transition-colors duration-300"
              >
                Our Products
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-yellow-400 transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Trusted Seller */}
        <div className="trusted-seller flex flex-col items-center md:items-end space-y-3">
          <img className="w-32" src={Trustedseller} alt="Trusted Seller" />
          <p className="text-gray-400 text-sm">100% Verified & Certified</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Sultan Udhyog. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
