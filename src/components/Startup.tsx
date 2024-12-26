import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Meteors from "@/components/ui/meteors";
import '../css/motion.css';
import '../css/index.css';

interface StartupProps {
  onAnimationComplete: () => void;
}

const Startup: React.FC<StartupProps> = ({ onAnimationComplete }) => {

  useEffect(() => {
    const timer = setTimeout(onAnimationComplete, 6000); // Trigger after full animation
    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  // Variants for the screen
  const screenVariants = {
    hidden: { y: 0 }, // Start offscreen
    visible: { y: 0 }, // Fully visible
    exit: { opacity: 0 }, // Fade out on exit
  };

  // Typing effect for each letter
  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // Text to display
  const text = "AMRINDERDEEP_SINGH_BHATT";
  const subText = "SOFTWARE_ENGINEER";

  // Split text into individual characters for the typing animation
  const textArray = text.split('');
  const subTextArray = subText.split('');

  return (
    <>
      {/* Loader Screen - Positioned below the meteors */}
      <motion.div
        className="loader-screen"
        variants={screenVariants}
        initial="hidden"
        animate="visible"
        exit="exit" // This triggers the exit animation
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        style={{ position: 'absolute', zIndex: 1 }} // Position loading screen behind meteors
      >

        <div className="relative h-full w-full items-center justify-center overflow-hidden" style={{ maxWidth: '100vw', zIndex: 3, position: 'absolute' }}>
          <Meteors number={50} />
        </div>

        {/* Typing Text with Cursor */}
        <motion.div
          className="text-container"
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{ display: 'inline-block', zIndex: 3 }} // Position text on top of the loading screen
        >

          {/* Typing effect for main text (Heading) */}
          <motion.div
            className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"
            initial="hidden"
            animate="visible"
            exit="hidden"
            style={{ display: 'inline-block', marginBottom: '20px' }} // Adds spacing below the heading
          >
            {textArray.map((letter, index) => (
              <motion.span
                key={index}
                className="letter"
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                style={{ color: 'black' }}
                transition={{
                  delay: 2 + index * 0.1, // Speed up the typing effect
                  duration: 0.03, // Faster typing speed
                }}
              >
                {letter === "_" ? "\u00A0" : letter} {/* Non-breaking space */}
              </motion.span>
            ))}
          </motion.div>

          {/* Subtext with typing animation */}
          <motion.div
            className="typing-text subtext"
            initial="hidden"
            animate="visible"
            exit="hidden"
            style={{ display: 'block', marginTop: '10px', color: 'black' }} // Ensure subtext is on a new line with margin
          >
            {subTextArray.map((letter, index) => (
              <motion.span
                key={index}
                className="letter"
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                style={{ color: '#007bff' }}
                transition={{
                  delay: (2 + textArray.length * 0.1) + index * 0.1, // Start after main text
                  duration: 0.03, // Faster typing speed
                }}
              >
                {letter === "_" ? "\u00A0" : letter} {/* Non-breaking space */}
              </motion.span>
            ))}
          </motion.div>

        </motion.div>
      </motion.div>

      {/* Add CSS for responsive layout */}
      <style>{`
        /* Mobile responsive styling */
        @media (max-width: 991px) {
          .loader-screen {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .text-container {
            text-align: center;
            width: 100%;
            margin-top: 20px;
          }

          .bg-gradient-to-b {
            font-size: 2.5rem; /* Reduce text size for mobile */
          }

          .subtext {
            font-size: 1.5rem; /* Reduce subtext font size for mobile */
          }
        }

        @media (max-width: 576px) {
          .bg-gradient-to-b {
            font-size: 1.5rem; /* Further reduce text size for very small screens */
            padding: 1rem;
            }

          .subtext {
            font-size: 0.8rem; /* Further reduce subtext font size */
          }
        }
      `}</style>
    </>
  );
};

export default Startup;
