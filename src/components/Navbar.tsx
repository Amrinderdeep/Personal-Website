import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import MorphingText from '@/components/ui/morphing-text';
import { Dock, DockIcon } from "@/components/ui/dock";
import ScrollProgress from "@/components/ui/scroll-progress";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode, SiGmail } from 'react-icons/si';

export type IconProps = React.HTMLAttributes<SVGElement>;

const NavBar: React.FC = () => {
  const texts = [
    "Amrinderdeep Singh Bhatt",
    "Software Developer",
    "Amrinderdeep Singh Bhatt",
    "Website Developer",
    "Amrinderdeep Singh Bhatt",
    "React Developer",
    "Amrinderdeep Singh Bhatt",
    "Full Stack Developer",
    "Amrinderdeep Singh Bhatt",
    "Game Developer",
    "Amrinderdeep Singh Bhatt",
    "AI Engineer",
    "Amrinderdeep Singh Bhatt",
    "Machine Learning Engineer",
  ];

  const [isNavOpen, setIsNavOpen] = useState(true);

  const navbarStyle: React.CSSProperties = {
    position: 'sticky',
    top: '0',
    backdropFilter: 'blur(10px)', // Applies the blur effect
    backgroundColor: 'rgba(128, 128, 128, 0.15)', // Semi-transparent white background
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
    zIndex: 10,
    paddingBottom: '25px'
  };

  const brandStyle: React.CSSProperties = {
    color: 'black',
    fontWeight: 'bold',
    textDecoration: 'none',
    marginTop: '30px',
    width: '100%',
  };

  const brandDockContainerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    flexDirection: "row", // Ensure they're inline
  };

  return (
    <>
      <Navbar expand="lg" style={navbarStyle} className='px-5 pt-0'>
        <Container fluid>
          <div style={brandDockContainerStyle} className="flex flex-col lg:flex-row">
            {/* Navbar Brand */}
            <Navbar.Brand href="#" style={brandStyle} className="me-auto  w-full mt-5">
              <MorphingText texts={texts} />
            </Navbar.Brand>

            {/* Navbar Toggle */}
            

            {/* Navbar Links */}
              <Nav className="me-auto">
                {/* Dock Icons */}
                  <Dock iconMagnification={60} iconDistance={100} className="dock-container">
                    <DockIcon className="bg-black/10 dark:bg-white/10">
                      <a href="https://github.com/Amrinderdeep">
                        <FaGithub className="w-full" />
                      </a>
                    </DockIcon>
                    <DockIcon className="bg-black/10 dark:bg-white/10">
                      <a href="https://www.linkedin.com/in/amrinderdeep-singh-bhatt-0a330225a/">
                        <FaLinkedin className="w-full" color="#0072b1" />
                      </a>
                    </DockIcon>
                    <DockIcon className="bg-black/10 dark:bg-white/10">
                      <a href="https://leetcode.com/u/Amrinderdeep/">
                        <SiLeetcode className="w-full" color="#FFA116" />
                      </a>
                    </DockIcon>
                    <DockIcon className="bg-black/10 dark:bg-white/10">
                      <a href="mailto:addybhatt22@gmail.com">
                        <SiGmail className="w-full" color="#D14836" />
                      </a>
                    </DockIcon>
                  </Dock>
              </Nav>
          </div>
        </Container>
      </Navbar>
      <ScrollProgress />

      {/* Add CSS for responsive layout and sizes */}
      <style>{`
        @media (max-width: 991px) {
          .dock-container {
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-top: 10px;
          }

          .dock-container .dock-icon {
            font-size: 20px; /* Adjust icon size for mobile */
          }

          .me-auto {
            font-size: 1.5rem; /* Adjust morphing text size */
          }
        }

        @media (max-width: 576px) {
          .dock-container .dock-icon {
            font-size: 16px; /* Further reduce icon size for smaller screens */
          }

          .me-auto {
            font-size: 1.6rem; /* Slightly larger text size on smaller screens */
          }
        }
      `}</style>
    </>
  );
};

export default NavBar;
