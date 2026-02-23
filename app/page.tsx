"use client";

import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import NewDrops from "@/components/NewDrops";
import Reviews from "@/components/Reviews";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main
      className=""
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <NewDrops />
      <Categories />
      <Reviews />
    </motion.main>
  );
}
