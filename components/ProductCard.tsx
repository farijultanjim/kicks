"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ProductCard = ({
  image = "/11.png",
  isNew = true,
  name = "Adidas 4DFWD X Parley Running Shoes",
  price = 125,
  href = "#",
}) => {
  return (
    <motion.div
      className="w-[171px] md:w-[314px] flex flex-col gap-4"
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* image container */}
      <motion.div
        className="w-full h-[180px] md:h-[350px] p-2 bg-white rounded-2xl md:rounded-[28px]"
        transition={{ type: "spring", stiffness: 400 }}
      >
        <div className="relative overflow-hidden w-full h-full rounded-xl md:rounded-3xl">
          <Image src={image} alt={name} fill className="object-cover" />
          {isNew && (
            <div className="absolute top-0 left-0 bg-primary text-white text-xs font-semibold px-2 md:px-4 py-1 md:py-3 rounded-br-xl md:rounded-br-3xl font-openSans">
              New
            </div>
          )}
        </div>
      </motion.div>

      {/* title  */}
      <div>
        <h3 className="font-semibold text[16px] md:text-2xl uppercase leading-tight ">
          {name}
        </h3>
      </div>

      {/* button and price  */}
      <div>
        <Link
          href={href}
          className="bg-foreground text-white rounded-lg py-3.25 md:py-4 flex items-center justify-center gap-2 hover:bg-black transition-colors text-xs md:text-sm font-medium"
        >
          <motion.span className=" uppercase font-openSans">
            View Product -
          </motion.span>
          <span className="text-accent ">${price}</span>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;
