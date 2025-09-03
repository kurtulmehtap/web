import React from "react";
import { Link } from "react-router-dom";
import { 
  Twitter, 
  Linkedin, 
  Youtube
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/f1e8daa8-e835-4d88-993f-143a511f99bc/e219caf6d08299b87f856e82da972092.jpg";
  
  const footerLinks = [
    {
      title: "Products",
      links: [
        { name: "Space Segment", href: "/products/space-segment" },
        { name: "Ground Segment", href: "/products/ground-segment" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Ground Station Development", href: "/services#ground-station-dev" },
        { name: "EGSE Development", href: "/services#egse-dev" },
        { name: "System Engineering", href: "/services#system-engineering" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex items-center space-x-2 mb-4">
              <img src={logoUrl} alt="IntegralSAT Logo" className="h-10 w-auto" />
              <span className="text-2xl font-bold gradient-text">IntegralSAT</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-md">
              Space made Easy. Pioneering innovative and reliable solutions for space and ground segments.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((column, index) => (
            <div key={index}>
              <p className="font-medium text-gray-900 dark:text-white mb-4">
                {column.title}
              </p>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear} IntegralSAT. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;