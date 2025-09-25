import React from "react";
import "./styles/footer.scss";
import { Link } from "react-router-dom";
import Logo from "../assets/components/Logo.png";
import Trustedseller from "../assets/components/trusted-seller.svg";

const Footer = () => {
  return (
    <div className="footer p-6 mt-10">
      <div className="container flex justify-between items-center">
        <div className="logo">
          <img className="w-50 h-50" src={Logo} alt="" />
        </div>

        <div className="quick-links">
          <h1 className="mb-4 link-heading">Quick Links</h1>
          <ul className="space-y-3">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/ourproducts">Our Products</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="trusted-seller">
          <img src={Trustedseller} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
