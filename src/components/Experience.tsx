import React from "react";

const Experience: React.FC = () => {
  return (
    <div className="container mx-auto mt-20 px-4 mb-20" style={{ width: "90%" }}>
      <h2 className="text-4xl text-center bg-gradient-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92] bg-clip-text text-transparent mb-4">
        Experience
      </h2>
      <p className="text-center text-muted-foreground mb-12 text-lg">
        Where I've honed my skills and made an impact
      </p>

      <div className="relative space-y-12 md:space-y-24 before:absolute before:left-1/2 before:-translate-x-1/2 before:w-1 before:h-full before:bg-gradient-to-b before:from-[#A97CF8] before:via-[#F38CB8] before:to-[#FDCC92] before:rounded-full">
        {/* MBCIE Experience */}
        <div className="flex flex-col md:flex-row items-start justify-start gap-8 relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 bg-white rounded-full p-2 z-10">
            <div className="w-4 h-4 bg-[#A97CF8] rounded-full"></div>
          </div>
          <div className="bg-card/70 backdrop-blur-md p-8 rounded-lg border border-white/10 shadow-lg w-full md:max-w-[45%] md:text-left relative">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h3 className="text-2xl font-semibold text-foreground mb-2 md:mb-0">
                MBCIE
              </h3>
              <p className="text-muted-foreground text-lg">
                June 2024 - July 2024
              </p>
            </div>
            <p className="text-xl font-medium text-primary mb-6">
              Intern
            </p>
            <ul className="list-disc list-inside space-y-4 text-muted-foreground text-lg">
              <li>
                Integrated 3D models into the company website using Three.js, boosting visual engagement by 40%.
              </li>
              <li>
                Led AR/VR development efforts using Unity, creating interactive experiences for projects.
              </li>
              <li>
                Co-authored a research paper on VR and MobileXR advancements, contributing innovative solutions to the field.
              </li>
            </ul>
          </div>
        </div>

        {/* Bizzplus PORTFOLIO Experience */}
        <div className="flex flex-col md:flex-row items-start justify-end gap-8 relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 bg-white rounded-full p-2 z-10">
            <div className="w-4 h-4 bg-[#F38CB8] rounded-full"></div>
          </div>
          <div className="bg-card/70 backdrop-blur-md p-8 rounded-lg border border-white/10 shadow-lg w-full md:max-w-[45%] md:text-left relative">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h3 className="text-2xl font-semibold text-foreground mb-2 md:mb-0">
                Bizzplus
              </h3>
              <p className="text-muted-foreground text-lg">
                October 2024 - Present
              </p>
            </div>
            <p className="text-xl font-medium text-primary mb-6">
              Freelance Developer
            </p>
            <ul className="list-disc list-inside space-y-4 text-muted-foreground text-lg">
              <li>
                Delivered custom web solutions for 12+ organizations—including government bodies, startups, and professional
                firms—emphasizing performance, security, and responsive design, resulting in a 100% increase in client satisfaction.
              </li>
              <li>
                Engineered full-stack applications using React, Nextjs, Tailwind and MongoDB, enhancing cross-device accessibility
                by 85% and implementing robust user authentication protocols.
              </li>
              <li>
                Developed and deployed web platforms for the Red Cross Society (Ludhiana) and a Chartered Accountants firm using
                React, Express, and MongoDB, streamlining form handling and admin content workflows, improving operational
                efficiency by 70%.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience; 