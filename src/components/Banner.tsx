import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import '../css/App.css'
import { RainbowButton } from "@/components/ui/rainbow-button";
import { motion } from 'framer-motion';

export const Banner: React.FC = () => {
  // GLTF Model Component
  const Model = () => {
    const { scene } = useGLTF('/models/my_computer/scene.gltf');
    return (
      <primitive
        object={scene}
        scale={0.7}
        position={[0, 0, 0]}
      />
    );
  };

  const threeCanvasStyle = {
    zIndex: 0,
    width: '500px', // Set a max width for the model to fit
    height: '400px', 
  };
 
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.5 } },
  };

  return (
      <div className="p-5 mb-0 pt-0 pb-0 overflow-hidden mt-5 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center mt-5 space-y-5 md:space-y-0 md:space-x-5">
        {/* Left Column for Text */}
        <motion.div
          className="md:w-3/4 text-center md:text-left px-6"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
                  <span className="tagline bg-gradient-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92] bg-clip-text text-transparent">Welcome to my Portfolio</span>
                  <h1 className="main-heading text-foreground">Hi! I'm Amrinderdeep </h1>
                  <p className="intro-text text-muted-foreground">
                I'm a B.Tech IT student at GNDEC, Ludhiana, with a deep passion for technology and problem-solving. I specialize in website development, AI/ML development, and game development, where I turn ideas into impactful and creative solutions.

I enjoy diving nto data structures and algorithms (DSA), as they form the backbone of efficient problem-solving and fuel my interest in competitive programming. 
</p><p className="intro-text text-muted-foreground">With a strong eye for design and functionality, I build immersive experiences, user-friendly websites, and intelligent systems.

Always eager to learn and grow, I stay updated with emerging technologies and actively engage with tech communities. Explore my work, and let's connect to collaborate on exciting projects!    </p>
                  
                <motion.div className='mt-5' style={{marginTop: '40px'}} variants={buttonVariants}>
                <a href="https://www.linkedin.com/in/amrinderdeep-singh-bhatt-0a330225a/"><RainbowButton >GET IN TOUCH</RainbowButton></a>
                </motion.div>
          </motion.div>

          {/* Right Column for 3D Model */}
        <div className="md:w-1/4 flex justify-center items-center w-full">

            <Canvas style={threeCanvasStyle} shadows>
              {/* Lighting setup */}
              <ambientLight intensity={0.5} />
              <directionalLight
                position={[1, 2, 3]}
                intensity={2}
                castShadow
                color="#ffffff"
              />
              <directionalLight
                position={[-1, -2, -3]}
                intensity={0.5}
                color="#ffffff"
              />
              <spotLight
                position={[5, 5, 5]}
                intensity={0.5}
                angle={0.1}
                penumbra={1}
                castShadow
                color="#ffffff"
              />
              {/* Render 3D model */}
              <Model />
              {/* OrbitControls */}
              <OrbitControls
                enableZoom={false} // Disable zooming
                autoRotate={true} // Enable auto-rotation
                rotateSpeed={2}
                enableDamping={true}
              />
            </Canvas>
          </div>
        </div>
      </div>
  );
};

useGLTF.preload('/models/my_computer/scene.gltf');


