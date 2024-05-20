"use client";

import Image from "next/image";

import { CustomButton } from "@/components";
import {motion} from "framer-motion";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          
        </h1>

        <p className="hero__subtitle">
        Find, book, rent a car—quick and super easy!
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <motion.div animate ={{opacity: 12}} initial={{opacity: 0}} className="hero__image">
            <Image src="/hero.png" alt="hero" fill className="object-contain" />
         
        </motion.div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
