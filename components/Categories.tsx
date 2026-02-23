"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";

interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/categories",
        );
        const data = await response.json();
        // Filter for only Clothes (id: 1) and Shoes (id: 4)
        const filtered = data.filter(
          (cat: Category) => cat.id === 1 || cat.id === 4,
        );
        setCategories(filtered);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <motion.div
      className="bg-foreground"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="pt-22.5 ">
        <div>
          {/* title  */}
          <div className="flex items-end justify-between px-4 max-w-334 mx-auto">
            <motion.h2
              className="text-2xl md:text-[74px] font-semibold max-w-150 leading-[95%] md:uppercase text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Categories
            </motion.h2>
            <motion.div
              className="flex items-center gap-2 md:gap-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.button
                type="button"
                title="Previous"
                className="bg-[#E7E7E3] rounded-lg px-2 md:px-3 py-2 md:py-3"
                whileTap={{ x: 0, rotate: 0 }}
              >
                <RiArrowLeftSLine />
              </motion.button>
              <motion.button
                type="button"
                title="Next"
                className="bg-white rounded-lg px-2 md:px-3 py-2 md:py-3"
                whileTap={{ x: 0, rotate: 0 }}
              >
                <RiArrowRightSLine />
              </motion.button>
            </motion.div>
          </div>

          {/* categories  */}
          <div className="mt-10 flex flex-col md:flex-row  items-center pb-6 md:pb-0 pl-4 md:pl-[calc((100vw-1336px)/2+1rem)] md:pr-0 ">
            {loading ? (
              // Loading skeleton
              <>
                <div className="h-[348px] md:h-[600px] w-full bg-[#ECEEF0] rounded-tl-[64px] relative overflow-hidden animate-pulse" />
                <div className="h-[348px] md:h-[600px] w-full bg-[#F6F6F6] relative overflow-hidden animate-pulse" />
              </>
            ) : (
              categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  className={`h-[348px] md:h-[600px] w-full ${
                    index === 0
                      ? "bg-[#ECEEF0] rounded-tl-[64px]"
                      : "bg-[#F6F6F6]"
                  } relative overflow-hidden`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.2 }}
                >
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                  />
                  <h3 className="absolute bottom-4 md:bottom-7.5 left-4 md:left-12 text-foreground font-bold text-2xl md:text-4xl max-w-32 leading-snug">
                    {category.name}
                  </h3>
                  <motion.div
                    className="absolute bottom-4 md:bottom-7.5 right-4 md:right-12 bg-foreground rounded-sm md:rounded-lg p-3"
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <FiArrowUpRight className="w-4 md:w-8 h-4 md:h-8 text-white" />
                  </motion.div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
