import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import MorphingText from '@/components/ui/morphing-text';
import ScrollProgress from "@/components/ui/scroll-progress";
import { useTheme } from '@/contexts/ThemeContext';
import ThemeToggle from '@/components/ui/theme-toggle';
import { RainbowButton } from '@/components/ui/rainbow-button';

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

  const navbarStyle: React.CSSProperties = {
    position: 'sticky',
    top: '0',
    backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(128, 128, 128, 0.15)',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
    paddingBottom: '25px',
    paddingTop: '20px'
  };

  const brandStyle: React.CSSProperties = {
    color: 'hsl(var(--foreground))',
    fontWeight: 'bold',
    textDecoration: 'none',
    minHeight: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2.5rem',
    overflow: 'visible',
  };

  return (
    <>
      <Navbar expand="lg" style={navbarStyle} className='px-5'>
        <Container fluid>
          <div className="flex flex-wrap justify-between items-center w-full">
            <Navbar.Brand href="/" style={brandStyle} className="flex-shrink-0 mb-0 w-1/2">
              <MorphingText texts={texts} />
            </Navbar.Brand>
            <div className="flex items-center space-x-4 ml-auto">
              <a href="https://drive.google.com/file/d/1oUETc_AtPl8X8LThpQ2rxGqjYAnfBETg/view" target="_blank" rel="noopener noreferrer">
                <RainbowButton>Resume</RainbowButton>
              </a>
              <ThemeToggle />
            </div>
          </div>
        </Container>
      </Navbar>
      <ScrollProgress />
    </>
  );
};

export default NavBar;
