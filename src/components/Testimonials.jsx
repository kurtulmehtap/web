import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Designer",
    company: "DesignCraft",
    content: "Remo's Space has completely transformed how I organize my design projects. The intuitive interface and powerful features make it a joy to use every day.",
    rating: 5,
    delay: 0.1
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    company: "TechInnovate",
    content: "As a developer, I need tools that don't get in my way. This platform strikes the perfect balance between simplicity and power. Highly recommended!",
    rating: 5,
    delay: 0.2
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "GrowthLabs",
    content: "Our marketing team has seen a 40% increase in productivity since switching to this platform. The collaboration features are simply unmatched.",
    rating: 5,
    delay: 0.3
  }
];

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Loved by <span className="gradient-text">thousands</span> of professionals
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            Don't just take our word for it. Here's what our users have to say about their experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: testimonial.delay }}
            >
              <Card className="h-full border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-3">
                      <span className="text-gray-600 dark:text-gray-300 font-medium">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;