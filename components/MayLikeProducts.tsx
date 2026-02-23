"use client";

import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { useAppContext } from "@/context/AppContext";

interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    slug: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  };
  images: string[];
  creationAt: string;
  updatedAt: string;
}

const PRODUCTS_PER_PAGE = 4;

function MayLikeProducts() {
  const { currentCategory } = useAppContext();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      if (!currentCategory) return;

      try {
        setLoading(true);
        // Fetch all products from the category
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/categories/${currentCategory.id}/products`,
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching category products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryProducts();
  }, [currentCategory]);

  const TOTAL_PAGES = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : TOTAL_PAGES - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < TOTAL_PAGES - 1 ? prev + 1 : 0));
  };

  const currentProducts = products.slice(
    currentPage * PRODUCTS_PER_PAGE,
    (currentPage + 1) * PRODUCTS_PER_PAGE,
  );

  if (!currentCategory || loading) {
    return (
      <div className="pb-32 px-4 max-w-334 mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="h-12 w-48 bg-gray-200 rounded animate-pulse" />
          <div className="flex gap-2">
            <div className="h-10 w-10 bg-gray-200 rounded animate-pulse" />
            <div className="h-10 w-10 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="space-y-4">
              <div className="w-full h-[180px] md:h-[350px] bg-gray-200 rounded-2xl animate-pulse" />
              <div className="h-6 bg-gray-200 rounded animate-pulse" />
              <div className="h-12 bg-gray-200 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return null; // Don't show section if no products
  }

  return (
    <div className="pb-32 px-4 max-w-334 mx-auto">
      <motion.div
        className="flex items-center md:items-end justify-between mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-[48px] font-semibold max-w-150 leading-[95%]">
          You may also like
        </h2>
        <div className="flex items-center gap-2 md:gap-4">
          <motion.button
            type="button"
            title="Previous"
            onClick={handlePrevious}
            className="bg-foreground/80 rounded-lg px-2 md:px-3 py-2 md:py-3 text-white"
            whileTap={{ x: 0 }}
          >
            <RiArrowLeftSLine />
          </motion.button>
          <motion.button
            type="button"
            title="Next"
            onClick={handleNext}
            className="bg-foreground rounded-lg px-2 md:px-3 py-2 md:py-3 text-white"
            whileTap={{ x: 0 }}
          >
            <RiArrowRightSLine />
          </motion.button>
        </div>
      </motion.div>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {currentProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ProductCard
                image={product.images[0] || "/11.png"}
                name={product.title}
                price={product.price}
                href={`/product/${product.id}`}
                isNew={false}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Line indicators */}
      <div className="flex items-center justify-center gap-1">
        {Array.from({ length: TOTAL_PAGES }).map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`h-1 rounded-full transition-all ${
              currentPage === index ? "w-8 bg-primary" : "w-8 bg-foreground/30"
            }`}
            aria-label={`Go to page ${index + 1}`}
            whileTap={{ width: "32px" }}
          />
        ))}
      </div>
    </div>
  );
}

export default MayLikeProducts;
