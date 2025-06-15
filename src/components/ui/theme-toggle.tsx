import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-8 w-16 cursor-pointer items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background overflow-hidden"
      style={{
        backgroundColor: theme === 'light' ? '#87CEEB' : '#343A40', // Sky blue for light, dark gray for dark
      }}
    >
      <span className="sr-only">Toggle theme</span>
      {/* Sun/Moon */}
      <motion.span
        className="absolute h-6 w-6 rounded-full shadow-lg"
        style={{
          backgroundColor: theme === 'light' ? '#FFD700' : '#CED4DA', // Gold for sun, light gray for moon
        }}
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        animate={{
          x: theme === 'light' ? "4px" : "36px", // Fixed pixel value for dark mode positioning
          opacity: theme === 'light' ? 1 : 0.8 // Adjust opacity for moon
        }}
      />

      {/* Clouds for light mode */}
      {theme === 'light' && (
        <>
          <motion.div
            className="absolute rounded-full bg-white"
            initial={{ x: "-20px", y: "-5px", width: "30px", height: "15px", opacity: 0 }}
            animate={{ x: "20px", y: "-5px", opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          />
          <motion.div
            className="absolute rounded-full bg-white"
            initial={{ x: "-10px", y: "8px", width: "25px", height: "12px", opacity: 0 }}
            animate={{ x: "40px", y: "8px", opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />
          <motion.div
            className="absolute rounded-full bg-white"
            initial={{ x: "-30px", y: "10px", width: "35px", height: "18px", opacity: 0 }}
            animate={{ x: "10px", y: "10px", opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          />
        </>
      )}

      {/* Stars for dark mode */}
      {theme === 'dark' && (
        <>
          <motion.div className="absolute h-1 w-1 rounded-full bg-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} style={{ top: '5px', left: '10px' }} />
          <motion.div className="absolute h-1 w-1 rounded-full bg-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ top: '15px', left: '25px' }} />
          <motion.div className="absolute h-1 w-1 rounded-full bg-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} style={{ top: '8px', left: '40px' }} />
        </>
      )}

    </button>
  );
};

export default ThemeToggle; 