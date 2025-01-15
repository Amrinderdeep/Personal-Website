import React from "react";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import ShineBorder from "@/components/ui/shine-border";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Bizzplus Web Development",
      description:
        "Bizzplus provides a wide range of software solutions, including websites and mobile apps. We specialize in custom development to meet the unique needs of our clients across various industries.",
      image: "/img/bizzplus.png",
      link: "https://bizzplus.in",
    },
    {
      title: "TP Designs and Concepts",
      description:
        "TPDesigns is a graphic design firm specializing in marketing and brand development. We create impactful visual solutions that help businesses establish strong identities and connect with their audience.",
      image: "/img/tp.png",
      link: "https://tpdesigns.co.in",
    },
    {
      title: "IRCS Ludhiana - Red Cross Movement",
      description:
        "The IRCS Ludhiana project aims to support the humanitarian efforts of the Indian Red Cross Society, focusing on community outreach, donations, and social welfare activities in Ludhiana.",
      image: "/img/ircs.png",
      link: "https://ircs-ludhiana.com",
    },
    {
      title: "Gagandeep Jugesh and Co",
      description:
        "Gagandeep Jugesh and Co. is a Ludhiana-based chartered accountancy firm specializing in comprehensive financial services, including auditing, taxation, accounting, and financial advisory.",
      image: "/img/ca.png",
      link: "https://gagandeepjugeshco.vercel.app",
    },
  ];

  // Slider settings with custom buttons
  const sliderSettings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-scroll
    autoplaySpeed: 3000, 
    accessibility: false,
    pauseOnHover: false,
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
    <div className="container mx-auto mt-10" style={{ width: "90%" }}>
      {/* Section Heading */}
      <h2 className="text-4xl text-center bg-gradient-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92] bg-clip-text text-transparent mb-4">
        Projects
      </h2>
      <p className="text-center text-gray-600 mb-8 text-lg">
        The things I have built.
      </p>

      {/* Carousel */}
      <Slider {...sliderSettings}>
        {projects.map((project, index) => (
          <div key={index} className="p-4">
            <ProjectCard project={project} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Reusable ProjectCard Component
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-white overflow-hidden transition-transform transform hover:scale-105 mb-10">
      <ShineBorder
        className="flex flex-col items-center justify-center overflow-hidden rounded-lg border md:shadow-xl"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </ShineBorder>
      {/* Card Content */}
      <div className="pt-4 pb-4 flex flex-col h-full">
        <ShineBorder
          className="flex mx-auto flex-col items-center justify-center overflow-hidden rounded-lg border md:shadow-xl"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <h3 className="text-lg font-semibold bg-gradient-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92] bg-clip-text text-transparent">
            {project.title}
          </h3>
          <a
            className="m-2 mb-0 ms-0"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InteractiveHoverButton text="Link" />
          </a>
          <p className="text-gray-600 text-sm flex-grow mt-2">
            {project.description}
          </p>
        </ShineBorder>
      </div>
    </div>
  );
};

export default Projects;
