"use client";

import MayLikeProducts from "@/components/MayLikeProducts";
import Image from "next/image";
import { FaHeart, FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";
import { useAppContext } from "@/context/AppContext";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, getCartTotal } =
    useAppContext();

  const subtotal = getCartTotal();
  const delivery = cart.length > 0 ? 6.99 : 0;
  const salesTax = 0;
  const total = subtotal + delivery + salesTax;

  if (cart.length === 0) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center min-h-[60vh] px-8 max-w-334 mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-4xl font-semibold mb-4">
          Your cart is empty
        </h2>
        <p className="text-foreground/60 mb-8">
          Add some products to get started!
        </p>
      </motion.div>
    );
  }

  return (
    <>
      <motion.div
        className="flex flex-col items-start gap-4 px-8 max-w-334 mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* heading text */}
        <div className="max-w-3xl mb-6">
          <h3 className="text-2xl md:text-[32px] font-semibold">
            Saving to celebrate{" "}
          </h3>
          <p className="text-xs md:text-sm font-openSans my-3">
            Enjoy up to 60% off thousands of styles during the End of Year sale
            - while suppiles last. No code needed.
          </p>
          <p className="text-xs md:text-sm font-openSans">Join us or Sign-in</p>
        </div>

        {/* cart data */}
        <div className="flex flex-col md:flex-row items-start gap-12 w-full">
          {/* Left side - Your Bag */}
          <motion.div
            className="w-full md:w-2/3 bg-white rounded-2xl p-4 md:p-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* heading text */}
            <div className="mb-8">
              <h1 className="text-xl md:text-[32px] font-semibold mb-2">
                Your Bag
              </h1>
              <p className="text-sm md:text-[16px] text-foreground font-openSans">
                Items in your bag not reserved- check out now to make them
                yours.
              </p>
            </div>

            {/* cart items */}
            <div className="space-y-4">
              {cart.map((item, index) => (
                <motion.div
                  key={item.id}
                  className=" "
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex gap-4 md:gap-6 items-start">
                    {/* Product Image */}
                    <div className="w-[155px] md:w-52 h-56 bg-white rounded-2xl overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={128}
                        height={128}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 flex flex-col">
                      <div className="flex flex-col md:flex-row justify-between items-start mb-2">
                        <div>
                          <h3 className="text-foreground font-semibold text-base md:text-2xl uppercase">
                            {item.title}
                          </h3>
                          {item.selectedColor && (
                            <p className="text-foreground text-sm md:text-xl font-semibold font-openSans">
                              Color: {item.selectedColor}
                            </p>
                          )}
                        </div>
                        <div className="text-primary font-bold text-xl md:text-2xl">
                          ${item.price.toFixed(2)}
                        </div>
                      </div>

                      {/* Size and Quantity */}
                      <div className="flex gap-4 mb-4 mt-2">
                        {item.selectedSize && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold">
                              Size {item.selectedSize}
                            </span>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold">
                            Quantity {item.quantity}
                          </span>
                        </div>
                      </div>

                      {/* Action Icons */}
                      <div className="flex gap-3">
                        <motion.button
                          className="text-foreground/60 hover:text-foreground"
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaHeart className="w-5 h-5" />
                        </motion.button>
                        <motion.button
                          className="text-foreground/60 hover:text-foreground"
                          whileTap={{ y: 1 }}
                          transition={{ duration: 0.5 }}
                          onClick={() => removeFromCart(item.id)}
                        >
                          <FaTrash className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Order Summary */}
          <motion.div
            className="w-full md:w-1/3"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white md:bg-transparent rounded-3xl p-6 sticky top-4">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="font-openSans">
                    {cart.length} ITEM{cart.length !== 1 ? "S" : ""}
                  </span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-openSans">Delivery</span>
                  <span className="font-semibold">${delivery.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-openSans">Sales Tax</span>
                  <span className="font-semibold">-</span>
                </div>
              </div>

              <div className="border-t border-foreground/20 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-xl font-bold">${total.toFixed(2)}</span>
                </div>
              </div>

              <motion.button
                className="w-full bg-foreground text-white font-semibold text-sm uppercase tracking-wide py-4 rounded-lg hover:bg-foreground/90 transition-colors mb-4"
                whileTap={{ y: 0 }}
              >
                CHECKOUT
              </motion.button>

              <button className="w-full text-foreground/60 text-sm font-semibold hover:text-foreground underline">
                User a promo code
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div>
        <MayLikeProducts />
      </div>
    </>
  );
}
