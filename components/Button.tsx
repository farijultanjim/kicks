"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`bg-primary hover:bg-primary/90 transition-colors text-white text-xs md:text-sm uppercase tracking-widest px-4 md:px-8 py-2 md:py-4 rounded-lg font-medium font-openSans ${className}`}
      whileTap={{ y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );
}
