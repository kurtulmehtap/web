import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const ListItem = React.forwardRef(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/f1e8daa8-e835-4d88-993f-143a511f99bc/e219caf6d08299b87f856e82da972092.jpg";

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const spaceSegmentProducts = [
    { title: "Telecommand Receiver", href: "/products/space-segment#telecommand-receiver", description: "Reliable command reception for satellites." },
    { title: "Telemetry Transmitter", href: "/products/space-segment#telemetry-transmitter", description: "Efficient telemetry data transmission." },
    { title: "High Data Rate Transmitter", href: "/products/space-segment#high-data-rate-transmitter", description: "High-speed data downlink solutions." },
  ];

  const groundSegmentProducts = [
    { title: "TT&C Solutions", href: "/products/ground-segment#ttc", description: "Comprehensive Telemetry, Tracking & Command." },
    { title: "High Data Rate Receiver", href: "/products/ground-segment#high-data-rate-receiver", description: "Advanced high-speed data reception." },
  ];
  
  const services = [
    { title: "Ground Station Development", href: "/services#ground-station-dev", description: "Turnkey ground station solutions." },
    { title: "EGSE Development", href: "/services#egse-dev", description: "Custom Electrical Ground Support Equipment." },
    { title: "System Engineering", href: "/services#system-engineering", description: "Expert system design and integration." },
  ];


  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-white/80 dark:bg-gray-900/80 shadow-md backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logoUrl} alt="IntegralSAT Logo" className="h-10 w-auto" />
              <span className="text-2xl font-bold gradient-text hidden sm:inline">IntegralSAT</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors">Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            to="/products/space-segment"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Space Segment
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Cutting-edge components for your satellite missions.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      {spaceSegmentProducts.map((product) => (
                        <ListItem key={product.title} title={product.title} href={product.href}>
                          {product.description}
                        </ListItem>
                      ))}
                    </ul>
                     <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            to="/products/ground-segment"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Ground Segment
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Reliable solutions for ground control and data reception.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      {groundSegmentProducts.map((product) => (
                        <ListItem key={product.title} title={product.title} href={product.href}>
                          {product.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors">Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                       <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            to="/services"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Our Expertise
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Comprehensive services to support your space missions from ground up.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      {services.map((service) => (
                         <ListItem key={service.title} title={service.title} href={service.href}>
                          {service.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/about" className={cn(navigationMenuTriggerStyle(), "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors")}>
                    About Us
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact" className={cn(navigationMenuTriggerStyle(), "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors")}>
                    Contact
                  </Link>
                </NavigationMenuItem>
                
              </NavigationMenuList>
            </NavigationMenu>
          </div>


          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className={({isActive}) => cn("block px-3 py-2 rounded-md text-base font-medium", isActive ? "text-blue-600 bg-blue-50 dark:bg-gray-800" : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white")} onClick={() => setIsOpen(false)}>Home</NavLink>
            
            <div>
              <button onClick={(e) => { e.currentTarget.nextElementSibling.classList.toggle('hidden'); e.currentTarget.querySelector('svg').classList.toggle('rotate-180')}} className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white">
                Products <ChevronDown className="h-4 w-4 transition-transform" />
              </button>
              <div className="pl-4 hidden">
                <NavLink to="/products/space-segment" className={({isActive}) => cn("block px-3 py-2 rounded-md text-base font-medium", isActive ? "text-blue-600 bg-blue-50 dark:bg-gray-800" : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white")} onClick={() => setIsOpen(false)}>Space Segment</NavLink>
                 {spaceSegmentProducts.map(p => <NavLink key={p.title} to={p.href} className={({isActive}) => cn("block pl-6 pr-3 py-2 rounded-md text-sm font-medium", isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white")} onClick={() => setIsOpen(false)}>{p.title}</NavLink>)}
                <NavLink to="/products/ground-segment" className={({isActive}) => cn("block px-3 py-2 rounded-md text-base font-medium", isActive ? "text-blue-600 bg-blue-50 dark:bg-gray-800" : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white")} onClick={() => setIsOpen(false)}>Ground Segment</NavLink>
                {groundSegmentProducts.map(p => <NavLink key={p.title} to={p.href} className={({isActive}) => cn("block pl-6 pr-3 py-2 rounded-md text-sm font-medium", isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white")} onClick={() => setIsOpen(false)}>{p.title}</NavLink>)}
              </div>
            </div>

             <div>
              <button onClick={(e) => { e.currentTarget.nextElementSibling.classList.toggle('hidden'); e.currentTarget.querySelector('svg').classList.toggle('rotate-180')}} className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white">
                Services <ChevronDown className="h-4 w-4 transition-transform" />
              </button>
              <div className="pl-4 hidden">
                {services.map(s => <NavLink key={s.title} to={s.href} className={({isActive}) => cn("block px-3 py-2 rounded-md text-base font-medium", isActive ? "text-blue-600 bg-blue-50 dark:bg-gray-800" : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white")} onClick={() => setIsOpen(false)}>{s.title}</NavLink>)}
              </div>
            </div>
            <NavLink to="/about" className={({isActive}) => cn("block px-3 py-2 rounded-md text-base font-medium", isActive ? "text-blue-600 bg-blue-50 dark:bg-gray-800" : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white")} onClick={() => setIsOpen(false)}>About Us</NavLink>
            <NavLink to="/contact" className={({isActive}) => cn("block px-3 py-2 rounded-md text-base font-medium", isActive ? "text-blue-600 bg-blue-50 dark:bg-gray-800" : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white")} onClick={() => setIsOpen(false)}>Contact</NavLink>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;