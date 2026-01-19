import { Link } from "react-router-dom";

interface PlaceholderProps {
  pageName: string;
}

export default function Placeholder({ pageName }: PlaceholderProps) {
  return (
    <div className="min-h-screen bg-[#F1EDE2]">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-8 max-w-[1280px] mx-auto">
        <div className="flex gap-8">
          <Link 
            to="/software-portfolio" 
            className="relative font-portfolio text-2xl md:text-[32px] text-black hover:opacity-70 transition-opacity"
          >
            <span className="absolute -inset-2 bg-[rgba(229,186,65,0.44)] rounded-full -z-10"></span>
            software portfolio
          </Link>
          <Link 
            to="/design-portfolio" 
            className="font-portfolio text-2xl md:text-[32px] text-black hover:opacity-70 transition-opacity"
          >
            design portfolio
          </Link>
        </div>
        <Link 
          to="/about" 
          className="font-portfolio text-2xl md:text-[32px] text-black hover:opacity-70 transition-opacity"
        >
          about
        </Link>
      </nav>

      {/* Main Content */}
      <main className="max-w-[1280px] mx-auto px-6 py-24">
        <div className="text-center">
          <h1 className="font-portfolio text-5xl lg:text-7xl text-black mb-8">
            {pageName}
          </h1>
          <p className="font-portfolio text-2xl lg:text-3xl text-black/70 mb-12">
            This page is coming soon! 
          </p>
          <Link 
            to="/" 
            className="inline-block font-portfolio text-2xl lg:text-3xl text-black hover:opacity-70 transition-opacity"
          >
            <span className="inline-block bg-[rgba(229,186,65,0.44)] px-6 py-3 rounded-full border border-black">
              ← back to home
            </span>
          </Link>
        </div>
      </main>

      {/* Bottom Navigation */}
      <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-12 py-12 border-t border-black/30 max-w-[1280px] mx-auto px-6">
        <Link 
          to="/projects" 
          className="relative font-portfolio text-2xl lg:text-[32px] text-black hover:opacity-70 transition-opacity"
        >
          <span className="absolute -inset-2 bg-[rgba(229,186,65,0.44)] rounded-full -z-10"></span>
          projects
        </Link>
        <Link 
          to="/skills-tools" 
          className="font-portfolio text-2xl lg:text-[32px] text-black hover:opacity-70 transition-opacity"
        >
          skills & tools
        </Link>
        <Link 
          to="/extracurriculars" 
          className="font-portfolio text-2xl lg:text-[32px] text-black hover:opacity-70 transition-opacity"
        >
          extracurriculars
        </Link>
      </div>
    </div>
  );
}
