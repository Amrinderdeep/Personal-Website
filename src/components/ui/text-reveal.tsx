"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  progress: MotionValue<number>;
}

export const TextReveal: FC<TextRevealProps> = ({
  text,
  className,
  progress,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("w-full", className)}>
      <p
        className={
          "flex flex-wrap text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl"
        }
      >
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word 
              key={i} 
              progress={progress} 
              range={[start, end]} // Each word animates based on its portion of the overall progress
            >
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mr-2 leading-relaxed">
      <span className={"absolute opacity-30 text-center w-full"}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className="inline-block text-foreground leading-normal"
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextReveal;
