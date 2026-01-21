
import { ReactLenis } from 'lenis/react';


export default function Experience() {

return (
            <ReactLenis root>
    
    <div className="font-portfolio text-[#FABB1A] flex flex-wrap justify-center gap-12 py-12 border-t -translate-x-[50px] border-black/30">
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
          className="text-[32px] bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 hover:bg-[length:100%_2px]"
        >
          skills & tools
        </a>

        <a
    href="/experience"
    className="text-[32px] bg-[linear-gradient(currentColor,currentColor)] bg-[length:100%_2px] bg-left-bottom bg-no-repeat"
  >
    experience
  </a>
      </div>
</ReactLenis> 
);
}