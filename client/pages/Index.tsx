'use client'

import { NavLink } from "react-router-dom";
import signature from "../assets/signature.png";
import pfp from "../assets/pfp.jpg";
import { useState, useEffect, useRef } from "react";
import { ReactLenis } from 'lenis/react';
import{FlipCard} from "@/components/ui/FlipCard";
import { useTheme } from 'next-themes';
import MacFinder from "@/components/ui/MacFinder";
import MacNotes from "@/components/ui/MacNotes";


const navItemClass = ({ isActive }, isScrolled) =>
  `relative font-portfolio text-[32px] transition-all duration-300
   ${isActive ? "opacity-100" : "opacity-80"}
   ${isScrolled ? "text-black" : "text-white"}`;
   
  
export default function Index() {
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

  const [leftText, setLeftText] = useState("final");
  const [rightText, setRightText] = useState("year");
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const imageRefs = useRef([]);
  const lastIndexRef = useRef(-1);
    const { resolvedTheme } = useTheme();


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
          newLeftText = "first";
          newRightText = "year";
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
  const fullText = "ortfolio";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Typing animation
  useEffect(() => {
    const typingSpeed = 180;
    const deletingSpeed = 70;
    const pauseAfterTyping = 2000;

    let timeout;

    if (!isDeleting) {
      if (displayText !== fullText) {
        timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseAfterTyping);
      }
    } else {
      if (displayText !== "") {
        timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
        }, 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 700);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

   // Scroll to about section
const scrollToAbout = () => {
  const aboutSection = document.getElementById("about-section");
  if (!aboutSection) return;

  const yOffset = -20; 
  const y =
    aboutSection.getBoundingClientRect().top +
    window.pageYOffset +
    yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
};



  return (
        <ReactLenis root>
    <div className="min-h-screen bg-[#F1EDE2] overflow-x-hidden">
      {/* Sticky Hero Section */}
       <section className="sticky">
        <div className="relative top-0 z-40 mx-auto w-full bg-[#262626] overflow-hidden mb-40
  before:absolute before:inset-0
  before:content-['']
  before:bg-[url('https://www.ui-layouts.com/noise.gif')]
  before:opacity-5
  before:pointer-events-none
  before:z-10
">
        <div className="mx-auto w-[92%] max-w-[1249px] h-[780px] rounded-xl relative">
          {/* LEFT PIXEL CROSS */}
          <div className="absolute left-[410px] top-[110px]">
            <div className="relative w-[160px] h-[260px]">
              {[
                "left-[74px] top-0 w-[8px] h-[8px]",
                "left-[74px] top-[22px] w-[8px] h-[50px]",
                "left-[66px] top-[70px] w-[24px] h-[30px]",
                "left-[45px] top-[100px] w-[66px] h-[30px]",
                "left-0 top-[128px] w-[8px] h-[8px]",
                "left-[24px] top-[128px] w-[108px] h-[10px]",
                "left-[148px] top-[128px] w-[8px] h-[8px]",
                "left-[46px] top-[137px] w-[66px] h-[27px]",
                "left-[66px] top-[164px] w-[24px] h-[30px]",
                "left-[74px] top-[190px] w-[8px] h-[50px]",
                "left-[74px] top-[254px] w-[8px] h-[8px]",
              ].map((cls, i) => (
                <div key={i} className={`absolute ${cls} bg-white`} />
              ))}
            </div>
          </div>

          {/* RIGHT PIXEL CROSS */}
          <div className="absolute right-[25px] top-[300px] block">
            <div className="relative w-[220px] h-[390px]">
              {[
                "left-[105px] top-0 w-[12px] h-[12px]",
                "left-[105px] top-[36px] w-[12px] h-[78px]",
                "left-[94px] top-[110px] w-[36px] h-[46px]",
                "left-[64px] top-[156px] w-[96px] h-[48px]",
                "left-0 top-[200px] w-[12px] h-[12px]",
                "left-[34px] top-[200px] w-[154px] h-[14px]",
                "left-[208px] top-[200px] w-[12px] h-[12px]",
                "left-[66px] top-[214px] w-[96px] h-[42px]",
                "left-[94px] top-[256px] w-[36px] h-[46px]",
                "left-[105px] top-[296px] w-[12px] h-[78px]",
                "left-[105px] top-[398px] w-[12px] h-[12px]",
              ].map((cls, i) => (
                <div key={i} className={`absolute ${cls} bg-white`} />
              ))}
            </div>
          </div>

          {/* HERO TEXT */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
            <h1 className="text-white font-menlo text-[110px] mt-20 leading-none ml-[420px]">
              Welcome
            </h1>

            <div className="text-white font-redactionit text-[140px] leading-none -mt-2 ml-[490px]">
              to my
            </div>

            <div className="text-white flex items-end -mt-2 ml-[30px] -translate-x-[80px]">
              <span className="font-redaction text-[120px] leading-none -translate-x-[10px]">P</span>
              <span className="font-menlo text-[110px] tracking-[-0.06em] leading-none">
                {displayText.slice(0, 3)}
              </span>

              <span className="font-redactionit text-[140px] -translate-y-[-10px] ml-2 leading-none">
                {displayText.length > 3 ? "f" : ""}
              </span>

              <span className="font-menlo text-[110px] tracking-[-0.06em] leading-none">
                {displayText.slice(4)}
                <span className="inline-block w-[2px] h-[90px] bg-white ml-3 align-bottom animate-blink" />
              </span>

              <span className="font-redactionit text-[140px] ml-6 leading-none">
                :)
              </span>
            </div>
          </div>
        </div>
      </div>
     
     

     <nav className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between px-6 sm:px-8 lg:px-9 pt-6 sm:pt-7 -translate-y-2">
  {/* Left group */}
  <div className="flex gap-6 sm:gap-12 lg:gap-16">
    {/* Software Portfolio */}
    <button
      onClick={scrollToAbout}
      className={`${navItemClass({ isActive: false }, isScrolled)} nav-glow`}
    >
      software portfolio
    </button>

    {/* Design Portfolio */}
    <NavLink
      to="/design-portfolio"
      end
      onClick={() => window.scrollTo(0, 0)}
      className={(props) =>
        `${navItemClass(props, isScrolled)} nav-glow`
      }
    >
      design portfolio
    </NavLink>
  </div>

  {/* Right item */}
  <NavLink
    to="/about"
    end
    onClick={() => window.scrollTo(0, 0)}
    className={(props) =>
      `${navItemClass(props, isScrolled)} nav-glow`
    }
  >
    about
  </NavLink>
</nav>

       </section>

      {/* Main */}
      <main id="some-section" className="max-w-[1280px] mx-auto px-6 py-16 z-30 bg-[#F1EDE2]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-28">
          {/* LEFT: Yellow ID Card */}
          <div className="relative">
            {/* Paperclip */}
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/df0d1ac444aa40a5965957d8d478065cdcb78b6c?width=318"
              alt=""
              className="absolute -top-5 left-[-80px] w-[180px] z-10
              transition-transform duration-300 ease-out
              group-hover:rotate-6 group-hover:-translate-y-1"
            />

            {/* Back green card */}
            <div className="absolute -top-2 -left-2 w-[760px] h-[420px] bg-[#94A378] border border-black rounded-xl -rotate-3"></div>

            {/* Front yellow card */}
            <div className="relative bg-[#E5BA41] border border-black rounded-xl 
              w-[760px] h-[420px]
              pt-12 pr-12 pb-12 pl-6
              -rotate-[5deg] hover:rotate-0 transition-transform duration-300">
              {/* Signature image */}
              <img
                src={signature}
                alt="Signature"
                className="
                  absolute -top-20 -right-96
                  w-300
                  opacity-70
                  rotate-[-2deg]
                  pointer-events-none
                "
              />

              {/* Content */}
              <div className="flex gap-12 h-full items-center">
                {/* Image */}
                <img
                  src={pfp}
                  alt="Vanisha Goyal"
                  className="
                    h-[320px]
                    w-auto
                    object-cover
                    border-2 border-black
                    rounded-xl
                    shadow-sm
                    ml-6
                  "
                />

                {/* Text */}
                <div className="font-portfolio space-y-3">
                  <div className="grid grid-cols-[110px_1fr] items-start">
                    <span className="text-3xl text-left">name:</span>
                    <span className="text-4xl text-left">vanisha goyal</span>
                  </div>

                  <div className="grid grid-cols-[110px_1fr] items-start">
                    <span className="text-3xl text-left">age:</span>
                    <span className="text-4xl text-left">twenty-one</span>
                  </div>

                  <div className="grid grid-cols-[110px_1fr] items-start">
                    <span className="text-3xl text-left">location:</span>
                    <span className="text-4xl text-left">sydney, australia</span>
                  </div>

                  <div className="grid grid-cols-[110px_1fr] items-start">
                    <span className="text-3xl text-left">currently:</span>
                    <span className="text-4xl text-left">learning TypeScript</span>
                  </div>
                </div>
              </div>

              {/* Bottom dots & stars */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 opacity-60">
                <span className="tracking-[6px] text-xl">....... </span>
                <span className="relative top-[4px] text-xl text-[#94A378]">★ ★ ★</span>
                <span className="tracking-[6px] text-xl">....... </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Green Intro Card */}
          <div className="relative lg:ml-[120px] mt-20 lg:mt-0">
            {/* Stars */}
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/2afa699c672895673ea9bf4f39c8da42558c4b41?width=246"
              alt=""
              className="absolute -top-[-35px] right-5 w-24 z-10 transform rotate-[40deg]"
            />

            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/2afa699c672895673ea9bf4f39c8da42558c4b41?width=246"
              alt=""
              className="absolute -top-12 right-14 w-38 z-10"
            />

            {/* Green card */}
            <div className="bg-[#94A378] border border-black rounded-xl 
              h-[480px] w-[380px] p-10
              rotate-[8deg] hover:rotate-3 transition-transform duration-300
              flex items-center justify-center">
              <p className="font-portfolio text-[30px] leading-relaxed text-center">
                hi! i'm vanisha and i love creating. i primarily dabble in backend (python, java) but use frontend frequently because i love designing things!
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>


{/* NEW SECTION====================================================== */}

<main id="about-section">
    <section className="text-white w-full bg-[#F1EDE2]  pointer-events-none">
        <div className="grid grid-cols-[1fr_auto_1fr] px-12">
          {/* LEFT TEXT */}
          <div className="sticky top-0 h-screen flex items-center justify-end pr-12 z-10 -translate-x-[90px]">
            <h1 
              className="text-[#464646] text-[140px] font-pinyon tracking-normal leading-[120%] transition-all duration-500 ease-in-out"
              style={{
                opacity: isTransitioning ? 0 : 1,
                transform: isTransitioning ? 'translateY(20px)' : 'translateY(0)',
                
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
  className="sticky top-0 h-screen -rotate-[5deg] grid place-content-center pointer-events-auto"
>
  <FlipCard
    front={
      <div
        className="w-[90vw] max-w-[400px] h-[500px]
                   bg-white rounded-md shadow-2xl
                   flex items-center justify-center
                   p-8 font-menlo"
      >
        <h3 className="text-3xl md:text-4xl font-extrabold uppercase text-black text-center tracking-wide">
          CARBONWISE
        </h3>
      </div>
    }

    back={
      <div
        className="w-[90vw] max-w-[400px] h-[500px]
                   bg-white rounded-md shadow-2xl
                   flex flex-col p-6 font-menlo overflow-hidden"
      >
        <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-black text-center">
          CARBONWISE
        </h2>

        <div className="flex-1 flex flex-col justify-between mt-12 min-h-0">
          <p className="text-black text-sm md:text-base leading-relaxed text-center break-words overflow-auto">
            Built a full stack website called CarbonWise — a sustainable marketplace
            platform allowing users to buy and sell used goods with browsing,
            search, messaging, location services, and a rating system.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-6 overflow-hidden text-black">
            {["Java", "HTML", "CSS", "Javascript", "React", "SpringBoot", "MySQL", "Gradle"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full border border-black text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    }
  />
</figure>


              <figure
  ref={(el) => (imageRefs.current[0] = el)}
  className="sticky top-0 h-screen rotate-[4deg] grid place-content-center pointer-events-auto"
>
  <FlipCard
    front={
      <div className="w-[90vw] max-w-[400px] h-[500px] bg-white rounded-md shadow-2xl flex items-center justify-center p-8 font-menlo">
        <h3 className="text-3xl md:text-4xl font-extrabold uppercase text-black text-center tracking-wide">
          ON THE CHARTS
        </h3>
      </div>
    }

    back={
      <div className="w-[90vw] max-w-[400px] h-[500px] bg-white rounded-md shadow-2xl flex flex-col p-6 font-menlo overflow-hidden">
        <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-black text-center">
          ON THECHARTS
        </h2>

        <div className="flex-1 flex flex-col justify-between mt-12 min-h-0">
          <p className="text-black text-sm md:text-base leading-relaxed text-center break-words overflow-auto">
            A Spotify analytics platform built with Django and deployed on AWS.
            Integrates Spotify’s API to provide real-time listening insights,
            data visualisation dashboards, caching optimisation, and full
            security protection against CSRF, XSS, and SQL injection attacks.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-6 text-black">
            {["Python","Django","React","PostgreSQL","JavaScript","Node.js","Vite","AWS","REST"].map((tech)=>(
              <span key={tech} className="px-3 py-1 rounded-full border border-black text-xs">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    }
  />
</figure>

<figure
  ref={(el) => (imageRefs.current[0] = el)}
  className="sticky top-0 h-screen -rotate-[3deg] grid place-content-center pointer-events-auto"
>
  <FlipCard
    front={
      <div className="w-[90vw] max-w-[400px] h-[500px] bg-white rounded-md shadow-2xl flex items-center justify-center p-8 font-menlo">
        <h3 className="text-3xl md:text-4xl font-extrabold uppercase text-black text-center tracking-wide">
          MICROSERVICE APP
        </h3>
      </div>
    }

    back={
      <div className="w-[90vw] max-w-[400px] h-[500px] bg-white rounded-md shadow-2xl flex flex-col p-6 font-menlo overflow-hidden">
        <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-black text-center">
          MICROSERVICE APP
        </h2>

        <div className="flex-1 flex flex-col justify-between mt-12 min-h-0">
          <p className="text-black text-sm md:text-base leading-relaxed text-center break-words overflow-auto">
            An e-commerce platform built with a microservices architecture to
            handle orders, delivery workflows, and automated email notifications.
            Designed with RESTful APIs and Spring Boot to ensure scalability,
            modularity, and independent service deployment.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-6 text-black">
            {["Java","SpringBoot","PostgreSQL","HTML","CSS","REST"].map((tech)=>(
              <span key={tech} className="px-3 py-1 rounded-full border border-black text-xs">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    }
  />
</figure>

<figure
  ref={(el) => (imageRefs.current[1] = el)}
  className="sticky top-0 h-screen rotate-[5deg] grid place-content-center pointer-events-auto"
>
  <FlipCard
    front={
      <div className="w-[90vw] max-w-[400px] h-[500px] bg-white rounded-md shadow-2xl flex items-center justify-center p-8 font-menlo">
        <h3 className="text-3xl md:text-4xl font-extrabold uppercase text-black text-center tracking-wide">
          AI FORM AUTOMATION
        </h3>
      </div>
    }

    back={
      <div className="w-[90vw] max-w-[400px] h-[500px] bg-white rounded-md shadow-2xl flex flex-col p-6 font-menlo overflow-hidden">
        <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-black text-center">
          AI FORM AUTOMATION
        </h2>

        <div className="flex-1 flex flex-col justify-between mt-12 min-h-0">
          <p className="text-black text-sm md:text-base leading-relaxed text-center break-words overflow-auto">
            Internship project for Digital Village: an AI-powered form filling
            assistant leveraging multiple AI services to automatically extract,
            interpret, and populate structured forms. Containerised with Docker
            and deployed on AWS for scalable production use.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-6 text-black">
            {["TypeScript","Tailwind","CSS","AWS","Docker","REST"].map((tech)=>(
              <span key={tech} className="px-3 py-1 rounded-full border border-black text-xs">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    }
  />
</figure>

<figure
  ref={(el) => (imageRefs.current[1] = el)}
  className="sticky top-0 h-screen -rotate-[4deg] grid place-content-center pointer-events-auto"
>
  <FlipCard
    front={
      <div className="w-[90vw] max-w-[400px] h-[500px] bg-white rounded-md shadow-2xl flex items-center justify-center p-8 font-menlo">
        <h3 className="text-3xl md:text-4xl font-extrabold uppercase text-black text-center tracking-wide">
          KLAUS
        </h3>
      </div>
    }

    back={
      <div className="w-[90vw] max-w-[400px] h-[500px] bg-white rounded-md shadow-2xl flex flex-col p-6 font-menlo overflow-hidden">
        <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-black text-center">
          KLAUS
        </h2>

        <div className="flex-1 flex flex-col justify-between mt-12 min-h-0">
          <p className="text-black text-sm md:text-base leading-relaxed text-center break-words overflow-auto">
            A Tinder-style product discovery app built for a hackathon.
            Implements a recommendation engine based on swipe history,
            wishlists, and database-driven user behaviour to suggest the
            perfect gift.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-6 text-black">
            {["Python","Django","PostgreSQL","React","Tailwind","JavaScript","Vite"].map((tech)=>(
              <span key={tech} className="px-3 py-1 rounded-full border border-black text-xs">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    }
  />
</figure>

<figure
  ref={(el) => (imageRefs.current[2] = el)}
  className="sticky top-0 h-screen rotate-[3deg] grid place-content-center pointer-events-auto"
>
  <FlipCard
    front={
      <div className="w-[90vw] max-w-[400px] h-[500px] bg-white rounded-md shadow-2xl flex items-center justify-center p-8 font-menlo">
        <h3 className="text-3xl md:text-4xl font-extrabold uppercase text-black text-center tracking-wide">
          CONNECT 4 BOT
        </h3>
      </div>
    }

    back={
      <div className="w-[90vw] max-w-[400px] h-[500px] bg-white rounded-md shadow-2xl flex flex-col p-6 font-menlo overflow-hidden">
        <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-black text-center">
          CONNECT 4 BOT
        </h2>

        <div className="flex-1 flex flex-col justify-between mt-12 min-h-0">
          <p className="text-black text-sm md:text-base leading-relaxed text-center break-words overflow-auto">
            An AI-powered Connect 4 bot that calculates the optimal next move
            using the Minimax algorithm with alpha-beta pruning. Designed to
            efficiently evaluate board states and significantly reduce search
            complexity while maintaining competitive play.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-6 text-black">
            {["Python","Minimax","Alpha-Beta Pruning","Algorithms"].map((tech)=>(
              <span key={tech} className="px-3 py-1 rounded-full border border-black text-xs">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    }
  />
</figure>

<figure
  ref={(el) => (imageRefs.current[3] = el)}
  className="sticky top-0 h-screen -rotate-[5deg] grid place-content-center pointer-events-auto"
>
  <FlipCard
    front={
      <div className="w-[90vw] max-w-[400px] h-[500px] bg-white rounded-md shadow-2xl flex items-center justify-center p-8 font-menlo">
        <h3 className="text-3xl md:text-4xl font-extrabold uppercase text-black text-center tracking-wide">
          3D SUPPORT GENERATORS
        </h3>
      </div>
    }

    back={
      <div className="w-[90vw] max-w-[400px] h-[500px] bg-white rounded-md shadow-2xl flex flex-col p-6 font-menlo overflow-hidden">
        <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-black text-center">
          3D SUPPORT GENERATORS
        </h2>

        <div className="flex-1 flex flex-col justify-between mt-12 min-h-0">
          <p className="text-black text-sm md:text-base leading-relaxed text-center break-words overflow-auto">
            Developed for ASIGA, this tool calculates the minimum structural
            supports required to 3D print complex objects without toppling.
            Utilises computational geometry and 3D visualisation to optimise
            stability while reducing material usage.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-6 text-black">
            {["Python","C","Vedo","PyVista","3D Geometry"].map((tech)=>(
              <span key={tech} className="px-3 py-1 rounded-full border border-black text-xs">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    }
  />
</figure>

<figure
  ref={(el) => (imageRefs.current[1] = el)}
  className="sticky top-0 h-screen -rotate-[3deg] grid place-content-center pointer-events-auto"
>
  <FlipCard
    front={
      <div className="w-[90vw] max-w-[400px] h-[500px] bg-white rounded-md shadow-2xl flex items-center justify-center p-8 font-menlo">
        <h3 className="text-3xl md:text-4xl font-extrabold uppercase text-black text-center tracking-wide">
          FILE MANAGEMENT
        </h3>
      </div>
    }

    back={
      <div className="w-[90vw] max-w-[400px] h-[500px] bg-white rounded-md shadow-2xl flex flex-col p-6 font-menlo overflow-hidden">
        <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-black text-center">
          FILE MANAGEMENT
        </h2>

        <div className="flex-1 flex flex-col justify-between mt-12 min-h-0">
          <p className="text-black text-sm md:text-base leading-relaxed text-center break-words overflow-auto">
            A secure file management platform enabling users to upload, edit,
            and manage files while supporting shared visibility and admin
            moderation. Built with Spring Boot and Firebase for scalable storage.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-6 text-black">
            {["Java","SpringBoot","Firebase","HTML","CSS"].map((tech)=>(
              <span key={tech} className="px-3 py-1 rounded-full border border-black text-xs">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    }
  />
</figure>


<figure
  ref={(el) => (imageRefs.current[1] = el)}
  className="sticky top-0 h-screen rotate-[4deg] grid place-content-center pointer-events-auto"
>
  <FlipCard
    front={
      <div className="w-[90vw] max-w-[400px] h-[500px] bg-white rounded-md shadow-2xl flex items-center justify-center p-8 font-menlo">
        <h3 className="text-3xl md:text-4xl font-extrabold uppercase text-black text-center tracking-wide">
          TICKET MANAGEMENT
        </h3>
      </div>
    }

    back={
      <div className="w-[90vw] max-w-[400px] h-[500px] bg-white rounded-md shadow-2xl flex flex-col p-6 font-menlo overflow-hidden">
        <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-black text-center">
          TICKET MANAGEMENT
        </h2>

        <div className="flex-1 flex flex-col justify-between mt-12 min-h-0">
          <p className="text-black text-sm md:text-base leading-relaxed text-center break-words overflow-auto">
            A Flask and PostgreSQL-powered web application to manage airline
            tickets with advanced filtering, searching, and admin controls.
            Designed with secure authentication and structured relational data handling.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-6 text-black">
            {["Python","Flask","PostgreSQL","HTML","CSS"].map((tech)=>(
              <span key={tech} className="px-3 py-1 rounded-full border border-black text-xs">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    }
  />
</figure>

<figure
  ref={(el) => (imageRefs.current[1] = el)}
  className="sticky top-0 h-screen rotate-[5deg] grid place-content-center pointer-events-auto"
>
  <FlipCard
    front={
      <div className="w-[90vw] max-w-[400px] h-[500px] bg-white rounded-md shadow-2xl flex items-center justify-center p-8 font-menlo">
        <h3 className="text-3xl md:text-4xl font-extrabold uppercase text-black text-center tracking-wide">
          CURRENCY CONVERTER
        </h3>
      </div>
    }

    back={
      <div className="w-[90vw] max-w-[400px] h-[500px] bg-white rounded-md shadow-2xl flex flex-col p-6 font-menlo overflow-hidden">
        <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-black text-center">
          CURRENCY CONVERTER
        </h2>

        <div className="flex-1 flex flex-col justify-between mt-12 min-h-0">
          <p className="text-black text-sm md:text-base leading-relaxed text-center break-words overflow-auto">
            An interactive GUI application that converts currencies dynamically
            using structured SQL-backed exchange rate data. Designed for accuracy,
            responsiveness, and ease of use.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-6 text-black">
            {["Java","SQL","HTML"].map((tech)=>(
              <span key={tech} className="px-3 py-1 rounded-full border border-black text-xs">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    }
  />
</figure>

<figure
  ref={(el) => (imageRefs.current[1] = el)}
  className="sticky top-0 h-screen -rotate-[4deg] grid place-content-center pointer-events-auto"
>
  <FlipCard
    front={
      <div className="w-[90vw] max-w-[400px] h-[500px] bg-white rounded-md shadow-2xl flex items-center justify-center p-8 font-menlo">
        <h3 className="text-3xl md:text-4xl font-extrabold uppercase text-black text-center tracking-wide">
          PACMAN GAME
        </h3>
      </div>
    }

    back={
      <div className="w-[90vw] max-w-[400px] h-[500px] bg-white rounded-md shadow-2xl flex flex-col p-6 font-menlo overflow-hidden">
        <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-black text-center">
          PACMAN GAME
        </h2>

        <div className="flex-1 flex flex-col justify-between mt-12 min-h-0">
          <p className="text-black text-sm md:text-base leading-relaxed text-center break-words overflow-auto">
            A fully interactive Pacman game built in Java using object-oriented
            design patterns inspired by the Gang of Four principles. Emphasises
            clean architecture, maintainability, and modular gameplay logic.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-6 text-black">
            {["Java","Gradle","JavaFX","Design Patterns"].map((tech)=>(
              <span key={tech} className="px-3 py-1 rounded-full border border-black text-xs">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    }
  />
</figure>


<figure
  ref={(el) => (imageRefs.current[2] = el)}
  className="sticky top-0 h-screen rotate-[3deg] grid place-content-center pointer-events-auto"
>
  <FlipCard
    front={
      <div className="w-[90vw] max-w-[400px] h-[500px] bg-white rounded-md shadow-2xl flex items-center justify-center p-8 font-menlo">
        <h3 className="text-3xl md:text-4xl font-extrabold uppercase text-black text-center tracking-wide">
          MERKLE TREE
        </h3>
      </div>
    }

    back={
      <div className="w-[90vw] max-w-[400px] h-[500px] bg-white rounded-md shadow-2xl flex flex-col p-6 font-menlo overflow-hidden">
        <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-black text-center">
          MERKLE TREE
        </h2>

        <div className="flex-1 flex flex-col justify-between mt-12 min-h-0">
          <p className="text-black text-sm md:text-base leading-relaxed text-center break-words overflow-auto">
            Implemented a Merkle Tree in C to ensure data integrity and
            cryptographic verification. Demonstrates understanding of hashing,
            tree structures, and secure data validation mechanisms.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-6 text-black">
            {["C","Data Structures","Hashing","Cryptography"].map((tech)=>(
              <span key={tech} className="px-3 py-1 rounded-full border border-black text-xs">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    }
  />
</figure>
<figure
  ref={(el) => (imageRefs.current[2] = el)}
  className="sticky top-0 h-screen -rotate-[5deg] grid place-content-center pointer-events-auto"
>
  <FlipCard
    front={
      <div className="w-[90vw] max-w-[400px] h-[500px] bg-white rounded-md shadow-2xl flex items-center justify-center p-8 font-menlo">
        <h3 className="text-3xl md:text-4xl font-extrabold uppercase text-black text-center tracking-wide">
          DATA ANALYSIS TOOL
        </h3>
      </div>
    }

    back={
      <div className="w-[90vw] max-w-[400px] h-[500px] bg-white rounded-md shadow-2xl flex flex-col p-6 font-menlo overflow-hidden">
        <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-black text-center">
          DATA ANALYSIS TOOL
        </h2>

        <div className="flex-1 flex flex-col justify-between mt-12 min-h-0">
          <p className="text-black text-sm md:text-base leading-relaxed text-center break-words overflow-auto">
            Built a machine learning analysis tool that evaluates multiple
            classification algorithms including kNN, Random Forest, Logistic
            Regression, Decision Trees, and Naive Bayes to determine optimal
            predictive performance for a dataset.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-6 text-black">
            {["Python","Machine Learning","kNN","Random Forest","Logistic Regression"].map((tech)=>(
              <span key={tech} className="px-3 py-1 rounded-full border border-black text-xs">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    }
  />
</figure>

<figure
  ref={(el) => (imageRefs.current[3] = el)}
  className="sticky top-0 h-screen rotate-[4deg] grid place-content-center pointer-events-auto"
>
  <FlipCard
    front={
      <div className="w-[90vw] max-w-[400px] h-[500px] bg-white rounded-md shadow-2xl flex items-center justify-center p-8 font-menlo">
        <h3 className="text-3xl md:text-4xl font-extrabold uppercase text-black text-center tracking-wide">
          WIZARD TOWER DEFENCE
        </h3>
      </div>
    }

    back={
      <div className="w-[90vw] max-w-[400px] h-[500px] bg-white rounded-md shadow-2xl flex flex-col p-6 font-menlo overflow-hidden">
        <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-black text-center">
          WIZARD TOWER DEFENCE
        </h2>

        <div className="flex-1 flex flex-col justify-between mt-12 min-h-0">
          <p className="text-black text-sm md:text-base leading-relaxed text-center break-words overflow-auto">
            A fully interactive tower defence game built in Java featuring
            dynamic enemy waves, strategic tower placement, and modular game
            architecture using JavaFX and Gradle.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-6 text-black">
            {["Java","Gradle","JavaFX","Game Development"].map((tech)=>(
              <span key={tech} className="px-3 py-1 rounded-full border border-black text-xs">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    }
  />
</figure>


            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="sticky top-0 h-screen flex items-center justify-start pl-12 z-10 -translate-x-[-90px]">
            <h1 
              className="text-[#464646] text-[140px] font-pinyon tracking-normal leading-[120%] transition-all duration-500 ease-in-out"
              style={{
                opacity: isTransitioning ? 0 : 1,
                transform: isTransitioning ? 'translateY(20px)' : 'translateY(0)',
               
              }}
            >
              {rightText}
            </h1>
          </div>
        </div>
      </section>

<div className="relative bg-gradient-to-br from-[#F1EDE2] to-[#94A378] min-h-screen overflow-hidden">


      <div className="min-h-screen w-full flex items-center justify-center overflow-hidden">
        <div
        className="
          w-full max-w-[1480px]
          h-screen
          rounded-xl
          relative
          flex items-center justify-center
          -translate-y-[-30px]
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
  <h3 className="font-semibold text-gray-800 text-lg">Development</h3>
  <ul className="space-y-2 text-gray-700">
    
    {/* Code & Environment */}
    <li className="flex items-center gap-2">
      <span className="text-yellow-600">📁</span> Visual Studio Code
    </li>
    <li className="flex items-center gap-2">
      <span className="text-blue-600">📁</span> Git
    </li>
    <li className="flex items-center gap-2">
      <span className="text-blue-600">📁</span> Linux
    </li>

    <li className="flex items-center gap-2">
      <span className="text-purple-600">📁</span> Gradle
    </li>

    {/* Cloud & DevOps */}
      <h3 className="font-semibold text-gray-800 text-lg">Cloud</h3>

    <li className="flex items-center gap-2">
      <span className="text-orange-500">📁</span> AWS
    </li>
    <li className="flex items-center gap-2">
      <span className="text-red-600">📁</span> Docker
    </li>
    <li className="flex items-center gap-2">
      <span className="text-red-500">📁</span> Jenkins
    </li>
    <li className="flex items-center gap-2">
      <span className="text-black">📁</span> Vercel
    </li>

    {/* Collaboration */}
      <h3 className="font-semibold text-gray-800 text-lg">Collaboration</h3>

    <li className="flex items-center gap-2">
      <span className="text-orange-600">📁</span> Jira
    </li>
    <li className="flex items-center gap-2">
      <span className="text-blue-500">📁</span> Confluence
    </li>
    <li className="flex items-center gap-2">
      <span className="text-blue-700">📁</span> Bitbucket
    </li>

    {/* Databases */}
      <h3 className="font-semibold text-gray-800 text-lg">Databases</h3>

    <li className="flex items-center gap-2">
      <span className="text-blue-800">📁</span> PostgreSQL
    </li>
    <li className="flex items-center gap-2">
      <span className="text-blue-600">📁</span> MySQL
    </li>
    <li className="flex items-center gap-2">
      <span className="text-yellow-500">📁</span> Firebase
    </li>

    {/* Design Tools */}
      <h3 className="font-semibold text-gray-800 text-lg">Design</h3>

    <li className="flex items-center gap-2">
      <span className="text-purple-500">📁</span> Figma
    </li>
    <li className="flex items-center gap-2">
      <span className="text-blue-400">📁</span> Adobe Photoshop
    </li>
    <li className="flex items-center gap-2">
      <span className="text-pink-500">📁</span> Canva
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
              >{/* Programming Languages */}
<div className="space-y-4">
  <h3 className="font-semibold text-gray-800 text-lg">
    Programming Languages
  </h3>
  <ul className="space-y-2 text-gray-700">
    
    <li className="flex items-center gap-2">
      <span className="text-yellow-500">📄</span> JavaScript
    </li>
    <li className="flex items-center gap-2">
      <span className="text-blue-600">📄</span> TypeScript
    </li>
    <li className="flex items-center gap-2">
      <span className="text-purple-600">📄</span> Python (Advanced)
    </li>
    <li className="flex items-center gap-2">
      <span className="text-red-600">📄</span> Java
    </li>
    <li className="flex items-center gap-2">
      <span className="text-blue-700">📄</span> C
    </li>
    <li className="flex items-center gap-2">
      <span className="text-indigo-700">📄</span> C++
    </li>
    <li className="flex items-center gap-2">
      <span className="text-blue-800">📄</span> SQL
    </li>
    <li className="flex items-center gap-2">
      <span className="text-green-700">📄</span> R
    </li>

  </ul>
</div>

{/* Frameworks & Libraries */}
<div className="space-y-4 mt-8">
  <h3 className="font-semibold text-gray-800 text-lg">
    Frameworks & Libraries
  </h3>
  <ul className="space-y-2 text-gray-700">
    
    <li className="flex items-center gap-2">
      <span className="text-cyan-500">📦</span> React
    </li>
    <li className="flex items-center gap-2">
      <span className="text-black">📦</span> Next.js
    </li>
    <li className="flex items-center gap-2">
      <span className="text-black">📦</span> Vite
    </li>
    <li className="flex items-center gap-2">
      <span className="text-green-600">📦</span> Node.js
    </li>
    <li className="flex items-center gap-2">
      <span className="text-green-700">📦</span> Spring Boot
    </li>
    <li className="flex items-center gap-2">
      <span className="text-gray-600">📦</span> Django
    </li>
    <li className="flex items-center gap-2">
      <span className="text-gray-500">📦</span> Flask
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
      </main>
              </ReactLenis>

  );

}