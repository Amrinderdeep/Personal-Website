import { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import '../css/App.css'
import { RainbowButton } from "@/components/ui/rainbow-button";

export const Banner = () => {
 

  // Ref for the 3D model
  const modelRef = useRef<any>(null);


  // Function to handle mouse move effect on the model
  const handleMouseMove = (e: MouseEvent) => {
    if (!modelRef.current) {
      const x = (e.clientX / window.innerWidth) - 0.5; // Normalize to range [-0.5, 0.5]
      const y = (e.clientY / window.innerHeight) - 0.5; // Normalize to range [-0.5, 0.5]
      
      // Apply tilt effect on mouse movement
      modelRef.current.rotation.x = y * 2; // Tilt in the X-axis based on Y mouse position
      modelRef.current.rotation.y = x * 2; // Tilt in the Y-axis based on X mouse position
    }
  };
  
  useEffect(() => {
    const onMouseMoveHandler = (event: MouseEvent) => handleMouseMove(event);

    window.addEventListener('mousemove', onMouseMoveHandler);

    // Clean up the event listener
    return () => {
      window.removeEventListener('mousemove', onMouseMoveHandler);
    };
  }, []);

  // GLTF Model Component
  const Model = () => {
    const { scene } = useGLTF('/models/my_computer/scene.gltf');
    return (
      <primitive
        ref={modelRef}
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
 

  return (
      <div className="p-5 mb-0 pt-0 pb-0 overflow-hidden mt-5">
      <div className="flex flex-col md:flex-row items-center mt-5 space-y-5 md:space-y-0 md:space-x-5">
        {/* Left Column for Text */}
        <div className="md:w-3/4 text-center md:text-left px-5">
                  <span className="tagline bg-gradient-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92] bg-clip-text text-transparent">Welcome to my Portfolio</span>
                  <h1 className="main-heading">Hi! I'm Amrinderdeep </h1>
                  <p className="intro-text">
                    Passionate and motivated B.Tech Engineering student studying Information Technology at Guru Nanak Dev Engineering College. I am dedicated to honing my skills and expanding my knowledge in this exciting and ever-evolving field.
                  </p>
                  
                  <p className="hobby-text">
                    In addition to my technical expertise, I have a deep passion for music. I am skilled in playing the guitar and piano, which has enhanced my creativity and ability to compose original music for video games. This combination of technical proficiency and musical aptitude allows me to bring a unique perspective to my game development projects.
                  </p>
                <div className='mt-5' style={{marginTop: '40px'}}>
                <a href="https://www.linkedin.com/in/amrinderdeep-singh-bhatt-0a330225a/"><RainbowButton >GET IN TOUCH</RainbowButton></a>
                </div>
          </div>

          {/* Right Column for 3D Model */}
        <div className="md:w-1/2 flex justify-center items-center w-full">

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
                autoRotate={true} // Disable auto-rotation
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


