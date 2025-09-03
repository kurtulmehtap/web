import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import SpaceSegmentPage from "@/pages/SpaceSegmentPage";
import GroundSegmentPage from "@/pages/GroundSegmentPage";
import ServicesPage from "@/pages/ServicesPage";
import ContactPage from "@/pages/ContactPage";
import AboutPage from "@/pages/AboutPage"; 
import ProductPageLayout from "@/components/ProductPageLayout";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/space-segment" element={
            <ProductPageLayout 
              title="Space Segment Products" 
              breadcrumb={[{name: "Products", path: "/products"}, {name: "Space Segment", path: "/products/space-segment"}]}
            >
              <SpaceSegmentPage />
            </ProductPageLayout>
          }/>
          <Route path="/products/ground-segment" element={
            <ProductPageLayout 
              title="Ground Segment Products"
              breadcrumb={[{name: "Products", path: "/products"}, {name: "Ground Segment", path: "/products/ground-segment"}]}
            >
              <GroundSegmentPage />
            </ProductPageLayout>
          }/>
          <Route path="/services" element={
             <ProductPageLayout 
              title="Our Services"
              breadcrumb={[{name: "Services", path: "/services"}]}
            >
              <ServicesPage />
            </ProductPageLayout>
          }/>
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;