import React from "react";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import ShineBorder from "@/components/ui/shine-border";

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
      image: "/img/bizzplus.png", // Replace with actual image URL
      link: "https://bizzplus.in", // Replace with actual project link
    },
    {
      title: "TPDesigns - Interior Architecture",
      description:
        "TPDesigns is a creative studio specializing in interior architecture and landscape design. Our team brings functional and aesthetically pleasing spaces to life with a focus on innovation and detail.",
      image: "/img/tp.png", // Replace with actual image URL
      link: "https://tpdesigns.co.in", // Replace with actual project link
    },
    {
      title: "IRCS Ludhiana - Red Cross Movement",
      description:
        "The IRCS Ludhiana project aims to support the humanitarian efforts of the Indian Red Cross Society, with a focus on community outreach, donations, and social welfare activities in Ludhiana.",
      image: "/img/ircs.png", // Replace with actual image URL
      link: "https://ircs-ludhiana.com", // Replace with actual project link
    },
  ];

  return (
    <div className="container mx-auto mt-10 px-4 m-5" style={{width: '80%'}}>
      {/* Section Heading */}
      <h2 className="text-4xl  text-center bg-gradient-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92] bg-clip-text text-transparent mb-4">
        Projects
      </h2>
      <p className="text-center text-gray-600 mb-8 text-lg">
        The things I have built.
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      
        {projects.map((project, index) => (
           
          <div
            key={index}
            className="bg-white  overflow-hidden transition-transform transform hover:scale-105 mb-10"
          >
             <ShineBorder
            className=" flex flex-col items-center justify-center overflow-hidden rounded-lg border  md:shadow-xl"
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
            className=" flex mx-auto flex-col items-center justify-center overflow-hidden rounded-lg border  md:shadow-xl"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          >
              <h3 className="text-lg font-semibold bg-gradient-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92] bg-clip-text text-transparent">
                {project.title}
              </h3>
              <a className="m-2 mb-0 ms-0" href={project.link}>
              <InteractiveHoverButton text='Link' />
              </a>
              <p className="text-gray-600 text-sm flex-grow mt-2">
                {project.description}

              </p>
        </ShineBorder>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
