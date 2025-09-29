import React from "react";
import "./home.scss";
import chips from "../../assets/home/ch.jpeg";
import { motion } from "framer-motion";
import Button from "../../components/Button";
import Banner from "../../assets/home/Hero_banner.jpg";
import sev from "../../assets/home/sev.jpeg";
import lining from "../../assets/home/Chips-Lining.jpg";


const Home = () => {
  const products = [
    {
      name: "Raw Potato Chips",
      image: chips,
    },
    {
      name: "Raw Potato Sev",
      image: sev,
    },
    {
      name: "Raw Potato Chips Lining",
      image: lining,
    },
  ];

  return (
    <div>
      {/* hero */}
      <section className="px-4 py-4 hero bg-gradient-to-r from-yellow-100 via-yellow-50 to-white min-h-[100dvh] flex items-center">
        <div className="mx-auto w-full flex flex-col  md:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <motion.div
            className="flex-1 text-center md:text-left space-y-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              <span className="welcome">WELCOME TO</span>
              <br />
              <span className=" name">SULTAN UDHYOG</span>
              <br />
              <span className=" font-semibold slogan">
                MANUFACTURER RAW POTATO CHIPS
              </span>
            </h1>
            <p className=" text-lg md:text-xl punchline">
              We are dealing with orders of 1 ton or more.
            </p>
            <Button to="/contact" name="Order Now" />
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={chips}
              alt="Potato Chips"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* banner  */}
      <section className="banner  my-16">
        <img
          className="w-full md:h-auto h-[300px]"
          src={Banner}
          alt="Company Banner"
        />{" "}
      </section>

      {/* products */}

      <section className="py-16 products bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-sm product-card overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold product-name">
                    {product.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button to="/ourproducts" name="View All Products" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
