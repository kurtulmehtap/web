import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, RadioTower, Satellite, Cpu, ChevronLeft, ChevronRight as ChevronRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

const images = [
  {
    src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/f1e8daa8-e835-4d88-993f-143a511f99bc/99f81501c19169b49ebe11ed04e234a1.jpg",
    alt: "Large satellite dish antenna under a clear blue sky",
  },
  {
    src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/f1e8daa8-e835-4d88-993f-143a511f99bc/7b57dee74ab6954537c312c89b135a28.jpg",
    alt: "EGSE equipment racks with multiple devices and wiring",
  },
  {
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    alt: "View of Earth from space with city lights",
  },
  {
    src: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3",
    alt: "Milky Way galaxy over a mountain range"
  }
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setTimeout(nextImage, 5000); 
    return () => clearTimeout(timer);
  }, [currentImageIndex]);


  return (
    <section
      id="home"
      className="relative pt-16 pb-12 md:pt-24 md:pb-20 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-200/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 dark:bg-blue-900/30"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-200/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 dark:bg-purple-900/30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center px-4 py-2 rounded-full bg-white/70 dark:bg-gray-800/70 shadow-md"
          >
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
              🛰️ IntegralSAT: Your Partner in Space Technology
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white"
          >
            Space made <span className="gradient-text">Easy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mb-8"
          >
            Pioneering innovative and reliable solutions for space and ground segments. We empower your missions with cutting-edge technology and expert engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link to="/products/space-segment">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-shadow">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button
                variant="outline"
                className="border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Our Services
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl"
          >
            <div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg shadow-sm">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <Satellite className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Advanced Space Segment Tech
              </p>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg shadow-sm">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <RadioTower className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Reliable Ground Segment Solutions
              </p>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg shadow-sm">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
                <Cpu className="h-5 w-5 text-pink-600 dark:text-pink-400" />
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Expert System Engineering
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 relative mx-auto max-w-5xl"
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 aspect-[16/8]">
            <AnimatePresence mode="wait">
              <motion.img
                key={images[currentImageIndex].src}
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-10"
              aria-label="Previous Image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-10"
              aria-label="Next Image"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentImageIndex === index ? "bg-white" : "bg-white/50"
                  } transition-colors`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="absolute -top-8 -left-8 w-28 h-28 bg-blue-100 dark:bg-blue-900/40 rounded-full shadow-lg animate-float-slow hidden md:flex items-center justify-center p-2">
             <img  alt="Small satellite component" className="w-20 h-20 object-contain" src="https://images.unsplash.com/photo-1697923760477-1fc617f2b621" />
          </div>
          
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-100 dark:bg-purple-900/40 rounded-lg shadow-lg animate-float hidden md:flex items-center justify-center p-2">
            <img  alt="Ground station antenna dish" className="w-16 h-16 object-contain" src="https://images.unsplash.com/photo-1624488793227-d583a53b3b9c" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;