import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for individuals just getting started",
    features: [
      "5 workspaces",
      "Basic organization tools",
      "Limited collaboration",
      "7-day history",
      "Email support"
    ],
    cta: "Get Started",
    popular: false,
    delay: 0.1
  },
  {
    name: "Pro",
    price: "$12",
    period: "/month",
    description: "Ideal for professionals and small teams",
    features: [
      "Unlimited workspaces",
      "Advanced organization tools",
      "Full collaboration suite",
      "30-day history",
      "Priority support",
      "Custom templates"
    ],
    cta: "Start Free Trial",
    popular: true,
    delay: 0.2
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations with advanced needs",
    features: [
      "Everything in Pro",
      "Advanced security",
      "Admin controls",
      "API access",
      "Unlimited history",
      "Dedicated support",
      "Custom integrations"
    ],
    cta: "Contact Sales",
    popular: false,
    delay: 0.3
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Simple, transparent <span className="gradient-text">pricing</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            Choose the plan that's right for you and start boosting your productivity today.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: plan.delay }}
              className="relative"
            >
              <div className={`h-full rounded-xl border ${
                plan.popular 
                  ? "border-blue-500 dark:border-blue-400 shadow-lg" 
                  : "border-gray-200 dark:border-gray-800"
              } bg-white dark:bg-gray-800 overflow-hidden`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-gray-500 dark:text-gray-400">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>
                  
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white" 
                        : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </div>
                
                <div className="px-6 pb-6">
                  <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-300">
            Need a custom solution? <a href="#" className="text-blue-600 dark:text-blue-400 font-medium">Contact our sales team</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;