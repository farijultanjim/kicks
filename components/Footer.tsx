"use client";

import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="px-4 pt-8 pb-7 max-w-334 mx-auto">
      {/* Newsletter Banner */}
      <motion.div
        className="bg-primary rounded-3xl md:rounded-t-[48px] mb-0 px-4 sm:px-18 pt-4 sm:pt-16 pb-28 flex flex-col md:flex-row items-center justify-between gap-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-white font-semibold text-[32px] md:text-5xl uppercase leading-tight mb-3">
            Join our KicksPlus <br /> Club &amp; get 15% off
          </h2>
          <p className="text-[#E7E7E3] text-[16px] sm:text-[20px] mb-6 font-openSans">
            Sign up for free! Join the community.
          </p>
          <div className="flex items-center gap-1 max-w-sm">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 bg-transparent border border-background text-foreground text-sm px-4 py-2.5 rounded-lg outline-none placeholder:text-gray-400 font-openSans"
            />
            <motion.button
              className="bg-foreground text-white text-sm font-medium uppercase tracking-widest px-5 py-[11px] rounded-lg hover:bg-black transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 flex justify-start md:justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Image
            src="/Logo_white.png"
            alt="Kicks Logo"
            width={400}
            height={400}
            className="object-contain h-[61px] w-[200px] md:h-[112px] md:w-[367px]"
          />
        </motion.div>
      </motion.div>

      {/* Main Footer */}
      <motion.div
        className="bg-foreground rounded-3xl md:rounded-[48px] -mt-16 px-4 md:px-10 md:pr-12 pt-4 md:pt-10 pb-40 md:pb-60 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          {/* About */}
          <div className="w-full md:w-[38%]">
            <h3 className="text-accent font-black text-2xl md:text-4xl mb-3 font-rubik">
              About us
            </h3>
            <p className="text-[#E7E7E3] text-[16px] md:text-xl font-semibold  font-openSans">
              We are the biggest hyperstore in the universe. We got you all
              cover with our exclusive collections and latest drops.
            </p>
          </div>

          {/* links  */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-20 mb-16 ">
            {/* Categories */}
            <div>
              <h3 className="text-accent font-semibold text-xl md:text-2xl mb-4 font-rubik">
                Categories
              </h3>
              <ul className="space-y-2 font-openSans">
                {[
                  "Runners",
                  "Sneakers",
                  "Basketball",
                  "Outdoor",
                  "Golf",
                  "Hiking",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[#E7E7E3] text-[16px] sm:text-xl font-semibold hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-accent font-semibold text-xl md:text-2xl mb-4 font-rubik">
                Company
              </h3>
              <ul className="space-y-2 font-openSans">
                {["About", "Contact", "Blogs"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[#E7E7E3] text-[16px] sm:text-xl font-semibold hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow us */}
            <div>
              <h3 className="text-accent font-semibold text-xl md:text-2xl mb-4 font-rubik">
                Follow us
              </h3>
              <div className="flex gap-4 md:gap-6">
                {/* Facebook */}
                <a
                  href="#"
                  className="text-[#E7E7E3] hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-6 h-6" />
                </a>
                {/* Instagram */}
                <a
                  href="#"
                  className="text-[#E7E7E3] hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
                {/* Twitter/X */}
                <a
                  href="#"
                  className="text-[#E7E7E3] hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
                {/* TikTok */}
                <a
                  href="#"
                  className="text-[#E7E7E3] hover:text-white transition-colors"
                  aria-label="TikTok"
                >
                  <FaTiktok className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Large watermark logo */}
        <motion.div
          className="absolute md:-bottom-18 inset-x-0 h-64 md:h-76.5"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Image
            src="/Logo_white.png"
            alt=""
            width={1080}
            height={1080}
            className="object-contain w-full h-full"
            aria-hidden="true"
          />
        </motion.div>
      </motion.div>

      <div className="text-center pt-4">© All rights reserved</div>
    </footer>
  );
};

export default Footer;
