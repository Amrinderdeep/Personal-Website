import React, { useState } from 'react';
import { Banner } from './components/Banner';
import Startup from './components/Startup';
import { AnimatePresence } from 'framer-motion';
import { SubBanner } from './components/SubBanner';
import NavBar from './components/Navbar';
import Projects from './components/Projects';
import { Skills } from './components/Skills';
import { FaHome, FaToolbox, FaFolderOpen } from 'react-icons/fa';
import Footer from './components/Footer';
import { Link } from 'react-scroll';

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const handleLoaderComplete = () => {
    setTimeout(() => setLoading(false), 1000);
  };

  const styles = {
    navbarContainer: {
      position: 'fixed' as const,
      top: '50%',
      right: '20px',
      transform: 'translateY(-40%)',
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      zIndex: 1000,
    },
    line: {
      width: '3px',
      height: '200px',
      backgroundColor: '#e74c3c',
      margin: '10px 0',
    },
    icon: {
      fontSize: '24px',
      color: '#2c3e50',
      cursor: 'pointer',
      margin: '10px 0',
      transition: 'color 0.3s ease',
    },
  };

  return (
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
              
            >
              <FaHome className='hover:text-[#e74c3c]'/>
            </Link>
            <div style={styles.line}></div>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              offset={-170}
              style={styles.icon}
            >
              <FaToolbox className='hover:text-[#e74c3c]'/>
            </Link>
            <div style={styles.line}></div>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              offset={-130}
              style={styles.icon}
            >
              <FaFolderOpen className='hover:text-[#e74c3c]'/>
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
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
