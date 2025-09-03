import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:info@integralsat.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    try {
      window.location.href = mailtoLink;
      toast({
        title: "Message Redirect",
        description: "You are being redirected to your email client to send the message.",
        variant: "default",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
       toast({
        title: "Error",
        description: "Could not open email client. Please copy the email address: info@integralsat.com",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Get in <span className="gradient-text">Touch</span>
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          We're here to help and answer any question you might have. We look forward to hearing from you!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="shadow-xl dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                  <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:text-white" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:text-white" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                  <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:text-white" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                  <textarea name="message" id="message" rows="4" value={formData.message} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:text-white"></textarea>
                </div>
                <div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 text-base">
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-8"
        >
          <Card className="shadow-lg dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-3 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Our Office</p>
                  <p className="text-gray-600 dark:text-gray-300">123 Space Tech Avenue, Orbit City, OC 54321</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 mr-3 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Email Us</p>
                  <a href="mailto:info@integralsat.com" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">info@integralsat.com</a>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 mr-3 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Call Us</p>
                  <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">+1 (234) 567-890</a>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
             <img  className="w-full h-full object-cover" alt="Map showing IntegralSAT office location" src="https://images.unsplash.com/photo-1469288205312-804b99a8d717" />
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;