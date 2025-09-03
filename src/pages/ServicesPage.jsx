import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { HardHat, Wrench, GitFork, Cog } from "lucide-react";
import { useLocation } from "react-router-dom";

const services = [
  {
    id: "ground-station-dev",
    name: "Ground Station Development",
    description: "We provide end-to-end ground station development services, from site survey and design to installation, commissioning, and operator training. Our expertise covers various frequency bands and antenna sizes.",
    icon: HardHat,
    imageSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/f1e8daa8-e835-4d88-993f-143a511f99bc/d4f6252040f4d1f72bdbf9532e015d4a.jpg",
    altText: "Large ground station satellite dish antenna against a blue sky"
  },
  {
    id: "egse-dev",
    name: "EGSE Development",
    description: "Custom Electrical Ground Support Equipment (EGSE) development tailored to your specific satellite testing and operational needs. We design and build SCOEs, OCOEs, and specialized test systems.",
    icon: Wrench,
    imageSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/f1e8daa8-e835-4d88-993f-143a511f99bc/7b57dee74ab6954537c312c89b135a28.jpg",
    altText: "Racks of EGSE equipment with wiring and components"
  },
  {
    id: "system-engineering",
    name: "System Engineering",
    description: "Our experienced system engineers provide comprehensive support throughout your mission lifecycle, including requirements analysis, system design, V&V, and operational support.",
    icon: GitFork,
    imageSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/f1e8daa8-e835-4d88-993f-143a511f99bc/f72e7ec74c67d73fe4c4b8845bdd7a0e.jpg",
    altText: "Systems engineering V-model diagram showing lifecycle processes"
  }
];

const ServicesPage = () => {
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
        IntegralSAT offers a wide range of specialized services to support your space missions. Our expert teams are dedicated to delivering high-quality solutions and ensuring mission success from concept to operations.
      </motion.p>
      {services.map((service, index) => (
        <motion.section
          key={service.id}
          id={service.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="pt-8"
        >
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800">
            <div className="md:flex">
               <div className="md:w-1/2 p-2">
                 <img src={service.imageSrc} alt={service.altText} className="w-full h-64 object-cover md:h-full rounded-md" />
              </div>
              <div className="md:w-1/2">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <service.icon className="h-8 w-8 mr-3 text-green-500" />
                    <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">{service.name}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 dark:text-gray-300 text-md leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-200">
                    <li className="flex items-center"><Cog className="h-4 w-4 mr-2 text-pink-500" /> Tailored to specific mission requirements</li>
                    <li className="flex items-center"><Cog className="h-4 w-4 mr-2 text-pink-500" /> Experienced and dedicated engineering teams</li>
                    <li className="flex items-center"><Cog className="h-4 w-4 mr-2 text-pink-500" /> Focus on quality, reliability, and cost-effectiveness</li>
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

export default ServicesPage;