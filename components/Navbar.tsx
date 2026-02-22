"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="px-4 pt-8 pb-6 max-w-334 mx-auto">
      <nav className="bg-white rounded-xl md:rounded-3xl p-4 sm:p-8 flex items-center justify-between">
        {/* Left Section - Navigation Links (Desktop) / Menu Icon (Mobile) */}
        <div className="flex items-center">
          {/* Mobile Menu Icon */}
          <button
            className="md:hidden p-2 hover:opacity-70 transition-opacity"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            title="Toggle menu"
            aria-label="Toggle menu"
          >
            <Image
              src="/icons/menu.png"
              alt="Menu"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </button>

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
          <button
            className="hidden md:block p-2 hover:opacity-70 transition-opacity"
            title="Search"
            aria-label="Search"
          >
            <Image
              src="/icons/Search.png"
              alt="Search"
              width={100}
              height={100}
              className="h-7 w-7"
            />
          </button>

          {/* Profile Icon */}
          <button
            className="p-2 hover:opacity-70 transition-opacity"
            title="Profile"
            aria-label="Profile"
          >
            <Image
              src="/icons/User.png"
              alt="Profile"
              width={100}
              height={100}
              className="h-4 w-4 md:h-7 md:w-7"
            />
          </button>

          {/* Cart Badge */}
          <Link href="/cart">
            <div className="bg-accent rounded-full w-5 h-5 md:w-8 md:h-8 flex items-center justify-center text-white font-semibold text-xs md:text-base hover:opacity-90 transition-opacity">
              0
            </div>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-50 bg-black/40 bg-opacity-50"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="bg-white w-64 h-full p-6 flex flex-col gap-6"
            onClick={(e) => e.stopPropagation()}
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
          </div>
        </div>
      )}
    </header>
  );
}
