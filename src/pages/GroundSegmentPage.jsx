import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { RadioTower, Wifi, DownloadCloud, Settings2 } from "lucide-react";
import { useLocation } from "react-router-dom";

const products = [
  {
    id: "ttc",
    name: "TT&C Solutions",
    description: "Comprehensive Telemetry, Tracking, and Command (TT&C) systems for reliable satellite operations.",
    icon: RadioTower,
    image: "ground station antenna tt&c system",
    altText: "IntegralSAT TT&C ground station system"
  },
  {
    id: "high-data-rate-receiver",
    name: "High Data Rate Receiver",
    description: "Advanced High Data Rate Receiver systems for fast and efficient download of large volume satellite data. Supports multiple frequency bands and modulation schemes.",
    icon: DownloadCloud,
    image: "high speed data receiver modem for satellite communication",
    altText: "IntegralSAT High Data Rate Receiver"
  }
];

const GroundSegmentPage = () => {
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
        IntegralSAT provides robust and scalable ground segment solutions to support your satellite missions. From TT&C to high-speed data reception, our systems ensure seamless communication and control.
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
                 <img className="w-full h-64 object-cover md:h-full rounded-md" alt={product.altText} src="/Platform2.jpg" />
              </div>
              <div className="md:w-1/2">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <product.icon className="h-8 w-8 mr-3 text-purple-500" />
                    <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">{product.name}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 dark:text-gray-300 text-md leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-200">
                    {product.id === "ttc" ? (
                      <>
                        <li className="flex items-center"><Settings2 className="h-4 w-4 mr-2 text-blue-500" /> CCSDS TM and TC compatible Ground Station Modem</li>
                        <li className="flex items-center"><Settings2 className="h-4 w-4 mr-2 text-blue-500" /> Frequency range: Adjustable on Request to 70 MHz/ 140 MHz/ 2-2.4 GHz</li>
                        <li className="flex items-center"><Settings2 className="h-4 w-4 mr-2 text-blue-500" /> Scalable architecture for future needs</li>
                        <li className="flex items-center"><Settings2 className="h-4 w-4 mr-2 text-blue-500" /> User-friendly control interfaces</li>
                      </>
                    ) : (
                      <>
                        <li className="flex items-center"><Settings2 className="h-4 w-4 mr-2 text-blue-500" /> Frequency range: Adjustable on Request to 720/ 1200 MHz</li>
                        <li className="flex items-center"><Settings2 className="h-4 w-4 mr-2 text-blue-500" /> Selectable bitrate: Upto 240 Mbps per Channel</li>
                        <li className="flex items-center"><Settings2 className="h-4 w-4 mr-2 text-blue-500" /> Modulation types: O-QPSK, 8-PSK, 16 A-PSK, 32 A-PSK</li>
                        <li className="flex items-center"><Settings2 className="h-4 w-4 mr-2 text-blue-500" /> Error Correction Options: LDPC or Concatenated (Conv. + RS)</li>
                        <li className="flex items-center"><Settings2 className="h-4 w-4 mr-2 text-blue-500" /> Integration Support available</li>
                      </>
                    )}
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

export default GroundSegmentPage;