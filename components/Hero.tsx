"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import { motion } from "framer-motion";

const slides = [
  {
    id: 1,
    tag: "Nike product of the year",
    title: "NIKE AIR MAX",
    description: "Nike introducing the new air max for everyone's comfort",
    mainImage: "/hero.png", // replace with your actual image paths
    thumb1: "/hero_side1.png",
    thumb2: "/hero_side2.png",
    cta: "Shop Now",
  },
  // Add more slides as needed
];

export default function Hero() {
  const [active] = useState(0);
  const slide = slides[active];
  return (
    <div className="px-4 pb-22.5 max-w-334 mx-auto">
      <motion.h1
        className="font-bold uppercase w-full text-[clamp(2.5rem,15.5vw,13.82rem)] leading-none text-center py-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Do it <span className="text-primary">right</span>
      </motion.h1>

      {/* hero image  */}
      <section className="">
        <motion.div
          className="relative rounded-3xl md:rounded-[64px] overflow-hidden w-full aspect-square md:aspect-auto h-auto md:h-[750px]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Background image */}
          <Image
            src={slide.mainImage}
            alt={slide.title}
            fill
            className="object-cover object-center"
            priority
          />

          {/* Vertical tag on the left */}
          <motion.div
            className="absolute -top-20 md:-top-30 left-0 h-full flex items-center"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div
              className="bg-foreground text-white text-[12px] md:text-[16px] font-semibold tracking-widest writing-mode-vertical p-2 md:p-6 rounded-l-lg md:rounded-l-2xl font-openSans"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              {slide.tag}
            </div>
          </motion.div>

          {/* Bottom-left content */}
          <motion.div
            className="absolute bottom-4 left-4 md:bottom-12 md:left-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h1 className="text-white font-semibold text-2xl md:text-[74px] uppercase  drop-shadow-lg leading-tight">
              {slide.title}
            </h1>
            <p className="text-white/80 text-sm md:text-2xl mb-2 md:mb-6 max-w-50 md:max-w-xs font-openSans leading-snug">
              {slide.description}
            </p>
            <Button>{slide.cta}</Button>
          </motion.div>

          {/* Right side thumbnails */}
          <motion.div
            className="absolute right-4 md:right-8 bottom-4 md:bottom-8 flex flex-col gap-3"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div transition={{ type: "spring", stiffness: 400 }}>
              <Image
                src={slide.thumb1}
                alt="Thumbnail 1"
                width={200}
                height={200}
                className="object-cover aspect-square h-16 md:h-40 w-16 md:w-40"
              />
            </motion.div>

            <motion.div transition={{ type: "spring", stiffness: 400 }}>
              <Image
                src={slide.thumb2}
                alt="Thumbnail 2"
                width={200}
                height={200}
                className="object-cover aspect-square h-16 md:h-40 w-16 md:w-40"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
