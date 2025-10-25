import React from "react";
import { Link } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <motion.div
        className="max-w-5xl mx-auto px-6 py-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.p
          className="text-2xl font-bold text-pink-600 mb-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          An engaging online library for discovering and supporting game
          developers. Users can browse indie games, see detailed information,
          and install if you like them.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h2 className="text-2xl text-blue-600 font-bold mb-3">Our Mission</h2>
          <p className="text-gray-700 mb-10">
            Gamehub aims to connect players and developers in one place — making
            indie games more discoverable, encouraging creativity, and providing
            a platform to support unique gaming experiences.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <h2 className="text-2xl text-purple-600 font-bold mb-3">
            Key Features
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-10">
            <li>Browse hundreds of indie and trending games</li>
            <li>Read detailed information and developer profiles</li>
            <li>Install or download your favorite games easily</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <h2 className="text-2xl text-green-600 font-bold mb-3">
            Your Opinions
          </h2>
          <p className="text-gray-700">
            If you have any complain about our service you can inform us through
            our official email address. We will be glad to hear that and improve
            our quality of gaming service. Thank you for visiting our website.
          </p>
        </motion.div>
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
         
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
