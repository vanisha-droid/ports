'use client';

import { ReactLenis } from 'lenis/react';
import { useState } from "react";
import MacFinder from "@/components/ui/MacFinder";
import MacNotes from "@/components/ui/MacNotes";
import {GradientBackground} from "../../components/animate-ui/components/backgrounds/gradient";
import {BackgroundGradientAnimation} from "../../components/ui/background-gradient-animation";

export default function Skills() {
    const [openWindows, setOpenWindows] = useState<{
    tools?: boolean;
    languages?: boolean;
    skills?: boolean;
  }>({});

  const toggleWindow = (window: "tools" | "languages" | "skills") => {
    setOpenWindows((prev) => ({
      ...prev,
      [window]: !prev[window],
    }));
  };

  const closeWindow = (window: "tools" | "languages" | "skills") => {
    setOpenWindows((prev) => ({
      ...prev,
      [window]: false,
    }));
  };


return (
            <ReactLenis root>

<div className="relative bg-gradient-to-br from-[#F1EDE2] to-[#94A378] min-h-screen overflow-hidden">


    <div className="font-portfolio text-[#000000] flex flex-wrap justify-center gap-12 py-12 border-t -translate-x-[50px] border-black/30">
        <a
          href="/"
          className=" text-[32px] bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_2px] bg-left-bottom -translate-x-[300px]"
        >
          ←
        </a>
    
  <a
          href="/projects"
          className="text-[32px] bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 hover:bg-[length:100%_2px]"
        >
          projects
        </a>
        <a
    href="/skills-tools"
    className="text-[32px] bg-[linear-gradient(currentColor,currentColor)] bg-[length:100%_2px] bg-left-bottom bg-no-repeat"
  >
    skills & tools
  </a>
        <a
          href="/experience"
          className="text-[32px] bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 hover:bg-[length:100%_2px]"
        >
          experience
        </a>
      </div>

<div className="min-h-screen w-full flex items-center justify-center overflow-hidden">
  <div
  className="
    w-full max-w-[1480px]
    h-screen
    rounded-xl
    relative
    flex items-center justify-center
    -translate-y-6
  ">
    <div className="w-full h-full flex flex-col md:flex-row items-center justify-around gap-6 px-6 md:px-12 py-8">
          {/* Tools Folder */}
          <button
            onClick={() => toggleWindow("tools")}
            className="flex flex-col items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity active:scale-95 -mt-64"
          >
            <div className="relative w-[124px] h-[97px]">
              {/* Folder tab back */}
              <div className="absolute left-0 top-[1px] w-[48px] h-[31px] rounded-[14px] bg-[#FABB1A]"></div>
              {/* Folder tab front */}
              <div className="absolute left-[43px] top-[14px] w-[81px] h-[31px] rounded-[14px] bg-[#FABB1A]"></div>
              {/* Folder body back shadow */}
              <div className="absolute left-0 top-[18px] w-[124px] h-[79px] rounded-[14px] bg-gradient-to-br from-[#ECAE24] to-[#DEA22C]"></div>
              {/* Folder body front */}
              <div className="absolute left-0 top-[17px] w-[124px] h-[79px] rounded-[14px] bg-gradient-to-br from-[#FFE393] to-[#FFCC42]"></div>
              {/* Folder shadow/detail */}
              <svg 
                className="absolute left-0 top-0 fill-[#FABB1A]"
                width="58" 
                height="43" 
                viewBox="0 0 58 43" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M57.5939 14.7784C58.1807 14.0065 54.0117 9.28764 47.8166 4.02202C44.7302 1.3987 40.5123 0.635566 36.6092 1.71895L9.52302 9.23732C3.89518 10.7994 0 15.9231 0 21.7637V42.0169L1.29154e-05 30.426C0 28.6874 1.32062e-05 24.3988 6.29443 23.4715C14.1624 22.3124 42.4873 23.4715 47.8376 21.7329C52.1178 20.342 56.1252 16.517 57.5939 14.7784Z" fill="#FABB1A"/>
              </svg>
            </div>
            <span className="text-black text-lg opacity-66 font-helvetica">tools</span>
          </button>

          {/* Languages Folder */}
          <button
            onClick={() => toggleWindow("languages")}
            className="flex flex-col items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity active:scale-95"
          >
            <div className="relative w-[124px] h-[97px]">
              {/* Folder tab back */}
              <div className="absolute left-0 top-[1px] w-[48px] h-[31px] rounded-[14px] bg-[#FABB1A]"></div>
              {/* Folder tab front */}
              <div className="absolute left-[43px] top-[14px] w-[81px] h-[31px] rounded-[14px] bg-[#FABB1A]"></div>
              {/* Folder body back shadow */}
              <div className="absolute left-0 top-[18px] w-[124px] h-[79px] rounded-[14px] bg-gradient-to-br from-[#ECAE24] to-[#DEA22C]"></div>
              {/* Folder body front */}
              <div className="absolute left-0 top-[17px] w-[124px] h-[79px] rounded-[14px] bg-gradient-to-br from-[#FFE393] to-[#FFCC42]"></div>
              {/* Folder shadow/detail */}
              <svg 
                className="absolute left-0 top-0 fill-[#FABB1A]"
                width="58" 
                height="43" 
                viewBox="0 0 58 43" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M57.5939 14.7784C58.1807 14.0065 54.0117 9.28764 47.8166 4.02202C44.7302 1.3987 40.5123 0.635566 36.6092 1.71895L9.52302 9.23732C3.89518 10.7994 0 15.9231 0 21.7637V42.0169L1.29154e-05 30.426C0 28.6874 1.32062e-05 24.3988 6.29443 23.4715C14.1624 22.3124 42.4873 23.4715 47.8376 21.7329C52.1178 20.342 56.1252 16.517 57.5939 14.7784Z" fill="#FABB1A"/>
              </svg>
            </div>
            <span className="text-black text-lg opacity-66 font-helvetica">languages</span>
          </button>

          {/* Skills Notes Icon */}
          <button
            onClick={() => toggleWindow("skills")}
            className="flex flex-col items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity active:scale-95 -mt-48"
          >
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/590aeb3567eb2f51b339932b54bb45304c5566cc?width=240" 
              alt="Notes" 
              className="w-[120px] h-[121px]"
            />
            <span className="text-black text-lg opacity-66 font-helvetica">skills</span>
          </button>

        </div>
      </div>

      {/* Tools Finder Window */}
      {openWindows.tools && (
        <MacFinder
          title="tools"
          onClose={() => closeWindow("tools")}
          defaultPosition={{ x: 100, y: 100 }}
        >
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800 text-lg">Development Tools</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-yellow-600">📁</span> Visual Studio Code
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">📁</span> Git
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">📁</span> Terminal
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gray-600">📁</span> Node.js
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-600">📁</span> Docker
              </li>
            </ul>
          </div>
        </MacFinder>
      )}

      {/* Languages Finder Window */}
      {openWindows.languages && (
        <MacFinder
          title="languages"
          onClose={() => closeWindow("languages")}
          defaultPosition={{ x: 200, y: 150 }}
        >
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800 text-lg">Programming Languages</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-yellow-500">📄</span> JavaScript
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">📄</span> TypeScript
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-600">📄</span> Python
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-600">📄</span> React
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">📄</span> Node.js
              </li>
            </ul>
          </div>
        </MacFinder>
      )}

      {/* Skills Notes Window */}
      {openWindows.skills && (
        <MacNotes
          title="skills"
          onClose={() => closeWindow("skills")}
          defaultPosition={{ x: 650, y: 100 }}
        />
      )}
    </div>
    </div>

</ReactLenis> 
);
}