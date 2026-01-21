import { NavLink } from "react-router-dom";
import signature from "../assets/signature.png";
import pfp from "../assets/pfp.jpg";
import { useState, useEffect } from "react";
import { ReactLenis } from 'lenis/react';


const navItemClass = ({ isActive }, isScrolled) =>
  `relative font-portfolio text-[32px] transition-all duration-300
   ${isActive ? "opacity-100" : "opacity-80"}
   ${isScrolled ? "text-black" : "text-white"}`;
   
  
export default function Index() {
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

  const yOffset = -100; 
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
     

      <nav className="fixed top-0 left-0 right-24 z-50 flex justify-between items-center px-8 py-6">
        <div className="h-[96px]" />
        <div className="flex gap-8 -translate-x-96">
          {/* Software Portfolio (Homepage) */}
          <NavLink
            to="/projects"
            end
            className={(props) => `${navItemClass(props, isScrolled)} nav-glow`}
          >
            software portfolio
          </NavLink>

          {/* Design Portfolio */}
         <a
          href="https://vanisha241204.wixsite.com/vanisha-1"
          className={`${navItemClass({ isActive: false }, isScrolled)} nav-glow`}
          target="_blank"
          rel="noopener noreferrer"
        >
          design portfolio
        </a>

        </div>

        {/* About */}
        <button
  onClick={scrollToAbout}
  className={`${navItemClass({ isActive: false }, isScrolled)} nav-glow`}
>
  about
</button>

      </nav>
       </section>

      {/* Main */}
      <main id="about-section" className="max-w-[1280px] mx-auto px-6 py-16 relative z-30 bg-[#F1EDE2]">
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
                    <span className="text-4xl text-left">studying software eng.</span>
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
                hi! i'm vanisha & i LOVE creating, whether it's solutions,
                websites, designs, or security. This is my portfolio website
                or basically my extended & ~decorated~ resume!
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
              </ReactLenis>

  );

}