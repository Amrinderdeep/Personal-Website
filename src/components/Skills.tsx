import OrbitingCircles from "@/components/ui/orbiting-circles";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs, FaPython, FaJs, FaHtml5, FaUnity, FaReact, FaBootstrap, FaGithub, FaDocker, FaCuttlefish, FaGit } from 'react-icons/fa';
import { SiOpenai, SiMysql, SiTypescript, SiCplusplus, SiFlask, SiJsonwebtokens } from "react-icons/si";
import { FiFramer } from "react-icons/fi";
import { TbBrandThreejs } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

import '../css/skills.css'

export function Skills() {
  return (
    <div className="mb-40">
      <div className="flex flex-col md:flex-row items-center justify-between mb-20">
        {/* Left Column for Orbiting Circles */}
        <div className="relative flex h-[450px] w-full flex-col items-center justify-center overflow-hidden bg-background  md:w-1/2">
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
        <div className="md:w-1/2 mt-10 md:mt-0 p-5">
          <div className="skills-section mb-5">
            <p className="mb-4 bg-gradient-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92] bg-clip-text text-transparent text-3xl" style={{fontSize: '1.7rem'}}>The things I've worked with.</p>

            {/* Languages */}
            <div className="flex flex-wrap mb-4">
              <div className="w-full md:w-1/4 flex items-center">
                <h4 className="mb-2">Languages:</h4>
              </div>
              <div className="w-full md:w-3/4">
                <div className="flex flex-wrap">
                  <FaJs size={40} title="JavaScript" className="icon mr-4 mb-4" />
                  <SiTypescript size={40} title="TypeScript" className="icon mr-4 mb-4" />
                  <FaPython size={40} title="Python" className="icon mr-4 mb-4" />
                  <SiCplusplus size={40} title="C++" className="icon mr-4 mb-4" />
                  <FaCuttlefish size={40} title="C#" className="icon mr-4 mb-4" />
                  <FaHtml5 size={40} title="HTML/CSS" className="icon mr-4 mb-4" />
                  <SiMysql size={40} title="SQL" className="icon mr-4 mb-4" />
                </div>
              </div>
            </div>

            {/* Frameworks/Libraries */}
            <div className="flex flex-wrap mb-4">
              <div className="w-full md:w-1/4 flex items-center">
                <h4 className="mb-2">Frameworks/Libraries:</h4>
              </div>
              <div className="w-full md:w-3/4">
                <div className="flex flex-wrap">
                  <FaNodeJs size={40} title="Node.js" className="icon mr-4 mb-4" />
                  <FaReact size={40} title="React" className="icon mr-4 mb-4" />
                  <FaBootstrap size={40} title="Bootstrap" className="icon mr-4 mb-4" />
                  <SiFlask size={40} title="Flask" className="icon mr-4 mb-4" />
                  <TbBrandThreejs size={40} title="Three.js" className="icon mr-4 mb-4" />
                  <FaGit size={40} title="Git" className="icon mr-4 mb-4" />
                  <SiJsonwebtokens size={40} title="JWT" className="icon mr-4 mb-4" />
                  <FiFramer size={40} title="Framer" className="icon mr-4 mb-4" />
                </div>
              </div>
            </div>

            {/* Tools and Software */}
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/4 flex items-center">
                <h4 className="mb-2">Tools and Software:</h4>
              </div>
              <div className="w-full md:w-3/4">
                <div className="flex flex-wrap">
                  <VscVscode size={40} title="VS Code" className="icon mr-4 mb-4" />
                  <FaUnity size={40} title="Unity" className="icon mr-4 mb-4" />
                  <FaGithub size={40} title="GitHub" className="icon mr-4 mb-4" />
                  <FaDocker size={40} title="Docker" className="icon mr-4 mb-4" />
                  <SiOpenai size={40} title="ChatGPT" className="icon mr-4 mb-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
