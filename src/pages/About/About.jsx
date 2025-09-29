import React from "react";
import { motion } from "framer-motion";
import "./about.scss";
import banner from "../../assets/home/Hero_banner.jpg";

const About = () => {
  const owner = {
    name: "Rahul Saini",
    role: "Founder & CEO",
    image: "/images/owner.jpg",
  };

  const employees = [
    { name: "Amit Verma", role: "Production Manager", image: "/images/emp1.jpg" },
    { name: "Neha Singh", role: "Quality Analyst", image: "/images/emp2.jpg" },
    { name: "Vikram Yadav", role: "Machine Operator", image: "/images/emp3.jpg" },
  ];

  // Variants for animations
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <>
      {/* 🔹 Banner Section */}
      <motion.div
        className="banner mt-0 pt-0"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      >
        <img
          className="w-full md:h-auto h-[200px]"
          src={banner}
          alt="Company Banner"
        />
      </motion.div>



      {/* 🔹 Company Overview */}
      <div className=" flex items-center flex-col justify-center">
      <section className="company-overview container px-6 lg:px-16 py-16 text-center">
        <motion.h1
          className="company-overview-heading mb-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Company Overview
        </motion.h1>

        <motion.p
          className="punchline max-w-4xl mx-auto leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="font-bold name">Sultan Udhyog</span> is a reliable
          manufacturer, exporter and supplier of Raw Potato Chips, Raw Potato Sev,
          Raw Potato Jaali, Raw Potato Wafers, etc. Made with high grade
          ingredients, these food items possess rich taste, high aroma, purity and
          flavor. Due to such features and quality, our range is widely consumed as
          snacks in breakfast and brunch. We pack such quality proven range in
          durable and food grade packaging material available in varying sizes and
          capacities.
        </motion.p>
      </section>

      </div>

      {/* 🔹 Team Section */}
      <section className="founder py-20 px-6 lg:px-16 bg-gray-50">
        <div className="container max-w-6xl mx-auto">
          <motion.h2
            className="heading mb-12 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our Team
          </motion.h2>

          {/* Owner Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={owner.image}
              alt={owner.name}
              className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full mx-auto shadow-xl border-4 border-gray-200"
            />
            <h3 className="name mt-6">{owner.name}</h3>
            <p className="role">{owner.role}</p>
            <p className="overview mt-6 max-w-3xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cum at
              necessitatibus, saepe molestias quas quia asperiores aspernatur nulla
              ut laborum nesciunt fugit dicta. Expedita maxime atque perferendis
              enim voluptates doloremque delectus dolorem perspiciatis. In,
              provident! Libero labore officiis veniam repellendus repellat soluta
              porro, temporibus quod!
            </p>
          </motion.div>

          {/* Employees Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {employees.map((emp, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
                variants={fadeUp}
              >
                <img
                  src={emp.image}
                  alt={emp.name}
                  className="w-28 h-28 object-cover rounded-full mx-auto mb-4 shadow-md border-2 border-gray-100"
                />
                <h4 className="text-lg font-semibold text-gray-800">{emp.name}</h4>
                <p className="text-sm text-gray-500">{emp.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
