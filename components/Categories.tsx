import React from "react";
import Image from "next/image";
import Button from "./Button";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { FiArrowUpRight } from "react-icons/fi";

export default function Categories() {
  return (
    <div className="bg-foreground">
      <div className="pt-22.5 ">
        <div>
          {/* title  */}
          <div className="flex items-end justify-between px-4 max-w-334 mx-auto">
            <h2 className="text-2xl md:text-[74px] font-semibold max-w-150 leading-[95%] md:uppercase text-white">
              Categories
            </h2>
            <div className="flex items-center gap-2 md:gap-4">
              <button
                type="button"
                title="Previous"
                className="bg-[#E7E7E3] rounded-lg px-2 md:px-3 py-2 md:py-3"
              >
                <RiArrowLeftSLine />
              </button>
              <button
                type="button"
                title="Next"
                className="bg-white rounded-lg px-2 md:px-3 py-2 md:py-3"
              >
                <RiArrowRightSLine />
              </button>
            </div>
          </div>

          {/* categories  */}
          <div className="mt-10 flex flex-col md:flex-row  items-center pb-6 md:pb-0 pl-4 md:pl-[calc((100vw-1336px)/2+1rem)] md:pr-0 ">
            <div className="h-[348px] md:h-[600px] w-full bg-[#ECEEF0] rounded-tl-[64px] relative overflow-hidden">
              <Image
                src="/11.png"
                alt="Category"
                fill
                className="object-cover"
              />
              <h3 className="absolute bottom-4 md:bottom-7.5 left-4 md:left-12 text-foreground font-bold text-2xl md:text-4xl max-w-32 leading-snug">
                Lifestyle Shoes
              </h3>
              <div className="absolute bottom-4 md:bottom-7.5 right-4 md:right-12 bg-foreground rounded-sm md:rounded-lg p-3">
                <FiArrowUpRight className="w-4 md:w-8 h-4 md:h-8 text-white" />
              </div>
            </div>
            <div className="h-[348px] md:h-[600px] w-full bg-[#F6F6F6]  relative overflow-hidden">
              <Image
                src="/11.png"
                alt="Category"
                fill
                className="object-cover"
              />
              <h3 className="absolute bottom-4 md:bottom-7.5 left-4 md:left-12 text-foreground font-bold text-2xl md:text-4xl max-w-32 leading-snug">
                Lifestyle Shoes
              </h3>
              <div className="absolute bottom-4 md:bottom-7.5 right-4 md:right-12 bg-foreground rounded-sm md:rounded-lg p-3">
                <FiArrowUpRight className="w-4 md:w-8 h-4 md:h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
