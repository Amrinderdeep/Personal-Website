import TextReveal from "@/components/ui/text-reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function SubBanner() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Animation starts when target enters, ends when it leaves
  });

  // Define a range for the TextReveal animation within the overall scroll
  // This makes the text reveal happen as the SubBanner section is sticky
  const textRevealProgress = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]); // Example: animation plays from 30% to 70% of section scroll

  return (
    <div ref={containerRef} className="relative z-10 w-full bg-background mt-10 mb-0 md:mb-20 min-h-[200vh]"> {/* Add min-h-screen for scroll effect */}
      <div className="sticky top-0 h-screen flex flex-col md:flex-row items-center justify-center p-4 bg-background/70 backdrop-blur-md rounded-lg shadow-xl mx-4 md:mx-auto max-w-5xl overflow-hidden border border-white/10">
        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center items-center p-4 md:p-8 relative"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/img/profile.jpeg" // Replace with your actual image path
            alt="Amrinderdeep Singh Bhatt"
            className="w-full h-auto max-w-xs md:max-w-md lg:max-w-lg object-cover rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
          />
          {/* Creative overlay/accent - inspired by the 'designer' image */}
          <motion.div
            className="absolute inset-0 rounded-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          ></motion.div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left p-4 md:p-8"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92] bg-clip-text text-transparent mb-4">
            Explore My Technical Journey
          </h2>
          <p className="mb-6">
            <TextReveal 
              text="Get a Glimpse of My Skills and Projects." 
              progress={textRevealProgress} 
            />
          </p>
        </motion.div>
      </div>
    </div>
  );
}
