"use client";

import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const products = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  // Add your product data here
}));

const PRODUCTS_PER_PAGE = 4;
const TOTAL_PAGES = Math.ceil(products.length / PRODUCTS_PER_PAGE);

function MayLikeProducts() {
  const [currentPage, setCurrentPage] = useState(0);

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
              <ProductCard />
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
