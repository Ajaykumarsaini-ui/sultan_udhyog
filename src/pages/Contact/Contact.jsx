"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react"; // ✅ Lucide Icons
import "./contact.scss";
import Button from "../../components/Button";
import banner from "../../assets/home/Hero_banner.jpg";
import emailjs from "@emailjs/browser";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";


const Contact = () => {
  const [formdata, setFormData] = useState({
    mobileno: "",
    quantity: "",
    address: "",
    message: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);

    emailjs.init("dkjK35-tnv0U1IsTJ");

    emailjs
      .send(
        "service_nyosl8n",
        "template_ci638s1",
        formdata,
        "dkjK35-tnv0U1IsTJ"
      )
      .then((result) => {
        console.log("Email sent successfully!");
        toast.success("Product order sent successfully!");
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      })
      .finally(() => {
        setFormData({
          mobileno: "",
          quantity: "",
          address: "",
          message: "",
        });
      });
  };

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="contact min-h-screen">
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar closeOnClick pauseOnHover draggable theme="dark" limit={1} className="toast-container" style={{ zIndex: 9999 }}  />
      {/* 🔹 Banner Section */}
      <motion.div
        className="banner"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      >
        <img
          className="w-full md:h-auto h-[200px]"
          src={banner}
          alt="Company Banner"
        />
      </motion.div>

      {/* 🔹 Contact Section */}
      <div className="contact-container mx-auto px-6 lg:px-20 py-16 grid lg:grid-cols-2 gap-12">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="left-content flex flex-col justify-center"
        >
          <h1 className="text-4xl contact-heading font-bold text-gray-800 mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            We value your interest in our products. Whether you’re a wholesaler,
            retailer, or direct customer, our team is here to help you with
            inquiries, bulk orders, or special requirements. Please share your
            details, and we’ll get back to you quickly.
          </p>

          <div className="mt-8 text-gray-700 space-y-4">
            <p className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-yellow-500" />
              <span>
                <span className="font-semibold">Office Address : </span> Alwar,
                India
              </span>
            </p>
            <p className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-yellow-500" />
              <span>
                <span className="font-semibold">Phone:</span> +91 8107069915
              </span>
            </p>
            <p className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-yellow-500" />
              <span>
                <span className="font-semibold">Email:</span>{" "}
                rs9796210@gmail.com{" "}
              </span>
            </p>
          </div>
        </motion.div>

        {/* Right Content → Contact Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
          className="right-content bg-white shadow-lg rounded-2xl p-8"
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-left">
            Contact Us
          </h2>
          <form onSubmit={onFormSubmit} className="space-y-6">
            {/* Mobile Number */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Mobile Number
              </label>
              <input
                type="tel"
                placeholder="Enter your mobile number"
                required
                name="mobileno"
                onChange={(e) =>
                  setFormData({ ...formdata, mobileno: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            {/* Quantity */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Quantity
              </label>
              <input
                type="number"
                required
                name="quantity"
                placeholder="Enter quantity in kg"
                onChange={(e) =>
                  setFormData({ ...formdata, quantity: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            {/* Address */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Address
              </label>
              <textarea
                rows="1"
                required
                name="address"
                placeholder="Enter your address"
                onChange={(e) =>
                  setFormData({ ...formdata, address: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
            </div>
            {/* Message */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                rows="2"
                required
                name="message"
                onChange={(e) =>
                  setFormData({ ...formdata, message: e.target.value })
                }
                placeholder="Write your message here..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
            </div>
            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="mt-4 px-6 cursor-pointer py-2 bg-yellow-600 text-white font-semibold rounded-lg shadow-md"
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
