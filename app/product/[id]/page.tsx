"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import { FaHeart } from "react-icons/fa";
import MayLikeProducts from "@/components/MayLikeProducts";

const productImages = ["/11.png", "/hero.png", "/11.png", "/hero.png"];

const colors = [
  { name: "Black", value: "#232321" },
  { name: "Green", value: "#4A5947" },
];

const sizes = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);

  return (
    <>
      <div className="flex flex-col md:flex-row items-start gap-4 px-4 max-w-334 mx-auto">
        {/* image gallery */}
        <div className="md:rounded-[48px] md:overflow-hidden w-full md:w-2/3">
          {/* Mobile view - Image viewer */}
          <div className="block md:hidden">
            {/* Main image */}
            <div className="relative w-full aspect-square bg-gray-100 rounded-3xl overflow-hidden">
              <Image
                src={productImages[selectedImage]}
                alt={`Product view ${selectedImage + 1}`}
                fill
                className="object-cover"
              />
            </div>

            {/* Thumbnail selector */}
            <div className="flex gap-2 mt-4">
              {productImages.slice(0, 4).map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  title={`View product image ${index + 1}`}
                  aria-label={`Select product image ${index + 1}`}
                  className={`relative w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 ${
                    selectedImage === index ? "ring-2 ring-primary" : ""
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Desktop view - Grid of images */}
          <div className="hidden md:grid grid-cols-2 gap-4 rounded-[48px] overflow-hidden">
            {productImages.map((img, index) => (
              <div key={index} className="relative aspect-square">
                <Image
                  src={img}
                  alt={`Product view ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* details */}
        <div className="w-full md:w-1/3 mt-8 md:mt-0 pb-0 md:pb-23.25">
          {/* New Release Badge */}
          <div className="inline-block bg-primary text-white text-xs font-semibold px-4 py-2 md:py-3 rounded-lg md:rounded-xl mb-4">
            New Release
          </div>

          {/* Product Title */}
          <h1 className="text-foreground font-semibold text-xl md:text-[32px] uppercase mb-4 leading-tight">
            ADIDAS 4DFWD X PARLEY RUNNING SHOES
          </h1>

          {/* Price */}
          <div className="text-primary font-bold text-2xl mb-6">$125.00</div>

          {/* Color Selection */}
          <div className="mb-6">
            <h3 className="text-foreground font-bold text-sm uppercase mb-3">
              COLOR
            </h3>
            <div className="flex gap-2">
              {colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(index)}
                  className={`w-8 h-8 rounded-full ${
                    selectedColor === index
                      ? "outline outline-4 outline-foreground border-4 border-white"
                      : ""
                  }`}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                  aria-label={`Select ${color.name} color`}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-foreground font-bold text-[16px] md:uppercase">
                SIZE
              </h3>
              <button className="text-foreground/60 text-sm font-semibold hover:text-foreground">
                SIZE CHART
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {sizes.map((size, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSize(index)}
                  className={`w-12 h-12 rounded-lg font-semibold text-sm transition-colors ${
                    selectedSize === index
                      ? "bg-foreground text-white"
                      : "bg-white text-foreground hover:bg-gray-100"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 mb-2">
            <button className="flex-1 bg-foreground text-white font-medium text-sm uppercase tracking-wide py-4 rounded-lg hover:bg-foreground/90 transition-colors">
              ADD TO CART
            </button>
            <button className="bg-foreground text-white p-4 rounded-lg hover:bg-foreground/90 transition-colors">
              <FaHeart className="w-5 h-5" />
            </button>
          </div>

          {/* Buy It Now Button */}
          <Button className="w-full mb-6">BUY IT NOW</Button>

          {/* About the Product */}
          <div>
            <h3 className="text-foreground font-semibold text-[16px] uppercase mb-3">
              ABOUT THE PRODUCT
            </h3>
            <p className="text-[#232321] text-[16px] mb-5 font-openSans">
              Shadow Navy / Army Green
            </p>
            <p className="text-[#232321] text-[16px] mb-3 font-openSans">
              This product is excluded from all promotional discounts and
              offers.
            </p>
            <ul className="text-[#232321] text-[16px] space-y-1 list-disc list-inside font-openSans ml-2 leading-snug">
              <li>
                Pay over time in interest-free installments with Affirm, Klarna
                or Afterpay.
              </li>
              <li>
                Join adiClub to get unlimited free standard shipping, returns, &
                exchanges.
              </li>
            </ul>
          </div>
        </div>

        {/* suggested products section  */}
      </div>
      <div>
        <MayLikeProducts />
      </div>
    </>
  );
}
