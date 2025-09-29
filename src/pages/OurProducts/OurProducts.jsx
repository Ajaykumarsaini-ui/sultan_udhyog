"use client";
import React from "react";
import { motion } from "framer-motion";
import "./products.scss";
import chips from "../../assets/home/ch.jpeg";
import sev from "../../assets/products/Raw-Potato-Sev.jpg";
import lining from "../../assets/home/Chips-Lining.jpg";
import jali from "../../assets/products/Non-Fried-Potato-Chips-Jali.jpg";
import lokeraloo from "../../assets/products/Raw-Potato-Chips-Locker-Aalu.jpeg";
import Button from "../../components/Button";
import banner from "../../assets/home/Hero_banner.jpg";

const OurProducts = () => {
  const ourProducts = [
    {
      name: "Raw Potato Chips",
      image: chips,
      desc: "Crisp and fresh raw potato chips, perfect for frying and seasoning to your taste. Ideal for both home use and bulk supply."
    },
    {
      name: "Raw Potato Sev",
      image: sev,
      desc: "Made from high-quality potatoes, this sev is crunchy and tasty. Best for snacks industries and household kitchens."
    },
    {
      name: "Raw Potato Chips Lining",
      image: lining,
      desc: "Uniformly cut potato chips with lining texture, specially designed for commercial use to ensure perfect frying and crispness."
    },
    {
      name: "Non Fried Potato Chips Jali",
      image: jali,
      desc: "Healthy and unique jali-cut potato chips, non-fried and ready for multiple cooking styles – bake, air-fry or fry."
    },
    {
      name: "Raw Potato Chips Locker Aalu",
      image: lokeraloo,
      desc: "Special locker aalu variety known for long shelf life, freshness and quality, making it suitable for bulk buyers and suppliers."
    },
  ];

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="products-page min-h-screen">
      {/* 🔹 Banner Section */}
      <motion.div
        className="banner"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      >
        <img
          className="w-full md:h-auto h-[300px]"
          src={banner}
          alt="Company Banner"
        />
      </motion.div>

      <div className="container mx-auto px-6 mt-18 lg:px-20">
        {/* 🔹 Main Heading + Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Products
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            We deliver premium-quality potato-based products, crafted with care 
            and precision. Our range includes chips, sev, and special potato 
            varieties, suitable for households, restaurants, and bulk buyers. 
            With freshness, crunch, and taste guaranteed, our products meet 
            the expectations of both everyday customers and large-scale suppliers.
          </p>
        </motion.div>

        {/* 🔹 Products Grid */}
        <div className="grid gap-x-6 gap-y-16 sm:grid-cols-1 pb-6 lg:grid-cols-2">
          {ourProducts.map((product, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="product-card bg-white rounded-sm shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <div className="relative group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-74 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <span className="text-white text-lg font-semibold">
                    {product.name}
                  </span>
                </div>
              </div>
              <div className="px-4 py-6 space-y-3 text-center">
                <h2 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.desc}
                </p>
                <div className="flex justify-center">
                  <Button name="Buy Now" to="/contact" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
