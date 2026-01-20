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

    <div className="min-h-screen bg-[#191919]">
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
                <div className="w-96 h-96 bg-white shadow-xl flex items-center justify-center p-8 text-center">
                  <p className="text-black text-2xl font-sans">
                    Pacman game is 
                  </p>
                </div>
              </figure>

              <figure
                ref={(el) => (imageRefs.current[0] = el)}
                className="sticky top-0 h-screen -rotate-[5deg] grid place-content-center"
              >
                <div className="w-96 h-96 bg-white shadow-xl flex items-center justify-center p-8 text-center">
                  <p className="text-black text-2xl font-sans">
                    Project One<br />Final Build
                  </p>
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

              <figure
                ref={(el) => (imageRefs.current[3] = el)}
                className="sticky top-0 h-screen -rotate-[3deg] grid place-content-center"
              >
                <img
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop"
                  className="w-96 h-96 object-cover rounded-md shadow-xl"
                  alt="Project 4"
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