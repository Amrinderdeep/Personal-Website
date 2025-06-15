import React, { useState } from 'react';
import { Banner } from './components/Banner';
import Startup from './components/Startup';
import { AnimatePresence } from 'framer-motion';
import { SubBanner } from './components/SubBanner';
import NavBar from './components/Navbar';
import Projects from './components/Projects';
import Experience from './components/Experience';
import { Skills } from './components/Skills';
import Certifications from './components/Certifications';
import { FaHome, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaTrophy, FaAward, FaBriefcase, FaCode } from 'react-icons/fa';
import Footer from './components/Footer';
import { Link } from 'react-scroll';
import { CgWebsite } from "react-icons/cg";
import { Achievements } from './components/Achievements';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Blog from './components/Blog';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dock, DockIcon } from "@/components/ui/dock";
import { SiLeetcode, SiGmail } from 'react-icons/si';
import { ThemeProvider } from './contexts/ThemeContext';

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const handleLoaderComplete = () => {
    setTimeout(() => setLoading(false), 1000);
  };

  const styles = {
    navbarContainer: {
      position: 'fixed' as const,
      top: '58%',
      right: '20px',
      transform: 'translateY(-50%)',
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      zIndex: 1000,
      height: 'calc(100vh - 150px)',
    },
    line: {
      width: '3px',
      height: '8%',
      backgroundColor: 'hsl(var(--primary))',
      margin: '10px 0',
      transition: 'background-color 0.3s ease',
    },
    icon: {
      fontSize: '24px',
      background: 'linear-gradient(to bottom, #A97CF8, #F38CB8, #FDCC92)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      cursor: 'pointer',
      margin: '10px 0',
      transition: 'all 0.3s ease',
    },
    socialDockContainer: {
      position: 'fixed' as const,
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 1000,
    },
  };

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path='/' element={
            <>
              <AnimatePresence>
                {loading && <Startup onAnimationComplete={handleLoaderComplete} />}
              </AnimatePresence>
              {!loading && (
                <>
                  {/* Vertical Navbar */}
                  <div style={styles.navbarContainer}>
                    <Link
                      to="home"
                      smooth={true}
                      duration={500}
                      offset={-130}
                      style={styles.icon}
                      activeClass="active-link"
                      spy={true}
                    >
                      <FaHome />
                    </Link>
                    <div style={styles.line}></div>
                    <Link
                      to="skills"
                      smooth={true}
                      duration={500}
                      offset={-170}
                      style={styles.icon}
                      activeClass="active-link"
                      spy={true}
                    >
                      <FaCode />
                    </Link>
                    <div style={styles.line}></div>
                    <Link
                      to="portfolio"
                      smooth={true}
                      duration={500}
                      offset={-130}
                      style={styles.icon}
                      activeClass="active-link"
                      spy={true}
                    >
                      <CgWebsite />
                    </Link>
                    <div style={styles.line}></div>
                    <Link
                      to="experience"
                      smooth={true}
                      duration={500}
                      offset={-150}
                      style={styles.icon}
                      activeClass="active-link"
                      spy={true}
                    >
                      <FaBriefcase />
                    </Link>
                    <div style={styles.line}></div>
                    <Link
                      to="certifications"
                      smooth={true}
                      duration={500}
                      offset={-130}
                      style={styles.icon}
                      activeClass="active-link"
                      spy={true}
                    >
                      <FaAward />
                    </Link>
                    <div style={styles.line}></div>
                    <Link
                      to="achievements"
                      smooth={true}
                      duration={500}
                      offset={-150}
                      style={styles.icon}
                      activeClass="active-link"
                      spy={true}
                    >
                      <FaTrophy />
                    </Link>
                  </div>

                  {/* Content Sections */}
                  <NavBar />
                  <div id="home">
                    <Banner />
                  </div>
                  <SubBanner />
                  <div id="skills">
                    <Skills />
                  </div>
                  <div id="portfolio">
                    <Projects />
                  </div>
                  <div id="experience">
                    <Experience />
                  </div>
                  <div id="certifications">
                    <Certifications />
                  </div>
                  <div id="achievements">
                    <Achievements />
                  </div>

                  {/* Social Links Dock */}
                  <div style={styles.socialDockContainer}>
                    <Dock 
                      iconMagnification={80} 
                      iconDistance={120} 
                      iconSize={50}
                      className="dock-container"
                    >
                      <DockIcon className="bg-black/10 dark:bg-white/10 hover:scale-110 transition-transform">
                        <a href="https://github.com/Amrinderdeep">
                          <FaGithub className="w-full h-full" size={40} />
                        </a>
                      </DockIcon>
                      <DockIcon className="bg-black/10 dark:bg-white/10 hover:scale-110 transition-transform">
                        <a href="https://www.linkedin.com/in/amrinderdeep-singh-bhatt-0a330225a/">
                          <FaLinkedin className="w-full h-full" size={40} color="#0072b1" />
                        </a>
                      </DockIcon>
                      <DockIcon className="bg-black/10 dark:bg-white/10 hover:scale-110 transition-transform">
                        <a href="https://leetcode.com/u/Amrinderdeep/">
                          <SiLeetcode className="w-full h-full" size={40} color="#FFA116" />
                        </a>
                      </DockIcon>
                      <DockIcon className="bg-black/10 dark:bg-white/10 hover:scale-110 transition-transform">
                        <a href="mailto:addybhatt22@gmail.com">
                          <SiGmail className="w-full h-full" size={40} color="#D14836" />
                        </a>
                      </DockIcon>
                    </Dock>
                  </div>

                  <Footer />
                </>
              )}
            </>
          }/>
          <Route path='/skillstack-blog' element={
            <>
              <AnimatePresence>
                {loading && <Startup onAnimationComplete={handleLoaderComplete} />}
              </AnimatePresence>
              {!loading && (
                <>
                  {/* Content Sections */}
                  <NavBar />
                  <Blog />
                  <Footer />
                </>
              )}
            </>
          }/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
