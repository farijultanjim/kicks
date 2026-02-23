"use client";

import React from "react";
import ProductCard from "./ProductCard";
import Button from "./Button";
import { motion } from "framer-motion";

function NewDrops() {
  return (
    <div className="pb-32 px-4 max-w-334 mx-auto">
      <motion.div
        className="flex items-center md:items-end justify-between mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-[74px] font-semibold max-w-150 leading-[95%] md:uppercase">
          Don't miss out <br />
          new drops
        </h2>
        <Button className="py-[11.5px]">Shop New Drops</Button>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
        {[0, 1, 2, 3].map((index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProductCard />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default NewDrops;
