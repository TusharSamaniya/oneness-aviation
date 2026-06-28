import React from "react";
import { motion } from "framer-motion"; // Importing animation tool
import { FaMapMarkerAlt, FaCalculator, FaPlane } from "react-icons/fa";
import "./HowItWorks.css";

const steps = [
  { icon: <FaMapMarkerAlt />, title: "Tell us your route", desc: "Select your departure and arrival destinations." },
  { icon: <FaCalculator />, title: "Get your quote", desc: "Receive a transparent price estimate in minutes." },
  { icon: <FaPlane />, title: "Board and fly", desc: "Arrive at the private terminal and take off." },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2 className="title">How It Works</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <motion.div 
            className="step-card"
            key={index}
            initial={{ opacity: 0, y: 50 }} // Starts invisible and slightly down
            whileInView={{ opacity: 1, y: 0 }} // Animates into view
            transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered delay
          >
            <div className="icon-circle">{step.icon}</div>
            <h3 className="step-number">0{index + 1}</h3>
            <h4>{step.title}</h4>
            <p>{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;