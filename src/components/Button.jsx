import React from "react";
import { motion } from "framer-motion";
import {Link} from "react-router-dom";

const Button = ({ name = "Button", type = "button", to = "/", onClick = () => {} }) => {
  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type={type}
        onClick={onClick}
        className="mt-4 px-6 py-2 bg-yellow-600 text-white font-semibold rounded-lg shadow-md"
      >
        <Link to={to}>
        {name}
        </Link>
      </motion.button>
    </div>
  );
};

export default Button;
