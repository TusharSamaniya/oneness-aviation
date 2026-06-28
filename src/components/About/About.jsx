import React from 'react';
import { motion } from 'framer-motion';
import { FaPlane } from 'react-icons/fa';
import './About.css';
import About1 from '../../assets/About1.webp';
import About2 from '../../assets/About2.webp';

export default function About() {
  return (
    <section className="about">
      <div className="about__left">

        {/* Animated Airplane */}
        <motion.div
          className="about__plane"
          animate={{
            x: [0, 80, 160, 80, 0],     // Left → Right → Left
            y: [0, -40, -80, -40, 0],   // Up and Down
            rotate: [0, 15, -10, 0]     // Rotate while flying
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FaPlane size={30} color="#C9A84C" />
        </motion.div>

        <div className="about__images">
          <img src={About1} alt="Aviation 1" className="img-box large" />
          <img src={About2} alt="Aviation 2" className="img-box small" />
        </div>
      </div>

      <div className="about__right">
        <h4 className="about__label">About Us</h4>

        <h2 className="about__title">
          Make Your Golden Memory With Us!
        </h2>

        <p className="about__text">
          Oneness Aviation is a registered private limited company that offers
          charter services in India. Founded by professionals with over 15 years
          of experience in the aviation sector, we ensure efficient and best
          quality service for all your travel requirements.
        </p>

        <div className="about__cta">
          <p>
            <strong>Call for booking:</strong> +91 99995 06969
          </p>

          <button className="read-more">
            Read More &gt;
          </button>
        </div>
      </div>
    </section>
  );
}