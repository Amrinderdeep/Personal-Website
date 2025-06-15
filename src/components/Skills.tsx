import OrbitingCircles from "@/components/ui/orbiting-circles";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs, FaPython, FaJs, FaHtml5, FaUnity, FaReact, FaBootstrap, FaGithub, FaDocker, FaCuttlefish, FaGit, FaWordpress, FaAws } from 'react-icons/fa';
import { SiOpenai, SiMysql, SiTypescript, SiCplusplus, SiFlask, SiJsonwebtokens, SiNextdotjs, SiTailwindcss, SiPostman, SiJira, SiConfluence, SiFirebase, SiGooglecloud } from "react-icons/si";
import { FiFramer } from "react-icons/fi";
import { TbBrandThreejs } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

import '../css/skills.css'

export function Skills() {
  return (
    <div className="mb-40 max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between mb-10">
        {/* Left Column for Orbiting Circles */}
        <div className="relative flex h-[450px] w-full flex-col items-center justify-center overflow-hidden bg-background/70 backdrop-blur-md md:w-1/2 p-4 rounded-lg">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
            Skills
          </span>

          {/* Inner Circles */}
          <OrbitingCircles
            className="size-[30px] border-none bg-transparent"
            duration={20}
            delay={20}
            radius={80}
          >
            <FaGithub size={200} style={{ color: '#181717' }} />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[30px] border-none bg-transparent"
            duration={20}
            delay={10}
            radius={80}
          >
            <FaNodeJs size={200} style={{ color: '#339933' }} />
          </OrbitingCircles>

          {/* Outer Circles (reverse) */}
          <OrbitingCircles
            className="size-[50px] border-none bg-transparent"
            radius={190}
            duration={20}
            reverse
          >
            <SiMongodb size={200} style={{ color: '#47A248' }} />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[50px] border-none bg-transparent"
            radius={190}
            duration={20}
            delay={20}
            reverse
          >
            <FaReact size={200} style={{ color: '#61dafb' }} />
          </OrbitingCircles>
        </div>

        {/* Right Column for Skills List */}
        <div className="md:w-3/4 mt-10 md:mt-0 p-5 rounded-lg bg-background/70 backdrop-blur-md shadow-lg border border-white/10">
          <div className="skills-section">
            <p className="mb-4 bg-gradient-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92] bg-clip-text text-transparent text-3xl font-semibold" style={{fontSize: '1.7rem'}}>My Expertise: Tools & Technologies</p>
            <p className="text-muted-foreground mb-6 text-md">
              I possess a strong foundation in various programming languages, frameworks, and tools, allowing me to build robust and scalable applications. My passion lies in creating impactful solutions and continuously learning new technologies.
            </p>

            {/* Languages */}
            <div className="mb-4">
              <h4 className="text-xl font-semibold mb-2 text-foreground">Languages & Databases:</h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3">
                <FaJs size={40} title="JavaScript" className="icon text-blue-500" />
                <SiTypescript size={40} title="TypeScript" className="icon text-blue-600" />
                <FaPython size={40} title="Python" className="icon text-blue-800" />
                <SiCplusplus size={40} title="C++" className="icon text-blue-700" />
                <FaCuttlefish size={40} title="C#" className="icon text-purple-600" />
                <FaHtml5 size={40} title="HTML/CSS" className="icon text-orange-500" />
                <SiMysql size={40} title="MySQL" className="icon text-blue-900" />
                <SiMongodb size={40} title="MongoDB" className="icon text-green-600" />
              </div>
            </div>

            {/* Frameworks/Libraries */}
            <div className="mb-4">
              <h4 className="text-xl font-semibold mb-2 text-foreground">Frameworks & Libraries:</h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3">
                <FaNodeJs size={40} title="Node.js" className="icon text-green-500" />
                <FaReact size={40} title="React" className="icon text-cyan-400" />
                <SiNextdotjs size={40} title="Next.js" className="icon text-black dark:text-white" />
                <FaBootstrap size={40} title="Bootstrap" className="icon text-purple-700" />
                <SiFlask size={40} title="Flask" className="icon text-gray-800 dark:text-gray-200" />
                <TbBrandThreejs size={40} title="Three.js" className="icon text-black dark:text-white" />
                <FiFramer size={40} title="Framer Motion" className="icon text-purple-500" />
                <SiTailwindcss size={40} title="Tailwind CSS" className="icon text-teal-500" />
                <FaWordpress size={40} title="WordPress" className="icon text-blue-400" />
              </div>
            </div>

            {/* Tools and Platforms */}
            <div>
              <h4 className="text-xl font-semibold mb-2 text-foreground">Tools & Platforms:</h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3">
                <VscVscode size={40} title="VS Code" className="icon text-blue-600" />
                <FaUnity size={40} title="Unity" className="icon text-gray-700 dark:text-gray-300" />
                <FaGithub size={40} title="GitHub" className="icon text-black dark:text-white" />
                <FaDocker size={40} title="Docker" className="icon text-blue-700" />
                <SiOpenai size={40} title="OpenAI" className="icon text-teal-600" />
                <SiPostman size={40} title="Postman" className="icon text-orange-600" />
                <SiJira size={40} title="Jira" className="icon text-blue-800" />
                <SiConfluence size={40} title="Confluence" className="icon text-blue-700" />
                <SiFirebase size={40} title="Firebase" className="icon text-yellow-500" />
                <FaAws size={40} title="AWS" className="icon text-orange-400" />
                <SiGooglecloud size={40} title="Google Cloud" className="icon text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
