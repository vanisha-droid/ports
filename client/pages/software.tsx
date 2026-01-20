import { NavLink, Link } from "react-router-dom";


export default function Software() {
  return (
        <div className="min-h-screen bg-[#F1EDE2] overflow-x-hidden">

        {/* Bottom Navigation */}
        
        
        <div className="flex flex-wrap justify-center gap-12 py-12 border-t border-black/30">
        <Link
            to="/"
            className="
              font-portfolio text-[32px]
              bg-[linear-gradient(currentColor,currentColor)]
              bg-[length:0%_2px]
              bg-left-bottom
              -translate-x-[400px]
            "
          >
            ←

        </Link>
          <Link
            to="/projects"
            className="
              font-portfolio text-[32px]
              bg-[linear-gradient(currentColor,currentColor)]
              bg-[length:0%_2px]
              bg-left-bottom
              bg-no-repeat
              transition-[background-size] duration-300
              hover:bg-[length:100%_2px]
            "
          >
            projects
          </Link>
                    <Link
            to="/skills-tools"
            className="
              font-portfolio text-[32px]
              bg-[linear-gradient(currentColor,currentColor)]
              bg-[length:0%_2px]
              bg-left-bottom
              bg-no-repeat
              transition-[background-size] duration-300
              hover:bg-[length:100%_2px]
            "
          >
            skills & tools
          </Link>
          <Link
            to="/experience"
            className="
              font-portfolio text-[32px]
              bg-[linear-gradient(currentColor,currentColor)]
              bg-[length:0%_2px]
              bg-left-bottom
              bg-no-repeat
              transition-[background-size] duration-300
              hover:bg-[length:100%_2px]
            "
          >
            experience
          </Link>
        </div>
        </div>
        
);
}
