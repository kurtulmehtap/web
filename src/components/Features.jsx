import React from "react";
import { motion } from "framer-motion";
import { 
  Radio, 
  Antenna, 
  Satellite, 
  RadioTower, 
  DownloadCloud,
  HardHat,
  Wrench,
  GitFork
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const featureItems = [
  {
    title: "IntegralSAT Telecommand Receiver",
    description: "Reliable command reception for satellites.",
    icon: Radio,
    color: "bg-sky-100 text-sky-600 dark:bg-sky-900/30 dark:text-sky-400",
    href: "/products/space-segment#telecommand-receiver",
    delay: 0.1
  },
  {
    title: "IntegralSAT Telemetry Transmitter",
    description: "Efficient telemetry data transmission.",
    icon: Antenna,
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    href: "/products/space-segment#telemetry-transmitter",
    delay: 0.15
  },
  {
    title: "High Data Rate Transmitter",
    description: "High-speed data downlink solutions.",
    icon: Satellite,
    color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400",
    href: "/products/space-segment#high-data-rate-transmitter",
    delay: 0.2
  },
  {
    title: "TT&C Solutions",
    description: "Comprehensive Telemetry, Tracking & Command.",
    icon: RadioTower,
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
    href: "/products/ground-segment#ttc",
    delay: 0.25
  },
  {
    title: "High Data Rate Receiver",
    description: "Advanced high-speed data reception.",
    icon: DownloadCloud,
    color: "bg-fuchsia-100 text-fuchsia-600 dark:bg-fuchsia-900/30 dark:text-fuchsia-400",
    href: "/products/ground-segment#high-data-rate-receiver",
    delay: 0.3
  },
  {
    title: "Ground Station Development",
    description: "Turnkey ground station solutions.",
    icon: HardHat,
    color: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400",
    href: "/services#ground-station-dev",
    delay: 0.35
  },
  {
    title: "EGSE Development",
    description: "Custom Electrical Ground Support Equipment.",
    icon: Wrench,
    color: "bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400",
    href: "/services#egse-dev",
    delay: 0.4
  },
  {
    title: "System Engineering",
    description: "Expert system design and integration.",
    icon: GitFork,
    color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
    href: "/services#system-engineering",
    delay: 0.45
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Core <span className="gradient-text">Offerings</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            Explore our cutting-edge products and expert services designed to make your space missions a success.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureItems.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: feature.delay }}
              className="h-full"
            >
              <Link to={feature.href} className="h-full block">
                <Card className="h-full border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-shadow duration-300 flex flex-col group">
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm flex-grow">{feature.description}</p>
                    <span className="mt-4 text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:underline">
                      Learn More &rarr;
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;