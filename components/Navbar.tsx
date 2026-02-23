"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="px-4 pt-8 pb-6 max-w-334 mx-auto">
      <motion.nav
        className="bg-white rounded-xl md:rounded-3xl p-4 sm:p-8 flex items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left Section - Navigation Links (Desktop) / Menu Icon (Mobile) */}
        <div className="flex items-center">
          {/* Mobile Menu Icon */}
          <motion.button
            className="md:hidden p-2 hover:opacity-70 transition-opacity"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            title="Toggle menu"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <Image
              src="/icons/menu.png"
              alt="Menu"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </motion.button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 font-semibold">
            <Link
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              New Drops 🔥
            </Link>
            <Link
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              Men
            </Link>
            <Link
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              Women
            </Link>
          </div>
        </div>

        {/* Middle Section - Logo */}
        <div className="flex items-center absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">
            <Image
              src="/Logo_black.png"
              alt="Logo"
              width={500}
              height={500}
              className="object-contain h-5 w-20 md:h-8 md:w-32"
            />
          </Link>
        </div>

        {/* Right Section - Search (Desktop), Profile, Cart */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Search Icon - Desktop Only */}
          <motion.button
            className="hidden md:block p-2 hover:opacity-70 transition-opacity"
            title="Search"
            aria-label="Search"
            whileTap={{ rotate: 0, y: 0 }}
          >
            <Image
              src="/icons/Search.png"
              alt="Search"
              width={100}
              height={100}
              className="h-7 w-7"
            />
          </motion.button>

          {/* Profile Icon */}
          <motion.button
            className="p-2 hover:opacity-70 transition-opacity"
            title="Profile"
            aria-label="Profile"
            whileTap={{ rotate: 0, y: 0 }}
          >
            <Image
              src="/icons/User.png"
              alt="Profile"
              width={100}
              height={100}
              className="h-4 w-4 md:h-7 md:w-7"
            />
          </motion.button>

          {/* Cart Badge */}
          <Link href="/cart">
            <motion.div
              className="bg-accent rounded-full w-5 h-5 md:w-8 md:h-8 flex items-center justify-center text-white font-semibold text-xs md:text-base hover:opacity-90 transition-opacity"
              whileTap={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              0
            </motion.div>
          </Link>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-50 bg-black/40 bg-opacity-50"
            onClick={() => setIsMobileMenuOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="bg-white w-64 h-full p-6 flex flex-col gap-6"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {/* Close Button */}
              <button
                className="self-end text-2xl font-bold text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ×
              </button>

              {/* Search */}
              <button className="flex items-center gap-3 text-foreground font-semibold hover:text-primary transition-colors">
                <Image
                  src="/icons/Search.png"
                  alt="Search"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                Search
              </button>

              {/* Navigation Links */}
              <Link
                href="/"
                className="text-foreground font-semibold hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                New Drops 🔥
              </Link>
              <Link
                href="/men"
                className="text-foreground font-semibold hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Men
              </Link>
              <Link
                href="/women"
                className="text-foreground font-semibold hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Women
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
