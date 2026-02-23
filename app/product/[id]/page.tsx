"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import { FaHeart } from "react-icons/fa";
import MayLikeProducts from "@/components/MayLikeProducts";
import { motion, AnimatePresence } from "framer-motion";
import { useAppContext } from "@/context/AppContext";
import { useRouter } from "next/navigation";

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

// Static data - Colors are not available from API
const colors = [
  { name: "Black", value: "#232321" },
  { name: "Green", value: "#4A5947" },
];

// Static data - Sizes are not available from API
const sizes = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);
  const router = useRouter();
  const { setCurrentCategory, addToCart } = useAppContext();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/products/${id}`,
        );
        const data = await response.json();
        setProduct(data);
        // Set the current category in context for MayLikeProducts
        if (data.category) {
          setCurrentCategory(data.category);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, setCurrentCategory]);

  const handleAddToCart = () => {
    if (!product) return;

    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0] || "/11.png",
      quantity: 1,
      selectedSize: sizes[selectedSize],
      selectedColor: colors[selectedColor].name,
    };

    addToCart(cartItem);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    router.push("/cart");
  };

  if (loading) {
    return (
      <div className="flex flex-col md:flex-row items-start gap-4 px-4 max-w-334 mx-auto min-h-screen">
        <div className="md:rounded-[48px] w-full md:w-2/3 h-96 bg-gray-200 animate-pulse" />
        <div className="w-full md:w-1/3 space-y-4">
          <div className="h-8 bg-gray-200 rounded animate-pulse" />
          <div className="h-12 bg-gray-200 rounded animate-pulse" />
          <div className="h-8 bg-gray-200 rounded animate-pulse w-1/3" />
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl">Product not found</p>
      </div>
    );
  }

  // to fill the ui with 4 images, if less than 4 images are provided by the API, we will fill the remaining slots with a placeholder image
  const productImages =
    product.images.length > 0
      ? [
          ...product.images.slice(0, 4),
          ...Array(Math.max(0, 4 - product.images.length)).fill("/11.png"),
        ]
      : Array(4).fill("/11.png");

  return (
    <>
      <motion.div
        className="flex flex-col md:flex-row items-start gap-4 px-4 max-w-334 mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* image gallery */}
        <motion.div
          className="md:rounded-[48px] md:overflow-hidden w-full md:w-2/3"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Mobile view - Image viewer */}
          <div className="block md:hidden">
            {/* Main image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedImage}
                className="relative w-full aspect-square bg-gray-100 rounded-3xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={productImages[selectedImage]}
                  alt={`Product view ${selectedImage + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Thumbnail selector */}
            <div className="flex gap-2 mt-4">
              {productImages.map((img, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  title={`View product image ${index + 1}`}
                  aria-label={`Select product image ${index + 1}`}
                  className={`relative w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 ${
                    selectedImage === index ? "ring-2 ring-primary" : ""
                  }`}
                  whileTap={{ rotate: 0, y: 0 }}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Desktop view - Grid of images */}
          <div className="hidden md:grid grid-cols-2 gap-4 rounded-[48px] overflow-hidden">
            {productImages.map((img, index) => (
              <motion.div
                key={index}
                className="relative aspect-square"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Image
                  src={img}
                  alt={`Product view ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* details */}
        <motion.div
          className="w-full md:w-1/3 mt-8 md:mt-0 pb-0 md:pb-23.25"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Static - New Release Badge */}
          <div className="inline-block bg-primary text-white text-xs font-semibold px-4 py-2 md:py-3 rounded-lg md:rounded-xl mb-4">
            New Release
          </div>

          {/* Product Title */}
          <h1 className="text-foreground font-semibold text-xl md:text-[32px] uppercase mb-4 leading-tight">
            {product.title}
          </h1>

          {/* Price */}
          <div className="text-primary font-bold text-2xl mb-6">
            ${product.price.toFixed(2)}
          </div>

          {/* Color Selection */}
          <div className="mb-6">
            <h3 className="text-foreground font-bold text-sm uppercase mb-3">
              COLOR
            </h3>
            {/* Static - Color options not available from API */}
            <div className="flex gap-2">
              {colors.map((color, index) => (
                <motion.button
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
                  whileTap={{ rotate: 0, y: 0 }}
                  transition={{ duration: 0.6 }}
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
              {/* Static - Size chart link */}
              <button className="text-foreground/60 text-sm font-semibold hover:text-foreground">
                SIZE CHART
              </button>
            </div>
            {/* Static - Size options not available from API */}
            <div className="flex flex-wrap gap-1.5">
              {sizes.map((size, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedSize(index)}
                  className={`w-12 h-12 rounded-lg font-semibold text-sm transition-colors ${
                    selectedSize === index
                      ? "bg-foreground text-white"
                      : "bg-white text-foreground hover:bg-gray-100"
                  }`}
                  whileTap={{ y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {size}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Static - Action Buttons */}
          <div className="flex gap-2 mb-2">
            <motion.button
              className="flex-1 bg-foreground text-white font-medium text-sm uppercase tracking-wide py-4 rounded-lg hover:bg-foreground/90 transition-colors"
              whileTap={{ y: 0 }}
              onClick={handleAddToCart}
            >
              ADD TO CART
            </motion.button>
            <motion.button
              className="bg-foreground text-white p-4 rounded-lg hover:bg-foreground/90 transition-colors"
              whileTap={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaHeart className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Static - Buy It Now Button */}
          <Button className="w-full mb-6" onClick={handleBuyNow}>
            BUY IT NOW
          </Button>

          {/* About the Product */}
          <div>
            <h3 className="text-foreground font-semibold text-[16px] uppercase mb-3">
              ABOUT THE PRODUCT
            </h3>
            {/* Product Description */}
            <p className="text-[#232321] text-[16px] mb-5 font-openSans">
              {product.description}
            </p>
            {/* Product Category */}
            <p className="text-[#232321] text-[16px] mb-3 font-openSans font-semibold">
              Category: {product.category.name}
            </p>
            {/* Static - Promotional and payment info not available from API */}
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
        </motion.div>

        {/* suggested products section  */}
      </motion.div>
      <div>
        <MayLikeProducts />
      </div>
    </>
  );
}
