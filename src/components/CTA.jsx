import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
          
          <div className="relative z-10 py-16 px-6 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to transform your digital workspace?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Join thousands of professionals who have already upgraded their workflow with our platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-2 border-white/70 text-white hover:bg-white/10 px-8 py-6 text-lg">
                Schedule a Demo
              </Button>
            </div>
          </div>
          
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-xl translate-x-1/3 translate-y-1/3"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;