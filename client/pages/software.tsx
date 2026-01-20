import { useState, useEffect, useRef } from "react";
import { ReactLenis } from 'lenis/react';


export default function Software() {
  const [leftText, setLeftText] = useState("final");
  const [rightText, setRightText] = useState("year");
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const imageRefs = useRef([]);
  const lastIndexRef = useRef(-1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let activeIndex = -1;

      imageRefs.current.forEach((ref, index) => {
        if (!ref) return;
        
        const rect = ref.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const elementBottom = elementTop + rect.height;

        if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
          activeIndex = index;
        }
      });

      if (activeIndex !== -1 && activeIndex !== lastIndexRef.current) {
        lastIndexRef.current = activeIndex;

        let newLeftText = leftText;
        let newRightText = rightText;

      
        if (activeIndex === 0) {
          // First
          newLeftText = "final";
          newRightText = "year";
        } else if (activeIndex === 1) {
          // Second 
          newLeftText = "third";
          newRightText = "year";
        } else if (activeIndex === 2) {
          // Third 
          newLeftText = "second";
          newRightText = "year";
        } else if (activeIndex === 3) {
          newLeftText = "side";
          newRightText = "projects";
        }

        if (newLeftText !== leftText || newRightText !== rightText) {
          setIsTransitioning(true);
          setTimeout(() => {
            setLeftText(newLeftText);
            setRightText(newRightText);
            setTimeout(() => setIsTransitioning(false), 50);
          }, 200);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [leftText, rightText]);

  return (
            <ReactLenis root>

      <div className="min-h-screen bg-[#191919] overflow-x-clip">
      <div className="font-portfolio text-[#FABB1A] flex flex-wrap justify-center gap-12 py-12 border-t -translate-x-[50px] border-black/30">
        <a
          href="/"
          className=" text-[32px] bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_2px] bg-left-bottom -translate-x-[300px]"
        >
          ←
        </a>
        <a
          href="/projects"
          className=" text-[32px] bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 hover:bg-[length:100%_2px]"
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
          className="text-[32px] bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 hover:bg-[length:100%_2px]"
        >
          experience
        </a>
      </div>

      <section className="text-white w-full bg-[#191919]">
        <div className="grid grid-cols-[1fr_auto_1fr] px-12">
          {/* LEFT TEXT */}
          <div className="sticky top-0 h-screen flex items-center justify-end pr-12 z-10 -translate-x-[90px]">
            <h1 
              className="text-[#FABB1A] text-[140px] font-serif italic tracking-tight leading-[120%] transition-all duration-500 ease-in-out"
              style={{
                opacity: isTransitioning ? 0 : 1,
                transform: isTransitioning ? 'translateY(20px)' : 'translateY(0)',
                fontFamily: 'Pinyon Script, cursive'
              }}
            >
              {leftText}
            </h1>
          </div>

          <div className="relative z-20 -mx-32">
            <div className="grid gap-12">
              {/* ====== IMAGE 1 (index 0) - Triggers "final" / "year" ====== */}
              <figure
                ref={(el) => (imageRefs.current[0] = el)}
                className="sticky top-0 h-screen -rotate-[5deg] grid place-content-center"
                >
                <div className="w-[400px] bg-white font-menlo rounded-md shadow-2xl p-10 text-center space-y-6">
                    
                    {/* Heading */}
                    <h2 className="text-3xl text-black font-menlo font-extrabold tracking-wide uppercase">
                    Pacman Game
                    </h2>

                    {/* Body text */}
                    <p className="text-black font-menlo text-lg leading-tight ">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book.
                    </p>

                    {/* Tags */}
                    <div className="text-black font-ztbrosit flex flex-wrap justify-center gap-3 pt-4">
                    <span className="px-5 py-2 rounded-full border border-black text-sm font-medium">
                        Java
                    </span>
                    <span className="px-5 py-2 rounded-full bg-[#f5f1e8] text-sm font-medium">
                        HTML
                    </span>
                    <span className="px-5 py-2 rounded-full border border-black text-sm font-medium">
                        CSS
                    </span>
                    <span className="px-5 py-2 rounded-full bg-[#d9dfd6] text-sm font-medium">
                        Next.js
                    </span>
                    <span className="px-5 py-2 rounded-full bg-[#e6e6e6] text-sm font-medium">
                        Vite
                    </span>
                    </div>

                </div>
                </figure>

              <figure
                ref={(el) => (imageRefs.current[0] = el)}
                className="sticky top-0 h-screen -rotate-[-5deg] grid place-content-center"
              >
                <div className="w-[400px] bg-white font-menlo rounded-md shadow-2xl p-10 text-center space-y-6">
                  
                   {/* Heading */}
                    <h2 className="text-3xl text-black font-menlo font-extrabold tracking-wide uppercase">
                    Some thing
                    </h2>

                    {/* Body text */}
                    <p className="text-black font-menlo text-lg leading-tight ">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book.
                    </p>

                    {/* Tags */}
                    <div className="text-black font-ztbrosit flex flex-wrap justify-center gap-3 pt-4">
                    <span className="px-5 py-2 rounded-full border border-black text-sm font-medium">
                        Java
                    </span>
                    <span className="px-5 py-2 rounded-full bg-[#f5f1e8] text-sm font-medium">
                        HTML
                    </span>
                    <span className="px-5 py-2 rounded-full border border-black text-sm font-medium">
                        CSS
                    </span>
                    <span className="px-5 py-2 rounded-full bg-[#d9dfd6] text-sm font-medium">
                        Next.js
                    </span>
                    <span className="px-5 py-2 rounded-full bg-[#e6e6e6] text-sm font-medium">
                        Vite
                    </span>
                    </div>

                </div>
              </figure>

              {/* ====== IMAGE 2 (index 1) - Triggers "third" / "year" ====== */}
              <figure
                ref={(el) => (imageRefs.current[1] = el)}
                className="sticky top-0 h-screen -rotate-[-5deg] grid place-content-center"
              >
                <img
                  src="https://images.unsplash.com/photo-1685904042960-66242a0ac352?w=500&auto=format&fit=crop"
                  className="w-96 h-96 object-cover rounded-md shadow-xl"
                  alt="Project 2"
                />
              </figure>

              <figure
                ref={(el) => (imageRefs.current[2] = el)}
                className="sticky top-0 h-screen grid place-content-center"
              >
                <img
                  src="https://images.unsplash.com/photo-1718838541476-d04e71caa347?w=500&auto=format&fit=crop"
                  className="w-96 h-96 object-cover rounded-md shadow-xl"
                  alt="Project 3"
                />
              </figure>


            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="sticky top-0 h-screen flex items-center justify-start pl-12 z-10 -translate-x-[-85px]">
            <h1 
              className="text-[#FABB1A] text-[140px] font-serif italic tracking-tight leading-[120%] transition-all duration-500 ease-in-out"
              style={{
                opacity: isTransitioning ? 0 : 1,
                transform: isTransitioning ? 'translateY(20px)' : 'translateY(0)',
                fontFamily: 'Pinyon Script, cursive'
              }}
            >
              {rightText}
            </h1>
          </div>
        </div>
      </section>
    </div>
    </ReactLenis>
  );
}