"use client";

import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Button from "./Button";
import { motion } from "framer-motion";

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

function NewDrops() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products",
        );
        const data = await response.json();
        // Get first 4 products for display
        setProducts(data.slice(0, 4));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
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
        {loading
          ? // Loading skeleton
            [0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className="w-[171px] md:w-[314px] flex flex-col gap-4"
              >
                <div className="w-full h-[180px] md:h-[350px] bg-white rounded-2xl md:rounded-[28px] animate-pulse" />
                <div className="h-6 bg-gray-200 rounded animate-pulse" />
                <div className="h-12 bg-gray-200 rounded-lg animate-pulse" />
              </div>
            ))
          : products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard
                  image={product.images[0]}
                  name={product.title}
                  price={product.price}
                  href={`/product/${product.id}`}
                  isNew={true}
                />
              </motion.div>
            ))}
      </div>
    </div>
  );
}

export default NewDrops;
