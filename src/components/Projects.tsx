import React from "react";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import ShineBorder from "@/components/ui/shine-border";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaReact, FaNodeJs, FaAws } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiTypescript, SiOpenai } from "react-icons/si";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies?: string[];
  isFeatured?: boolean;
}

const getTechnologyIcon = (tech: string) => {
  switch (tech.toLowerCase()) {
    case 'react':
      return <FaReact className="text-blue-500" />;
    case 'next.js':
      return <SiNextdotjs className="text-black dark:text-white" />;
    case 'typescript':
      return <SiTypescript className="text-blue-600" />;
    case 'mongodb':
      return <SiMongodb className="text-green-600" />;
    case 'tailwind css':
      return <SiTailwindcss className="text-teal-500" />;
    case 'node.js':
      return <FaNodeJs className="text-green-500" />;
    case 'aws':
      return <FaAws className="text-orange-400" />;
    case 'openai':
      return <SiOpenai className="text-teal-600" />;
    default:
      return null;
  }
};

const Projects: React.FC = () => {
  const featuredProjects: Project[] = [
    {
      title: "SkillStack AI",
      description: "Embark on your learning journey with SkillStack AI, your perfect companion whether you're an ambitious student, a driven professional, or an insatiable knowledge seeker. Our innovative platform empowers you to master new skills, explore fascinating concepts, and unlock your true potential.",
      image: "/img/skillstack.png",
      link: "https://skillstack-ai.vercel.app",
      technologies: ["Next.js", "TypeScript", "OpenAI", "MongoDB", "Tailwind CSS"],
      isFeatured: true
    },
    {
      title: "KureHealth",
      description: "A modern portfolio website for a homeopathic clinic, showcasing their services, expertise, and patient testimonials. Built as a freelance project with a focus on user experience and accessibility.",
      image: "/img/kurehealth.png",
      link: "https://kurehealth.in",
      technologies: ["React", "Node.js", "framer motion", "Next.js"],
      isFeatured: true
    }
  ];

  const otherProjects: Project[] = [
    {
      title: "Bizzplus Web Development",
      description: "Bizzplus provides a wide range of software solutions, including websites and mobile apps. We specialize in custom development to meet the unique needs of our clients across various industries.",
      image: "/img/bizzplus.png",
      link: "https://bizzplus.in",
      technologies: ["React", "Node.js", "MongoDB", "framer motion"]
    },
    {
      "title": "NexGenCred",
      "description": "A sharp, corporate-style website crafted for NexGenCred, a financial recovery firm specializing in asset reconstruction and debt resolution. Designed to reflect trust and professionalism, the site showcases their services, compliance focus, and industry expertise while ensuring smooth navigation and a modern visual identity.",
      "image": "/img/nexgencred.png",
      "link": "https://nexgencred.com/",
      "technologies": ["React", "Tailwind CSS", "shadcn/ui"]
    },
    
    {
      title: "DashDrobe",
      description: "DashDrobe is an innovative platform designed to revolutionize the way people shop for clothes. It offers a unique service where users can order their desired clothing items and have them delivered to their doorstep within just 60 minutes.",
      image: "/img/dashdrobe.png",
      link: "https://dashdrobe.in",
      technologies: ["React", "Node.js", "tailwind css"]
    },
    {
      title: "Gagandeep Jugesh and Co",
      description: "Gagandeep Jugesh and Co. is a Ludhiana-based chartered accountancy firm specializing in comprehensive financial services, including auditing, taxation, accounting, and financial advisory.",
      image: "/img/ca.png",
      link: "https://gagandeepjugeshco.com",
      technologies: ["React", "Node.js", "MongoDB", "Bootstrap"]
    },
    {
      "title": "InTouch Engineers",
      "description": "Designed and developed the official website for InTouch Engineers, a Ludhiana-based company specializing in sheet metal dies, plastic molding dies, jigs, fixtures, and advanced machining services like VMC, EDM wirecut, and surface grinding. The website highlights their expertise, modern capabilities, and commitment to quality. Focused on showcasing their industrial services clearly and professionally to attract potential clients and partners.",
      "image": "/img/intouch.png",
      "link": "https://intouchengineers.com/",
      "technologies": ["React", "Node.js", "Tailwind"]
    },
    {
      title: "TP Designs and Concepts",
      description: "TPDesigns is a graphic design firm specializing in marketing and brand development. We create impactful visual solutions that help businesses establish strong identities and connect with their audience.",
      image: "/img/tp.png",
      link: "https://tpdesigns.co.in",
      technologies: ["React", "Node.js", "Bootstrap"]
    },
    
  ];

  // Slider settings with custom buttons
  const sliderSettings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    accessibility: true,
    pauseOnHover: false,
    nextArrow: undefined,
    prevArrow: undefined,
    dots: true,
    appendDots: (dots: React.ReactNode) => (
      <div style={{ position: "absolute", bottom: "-30px", width: "100%" }}>
        <ul style={{ margin: "0px", display: "flex", justifyContent: "center" }}> {dots} </ul>
      </div>
    ),
    customPaging: (_i: number) => (
      <div
        className="slick-dot-custom"
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          backgroundColor: "#A07CFE",
          opacity: "0.4",
          transition: "opacity 0.3s ease, background-color 0.3s ease",
          cursor: "pointer",
        }}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto mt-10 px-4" style={{ width: "90%" }}>
      {/* Section Heading */}
      <h2 className="text-4xl text-center bg-gradient-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92] bg-clip-text text-transparent mb-4">
        Featured Projects
      </h2>
      <p className="text-center text-muted-foreground mb-12 text-lg">
        Showcasing my most impactful work
      </p>

      {/* Featured Projects */}
      <div className="space-y-16 mb-16">
        {featuredProjects.map((project, index) => (
          <ShineBorder
            key={index}
            className="overflow-hidden"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          >
            <div
              className="flex flex-col md:flex-row items-center gap-8 bg-card/70 backdrop-blur-md p-8 rounded-lg border border-white/10"
            >
              <div className="md:w-1/2">
                <p className="text-lg font-semibold text-primary mb-2">
                  {index === 0 ? "My Most Technical Project" : "My Most Creative Project"}
                </p>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92] bg-clip-text text-transparent mb-4">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-lg mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies?.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm flex items-center gap-2"
                    >
                      {getTechnologyIcon(tech)}
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <InteractiveHoverButton text="View Project" />
                </a>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full max-w-md shadow-lg object-cover"
                />
              </div>
            </div>
          </ShineBorder>
        ))}
      </div>

      {/* Other Projects Section */}
      <h2 className="text-3xl text-center bg-gradient-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92] bg-clip-text text-transparent mb-4">
        Other Projects
      </h2>
      <p className="text-center text-muted-foreground mb-8 text-lg">
        More of my work
      </p>

      {/* Carousel */}
      <div className="relative mb-16">
        <Slider {...sliderSettings} className="projects-carousel">
          {otherProjects.map((project, index) => (
            <div key={index} className="flex justify-center items-center px-4 py-2">
              <ProjectCard project={project} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

// Regular Project Card Component
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="mb-10 w-full">
      <div
        className="flex flex-col items-center overflow-hidden rounded-lg border md:shadow-xl bg-card/70 backdrop-blur-md text-center"
      >
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold bg-gradient-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92] bg-clip-text text-transparent mb-2">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies?.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs flex items-center gap-1"
              >
                {getTechnologyIcon(tech)}
                {tech}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <InteractiveHoverButton text="View Project" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
