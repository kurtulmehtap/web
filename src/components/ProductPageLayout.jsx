import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const ProductPageLayout = ({ title, breadcrumb, children }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <nav className="flex mb-8" aria-label="Breadcrumb">
        <ol role="list" className="flex items-center space-x-2">
          <li>
            <div>
              <Link to="/" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                <Home className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                <span className="sr-only">Home</span>
              </Link>
            </div>
          </li>
          {breadcrumb.map((item) => (
            <li key={item.name}>
              <div className="flex items-center">
                <ChevronRight className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                <Link
                  to={item.path}
                  className="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  {item.name}
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </nav>
      <h1 className="text-4xl font-bold tracking-tight mb-12 gradient-text">{title}</h1>
      <div>{children}</div>
    </div>
  );
};

export default ProductPageLayout;