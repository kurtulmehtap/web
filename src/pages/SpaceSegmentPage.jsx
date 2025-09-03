import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Satellite, Radio, Antenna, Cpu } from "lucide-react";
import { useLocation } from "react-router-dom";

const products = [
  {
    id: "telecommand-receiver",
    name: "IntegralSAT Telecommand Receiver",
    description: "Our state-of-the-art Telecommand Receiver ensures reliable and secure uplink communication for critical satellite operations. Designed for high sensitivity and interference rejection.",
    icon: Radio,
    imageSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/f1e8daa8-e835-4d88-993f-143a511f99bc/8d59bc5fa24005bedc1e5757b0ba613d.png",
    altText: "IntegralSAT RX Demonstrator - Telecommand Receiver module"
  },
  {
    id: "telemetry-transmitter",
    name: "IntegralSAT Telemetry Transmitter",
    description: "High-efficiency Telemetry Transmitter for robust downlink of satellite health and payload data. Optimized for power consumption and data throughput.",
    icon: Antenna,
    imageSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/f1e8daa8-e835-4d88-993f-143a511f99bc/5d2c94f4d7f8bcc4dcf9adbec44f7bf3.png",
    altText: "IntegralSAT TX Demonstrator - Telemetry Transmitter unit"
  },
  {
    id: "high-data-rate-transmitter",
    name: "High Data Rate Transmitter",
    description: "Advanced Ka/Ku-band High Data Rate Transmitter for demanding payload data downlink requirements. Supports various modulation schemes and coding for maximum performance.",
    icon: Satellite,
    imageSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/f1e8daa8-e835-4d88-993f-143a511f99bc/5d2c94f4d7f8bcc4dcf9adbec44f7bf3.png",
    altText: "IntegralSAT TX Demonstrator - High Data Rate Transmitter module"
  }
];

const SpaceSegmentPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="space-y-12">
      <motion.p 
        initial={{ opacity: 0, y:20 }}
        animate={{ opacity: 1, y:0 }}
        transition={{ duration: 0.5 }}
        className="text-lg text-gray-700 dark:text-gray-300 mb-12"
      >
        IntegralSAT offers a comprehensive suite of space-proven hardware for various satellite missions. Our products are designed for reliability, performance, and ease of integration, ensuring your mission success.
      </motion.p>
      {products.map((product, index) => (
        <motion.section
          key={product.id}
          id={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="pt-8"
        >
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800">
            <div className="md:flex">
              <div className="md:w-1/2 p-2">
                 <img  className="w-full h-64 object-cover md:h-full rounded-md" alt={product.altText} src={product.imageSrc} />
              </div>
              <div className="md:w-1/2">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <product.icon className="h-8 w-8 mr-3 text-blue-500" />
                    <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">{product.name}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 dark:text-gray-300 text-md leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-200">
                    <li className="flex items-center"><Cpu className="h-4 w-4 mr-2 text-purple-500" /> Space-grade components</li>
                    <li className="flex items-center"><Cpu className="h-4 w-4 mr-2 text-purple-500" /> High reliability and long lifespan</li>
                    <li className="flex items-center"><Cpu className="h-4 w-4 mr-2 text-purple-500" /> Customizable options available</li>
                  </ul>
                </CardContent>
              </div>
            </div>
          </Card>
        </motion.section>
      ))}
    </div>
  );
};

export default SpaceSegmentPage;