import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Rocket, TrendingUp } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          About <span className="gradient-text">IntegralSAT</span>
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Pioneering the future of space technology with innovative solutions and unwavering commitment to excellence.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c7da"
            alt="Team of diverse professionals collaborating in a modern office"
            className="rounded-xl shadow-2xl w-full h-auto object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Our Story</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Founded in [Year], IntegralSAT emerged from a shared passion for space exploration and a desire to make complex space technologies accessible and reliable. Our journey began with a small team of dedicated engineers and a big vision: to empower a new era of space missions.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Over the years, we've grown into a trusted partner for organizations worldwide, delivering cutting-edge space and ground segment solutions. Our commitment to innovation, quality, and customer success remains at the core of everything we do.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-8">Our Mission & Vision</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center text-blue-500 dark:text-blue-400 mb-3">
              <Target className="h-8 w-8 mr-3" />
              <h3 className="text-xl font-semibold">Our Mission</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              To provide innovative, reliable, and cost-effective space technology solutions that enable our clients to achieve their mission objectives and push the boundaries of exploration and discovery.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center text-purple-500 dark:text-purple-400 mb-3">
              <Rocket className="h-8 w-8 mr-3" />
              <h3 className="text-xl font-semibold">Our Vision</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              To be a global leader in space technology, recognized for our pioneering spirit, engineering excellence, and our contribution to making space accessible for a better future.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-8">Why Choose IntegralSAT?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <Users className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Highly skilled engineers and professionals passionate about space.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <TrendingUp className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Innovative Solutions</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Cutting-edge technology tailored to your mission needs.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <Rocket className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Mission Focused</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Dedicated to your success from concept to completion.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;