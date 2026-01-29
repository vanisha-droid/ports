import { useState, useEffect, useRef } from "react";
import { ReactLenis } from 'lenis/react';
import{FlipCard} from "@/components/ui/FlipCard";
import { useTheme } from 'next-themes';


export default function Software() {
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
  
      <div className="min-h-screen bg-[#F1EDE2] overflow-x-clip">
      <div className="font-portfolio text-[#000000] flex flex-wrap justify-center gap-12 py-12 border-t -translate-x-[50px] border-black/30">
        <a
          href="/"
          className=" text-[32px] bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_2px] bg-left-bottom -translate-x-[300px]"
        >
          ←
        </a>
       <a
    href="/projects"
    className="text-[32px] bg-[linear-gradient(currentColor,currentColor)] bg-[length:100%_2px] bg-left-bottom bg-no-repeat"
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

      <section className="text-white w-full bg-[#F1EDE2] ">
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
  className="sticky top-0 h-screen -rotate-[5deg] grid place-content-center"
>
  <FlipCard
    front={

<div className="w-[400px] h-[440px] bg-white font-menlo rounded-md shadow-2xl 
                p-10 text-center flex flex-col justify-between">

        <h3 className="text-2xl font-extrabold uppercase text-black">
  CARBONWISE
</h3>


        <div className="flex-1 rounded-md overflow-hidden">
          
          {/* Ghost SVG - Pixel Art */}
          <div className="flex justify-center items-center flex-1">

          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48
                          translate-x-7 -translate-y-[-96px] scale-150">
             <svg
      width={156}
      height={156}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ imageRendering: 'pixelated' }}
    >
      
      <g clipPath="url(#clip0_1128_4400)">
        <path d="M32 7.62H30.48V9.14H32V7.62Z" fill="#000001"/>
        <path d="M27.43 15.24V16.76H24.39V18.29H27.43V27.43H21.34V28.95H27.43V30.48H32V15.24H27.43Z" fill="#000001"/>
        <path d="M30.48 9.14001H28.96V10.67H30.48V9.14001Z" fill="#000001"/>
        <path d="M28.96 7.62H27.43V9.14H28.96V7.62Z" fill="#000001"/>
        <path d="M27.43 9.14001H25.91V10.67H27.43V9.14001Z" fill="#000001"/>
        <path d="M27.43 1.53H25.91V3.05H27.43V1.53Z" fill="#000001"/>
        <path d="M25.91 7.62H24.39V9.14H25.91V7.62Z" fill="#000001"/>
        <path d="M24.39 15.24H22.86V16.76H24.39V15.24Z" fill="#000001"/>
        <path d="M22.86 13.72H21.34V15.24H22.86V13.72Z" fill="#000001"/>
        <path d="M21.34 22.86H19.81V25.91H16.77V28.95H18.29V27.43H21.34V22.86Z" fill="#000001"/>
        <path d="M19.81 21.34H18.29V22.86H19.81V21.34Z" fill="#000001"/>
        <path d="M19.81 3.04999H18.29V4.56999H19.81V3.04999Z" fill="#000001"/>
        <path d="M18.29 19.81H16.77V21.34H18.29V19.81Z" fill="#000001"/>
        <path d="M18.29 16.76H16.77V18.29H18.29V16.76Z" fill="#000001"/>
        <path d="M21.34 12.19H15.24V13.72H21.34V12.19Z" fill="#000001"/>
        <path d="M18.29 4.57001H16.77V6.10001H18.29V4.57001Z" fill="#000001"/>
        <path d="M18.29 1.53H16.77V3.05H18.29V1.53Z" fill="#000001"/>
        <path d="M16.77 24.38H15.24V25.91H16.77V24.38Z" fill="#000001"/>
        <path d="M16.77 18.29H15.24V19.81H16.77V18.29Z" fill="#000001"/>
        <path d="M16.77 3.04999H15.24V4.56999H16.77V3.04999Z" fill="#000001"/>
        <path d="M13.72 30.48H9.14999V32H15.24V30.48H16.77V28.95H13.72V30.48Z" fill="#000001"/>
        <path d="M15.24 13.72H13.72V15.24H15.24V13.72Z" fill="#000001"/>
        <path d="M13.72 27.43H12.19V28.95H13.72V27.43Z" fill="#000001"/>
        <path d="M15.24 19.81H12.19V21.34H15.24V19.81Z" fill="#000001"/>
        <path d="M13.72 15.24H12.19V16.76H13.72V15.24Z" fill="#000001"/>
        <path d="M13.72 12.19H10.67V13.72H13.72V12.19Z" fill="#000001"/>
        <path d="M12.19 25.91H10.67V27.43H12.19V25.91Z" fill="#000001"/>
        <path d="M12.19 16.76H10.67V19.81H12.19V16.76Z" fill="#000001"/>
        <path d="M12.19 6.10001H10.67V7.62001H12.19V6.10001Z" fill="#000001"/>
        <path d="M10.67 13.72H9.14999V15.24H10.67V13.72Z" fill="#000001"/>
        <path d="M9.14999 28.95H7.62V30.48H9.14999V28.95Z" fill="#000001"/>
        <path d="M9.14999 15.24H7.62V16.76H9.14999V15.24Z" fill="#000001"/>
        <path d="M4.58 27.43V18.29H7.62V16.76H4.58V15.24H0V30.48H4.58V28.95H7.62V27.43H4.58Z" fill="#000001"/>
        <path d="M7.62001 0H6.10001V1.53H7.62001V0Z" fill="#000001"/>
        <path d="M4.58 12.19V10.67H6.1V9.14H4.58V7.62H3.05V9.14H1.53V10.67H3.05V12.19H4.58Z" fill="#000001"/>
      </g>
      <defs>
        <clipPath id="clip0_1128_4400">
          <rect width="32" height="32" fill="white"/>
        </clipPath>
      </defs>
    </svg>
          </div>
        </div>
      </div>

      </div>
    }

    back={
<div className="w-[400px] h-[440px] bg-white font-menlo rounded-md shadow-2xl 
                p-10 text-center flex flex-col justify-between">

        <h2 className="text-3xl text-black font-menlo font-extrabold tracking-wide uppercase">
          CARBONWISE
        </h2>

        <p className="text-black font-menlo text-lg leading-tight">
          Built a full stack website called carbonwise - a sustainable marketplace platform which 
          allows users to sell and buy used goods with browsing, search, messaging, location, and a rating system.
        </p>

        <div className="text-black font-ztbrosit flex flex-wrap justify-center gap-3 pt-4">
          <span className="px-5 py-2 rounded-full border border-black text-sm font-medium">
            Java
          </span>
          <span className="px-5 py-2 rounded-full bg-[#f5f1e8] text-sm font-medium">
            HTML
          </span>
          <span className="px-5 py-2 rounded-full bg-[#f5f1e8] text-sm font-medium">
            CSS
          </span>
          <span className="px-5 py-2 rounded-full bg-[#f5f1e8] text-sm font-medium">
            Javascript
          </span>
          <span className="px-5 py-2 rounded-full bg-[#e6e6e6] text-sm font-medium">
            React
          </span>
          <span className="px-5 py-2 rounded-full bg-[#e6e6e6] text-sm font-medium">
            SpringBoot
          </span>
          <span className="px-5 py-2 rounded-full bg-[#e6e6e6] text-sm font-medium">
            MySQL
          </span>
          <span className="px-5 py-2 rounded-full bg-[#e6e6e6] text-sm font-medium">
            Gradle
          </span>
        </div>

      </div>
    }
  />
</figure>


 <figure
  ref={(el) => (imageRefs.current[0] = el)}
  className="sticky top-0 h-screen -rotate-[3deg] grid place-content-center"
>
  <FlipCard
    front={

<div className="w-[400px] h-[440px] bg-white font-menlo rounded-md shadow-2xl 
                p-10 text-center flex flex-col justify-between">

        <h3 className="text-2xl font-extrabold uppercase text-black">
  PACMAN GAME
</h3>


        <div className="flex-1 rounded-md overflow-hidden">
          
          {/* Ghost SVG - Pixel Art */}
          <div className="flex justify-center items-center flex-1">

          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48
                          translate-x-3 -translate-y-[-96px] rotate-[-6deg] scale-150">
            <svg
              className="w-full h-full"
              viewBox="0 0 183 173"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_209_302)">
                <path d="M164.249 116.274L156.651 115.038L153.235 136.041L160.833 137.277L164.249 116.274Z" fill="#000001"/>
                <path d="M171.457 23.9941L163.909 22.7665L162.773 29.7523L155.175 28.5166L154.031 35.5483L161.629 36.7839L160.493 43.7697L168.042 44.9972L169.178 38.0115L176.776 39.2471L177.919 32.2155L170.321 30.9798L171.457 23.9941Z" fill="#000001"/>
                <path d="M163.482 73.032L155.934 71.8044L149.103 113.811L156.651 115.038L163.482 73.032Z" fill="#000001"/>
                <path d="M153.235 136.041L138.089 133.578L136.953 140.564L152.099 143.027L153.235 136.041Z" fill="#000001"/>
                <path d="M158.214 57.787L150.616 56.5514L148.336 70.5688L155.934 71.8044L158.214 57.787Z" fill="#000001"/>
                <path d="M136.953 140.564L129.405 139.336L128.261 146.368L135.809 147.596L136.953 140.564Z" fill="#000001"/>
                <path d="M140.369 119.561L132.82 118.333L130.541 132.351L138.089 133.578L140.369 119.561Z" fill="#000001"/>
                <path d="M151.752 49.5657L144.203 48.3381L143.067 55.3239L150.616 56.5514L151.752 49.5657Z" fill="#000001"/>
                <path d="M128.261 146.368L120.713 145.141L119.577 152.126L127.125 153.354L128.261 146.368Z" fill="#000001"/>
                <path d="M140.788 69.3413L133.239 68.1137L132.103 75.0994L124.505 73.8638L123.369 80.8495L130.967 82.0851L129.824 89.1168L137.372 90.3444L138.516 83.3127L146.064 84.5403L147.2 77.5546L139.652 76.327L140.788 69.3413Z" fill="#000001"/>
                <path d="M145.347 41.3064L130.201 38.8432L129.057 45.8749L144.204 48.3381L145.347 41.3064Z" fill="#000001"/>
                <path d="M119.577 152.126L104.43 149.663L103.287 156.695L118.433 159.158L119.577 152.126Z" fill="#000001"/>
                <path d="M99.5312 84.1904L96.1155 105.193L118.81 108.884L122.226 87.8811L99.5312 84.1904ZM112.398 100.671L104.8 99.4353L105.943 92.4037L113.541 93.6393L112.398 100.671Z" fill="#000001"/>
                <path d="M103.287 156.695L50.2996 148.078L49.1635 155.063L102.151 163.68L103.287 156.695Z" fill="#000001"/>
                <path d="M94.9794 112.179L87.4311 110.952L85.1514 124.969L92.6998 126.197L94.9794 112.179Z" fill="#000001"/>
                <path d="M131.337 31.8575L93.4958 25.7035L92.3597 32.6892L130.201 38.8432L131.337 31.8575Z" fill="#000001"/>
                <path d="M84.3848 81.7272L91.9828 82.9628L93.1264 75.9311L100.675 77.1587L101.811 70.173L94.2625 68.9454L95.3985 61.9597L87.8005 60.724L86.6645 67.7097L79.1161 66.4822L77.9801 73.4679L85.5284 74.6955L84.3848 81.7272Z" fill="#000001"/>
                <path d="M85.1515 124.969L70.0051 122.506L68.8691 129.492L84.0154 131.955L85.1515 124.969Z" fill="#000001"/>
                <path d="M92.3598 32.6893L77.2631 30.2341L76.1195 37.2658L91.2162 39.7209L92.3598 32.6893Z" fill="#000001"/>
                <path d="M72.2848 108.488L64.7364 107.261L62.4568 121.278L70.0051 122.506L72.2848 108.488Z" fill="#000001"/>
                <path d="M76.1195 37.2658L68.5215 36.0302L67.3855 43.0159L74.9835 44.2515L76.1195 37.2658Z" fill="#000001"/>
                <path d="M80.6788 9.23094L73.0808 7.9953L71.9447 14.981L79.5427 16.2167L80.6788 9.23094Z" fill="#000001"/>
                <path d="M51.4431 141.046L36.2968 138.583L35.1532 145.614L50.2996 148.077L51.4431 141.046Z" fill="#000001"/>
                <path d="M67.3855 43.0158L59.8372 41.7883L57.5575 55.8057L65.1059 57.0332L67.3855 43.0158Z" fill="#000001"/>
                <path d="M57.5575 55.8057L49.9595 54.5701L43.1282 96.5763L50.7262 97.812L57.5575 55.8057Z" fill="#000001"/>
                <path d="M37.4329 131.597L29.8845 130.369L28.7485 137.355L36.2968 138.583L37.4329 131.597Z" fill="#000001"/>
                <path d="M54.5188 26.5352L46.9704 25.3077L43.5547 46.3108L51.1031 47.5384L54.5188 26.5352Z" fill="#000001"/>
                <path d="M31.0281 123.338L23.4797 122.11L22.3362 129.142L29.8845 130.369L31.0281 123.338Z" fill="#000001"/>
                <path d="M43.1282 96.5764L28.0315 94.1212L26.8954 101.107L41.9921 103.562L43.1282 96.5764Z" fill="#000001"/>
                <path d="M48.1065 18.322L32.9602 15.8588L31.8241 22.8445L46.9704 25.3077L48.1065 18.322Z" fill="#000001"/>
                <path d="M24.6158 115.124L17.0178 113.889L15.8818 120.874L23.4797 122.11L24.6158 115.124Z" fill="#000001"/>
                <path d="M29.1676 87.1355L21.5696 85.8998L20.4335 92.8856L28.0315 94.1212L29.1676 87.1355Z" fill="#000001"/>
                <path d="M43.5547 46.3108L20.8601 42.6201L19.7165 49.6517L42.4112 53.3425L43.5547 46.3108Z" fill="#000001"/>
                <path d="M38.2786 31.1118L30.6806 29.8762L29.5445 36.8619L37.1425 38.0975L38.2786 31.1118Z" fill="#000001"/>
                <path d="M20.4335 92.8855L12.8852 91.658L9.46947 112.661L17.0178 113.889L20.4335 92.8855Z" fill="#000001"/>
                <path d="M24.9927 64.8507L17.4444 63.6232L16.3009 70.6549L23.8492 71.8824L24.9927 64.8507Z" fill="#000001"/>
                <path d="M31.8241 22.8444L24.2758 21.6169L23.1322 28.6486L30.6806 29.8761L31.8241 22.8444Z" fill="#000001"/>
              </g>
              <defs>
                <clipPath id="clip0_209_302">
                  <rect width="161" height="149" fill="white" transform="translate(23.9173) rotate(9.23701)"/>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      </div>
    }

    back={
<div className="w-[400px] h-[440px] bg-white font-menlo rounded-md shadow-2xl 
                p-10 text-center flex flex-col justify-between">

        <h2 className="text-3xl text-black font-menlo font-extrabold tracking-wide uppercase">
          PACMAN GAME
        </h2>

        <p className="text-black font-menlo text-lg leading-tight">
          Built a fully functioning pacman game using Java and various coding design patterns to implement featr=ures to ensure highly modular and extensible code.
        </p>

        <div className="text-black font-ztbrosit flex flex-wrap justify-center gap-3 pt-4">
          <span className="px-5 py-2 rounded-full border border-black text-sm font-medium">
            Java
          </span>
          <span className="px-5 py-2 rounded-full bg-[#f5f1e8] text-sm font-medium">
            AWT
          </span>
          <span className="px-5 py-2 rounded-full bg-[#d9dfd6] text-sm font-medium">
            Gradle
          </span>
          <span className="px-5 py-2 rounded-full bg-[#e6e6e6] text-sm font-medium">
            Intellij-IDE
          </span>
        </div>

      </div>
    }
  />
</figure>


              {/* ====== IMAGE 2 (index 1) - Triggers "third" / "year" ====== */}
               <figure
  ref={(el) => (imageRefs.current[1] = el)}
  className="sticky top-0 h-screen -rotate-[-3deg] grid place-content-center"
>
  <FlipCard
    front={

<div className="w-[400px] h-[440px] bg-white font-menlo rounded-md shadow-2xl 
                p-10 text-center flex flex-col justify-between">

        <h3 className="text-2xl font-extrabold uppercase text-black">
  PACMAN GAME
</h3>


        <div className="flex-1 rounded-md overflow-hidden">
          
          {/* Ghost SVG - Pixel Art */}
          <div className="flex justify-center items-center flex-1">

          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48
                          translate-x-3 -translate-y-[-96px] rotate-[-6deg] scale-150">
            <svg
              className="w-full h-full"
              viewBox="0 0 183 173"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_209_302)">
                <path d="M164.249 116.274L156.651 115.038L153.235 136.041L160.833 137.277L164.249 116.274Z" fill="#000001"/>
                <path d="M171.457 23.9941L163.909 22.7665L162.773 29.7523L155.175 28.5166L154.031 35.5483L161.629 36.7839L160.493 43.7697L168.042 44.9972L169.178 38.0115L176.776 39.2471L177.919 32.2155L170.321 30.9798L171.457 23.9941Z" fill="#000001"/>
                <path d="M163.482 73.032L155.934 71.8044L149.103 113.811L156.651 115.038L163.482 73.032Z" fill="#000001"/>
                <path d="M153.235 136.041L138.089 133.578L136.953 140.564L152.099 143.027L153.235 136.041Z" fill="#000001"/>
                <path d="M158.214 57.787L150.616 56.5514L148.336 70.5688L155.934 71.8044L158.214 57.787Z" fill="#000001"/>
                <path d="M136.953 140.564L129.405 139.336L128.261 146.368L135.809 147.596L136.953 140.564Z" fill="#000001"/>
                <path d="M140.369 119.561L132.82 118.333L130.541 132.351L138.089 133.578L140.369 119.561Z" fill="#000001"/>
                <path d="M151.752 49.5657L144.203 48.3381L143.067 55.3239L150.616 56.5514L151.752 49.5657Z" fill="#000001"/>
                <path d="M128.261 146.368L120.713 145.141L119.577 152.126L127.125 153.354L128.261 146.368Z" fill="#000001"/>
                <path d="M140.788 69.3413L133.239 68.1137L132.103 75.0994L124.505 73.8638L123.369 80.8495L130.967 82.0851L129.824 89.1168L137.372 90.3444L138.516 83.3127L146.064 84.5403L147.2 77.5546L139.652 76.327L140.788 69.3413Z" fill="#000001"/>
                <path d="M145.347 41.3064L130.201 38.8432L129.057 45.8749L144.204 48.3381L145.347 41.3064Z" fill="#000001"/>
                <path d="M119.577 152.126L104.43 149.663L103.287 156.695L118.433 159.158L119.577 152.126Z" fill="#000001"/>
                <path d="M99.5312 84.1904L96.1155 105.193L118.81 108.884L122.226 87.8811L99.5312 84.1904ZM112.398 100.671L104.8 99.4353L105.943 92.4037L113.541 93.6393L112.398 100.671Z" fill="#000001"/>
                <path d="M103.287 156.695L50.2996 148.078L49.1635 155.063L102.151 163.68L103.287 156.695Z" fill="#000001"/>
                <path d="M94.9794 112.179L87.4311 110.952L85.1514 124.969L92.6998 126.197L94.9794 112.179Z" fill="#000001"/>
                <path d="M131.337 31.8575L93.4958 25.7035L92.3597 32.6892L130.201 38.8432L131.337 31.8575Z" fill="#000001"/>
                <path d="M84.3848 81.7272L91.9828 82.9628L93.1264 75.9311L100.675 77.1587L101.811 70.173L94.2625 68.9454L95.3985 61.9597L87.8005 60.724L86.6645 67.7097L79.1161 66.4822L77.9801 73.4679L85.5284 74.6955L84.3848 81.7272Z" fill="#000001"/>
                <path d="M85.1515 124.969L70.0051 122.506L68.8691 129.492L84.0154 131.955L85.1515 124.969Z" fill="#000001"/>
                <path d="M92.3598 32.6893L77.2631 30.2341L76.1195 37.2658L91.2162 39.7209L92.3598 32.6893Z" fill="#000001"/>
                <path d="M72.2848 108.488L64.7364 107.261L62.4568 121.278L70.0051 122.506L72.2848 108.488Z" fill="#000001"/>
                <path d="M76.1195 37.2658L68.5215 36.0302L67.3855 43.0159L74.9835 44.2515L76.1195 37.2658Z" fill="#000001"/>
                <path d="M80.6788 9.23094L73.0808 7.9953L71.9447 14.981L79.5427 16.2167L80.6788 9.23094Z" fill="#000001"/>
                <path d="M51.4431 141.046L36.2968 138.583L35.1532 145.614L50.2996 148.077L51.4431 141.046Z" fill="#000001"/>
                <path d="M67.3855 43.0158L59.8372 41.7883L57.5575 55.8057L65.1059 57.0332L67.3855 43.0158Z" fill="#000001"/>
                <path d="M57.5575 55.8057L49.9595 54.5701L43.1282 96.5763L50.7262 97.812L57.5575 55.8057Z" fill="#000001"/>
                <path d="M37.4329 131.597L29.8845 130.369L28.7485 137.355L36.2968 138.583L37.4329 131.597Z" fill="#000001"/>
                <path d="M54.5188 26.5352L46.9704 25.3077L43.5547 46.3108L51.1031 47.5384L54.5188 26.5352Z" fill="#000001"/>
                <path d="M31.0281 123.338L23.4797 122.11L22.3362 129.142L29.8845 130.369L31.0281 123.338Z" fill="#000001"/>
                <path d="M43.1282 96.5764L28.0315 94.1212L26.8954 101.107L41.9921 103.562L43.1282 96.5764Z" fill="#000001"/>
                <path d="M48.1065 18.322L32.9602 15.8588L31.8241 22.8445L46.9704 25.3077L48.1065 18.322Z" fill="#000001"/>
                <path d="M24.6158 115.124L17.0178 113.889L15.8818 120.874L23.4797 122.11L24.6158 115.124Z" fill="#000001"/>
                <path d="M29.1676 87.1355L21.5696 85.8998L20.4335 92.8856L28.0315 94.1212L29.1676 87.1355Z" fill="#000001"/>
                <path d="M43.5547 46.3108L20.8601 42.6201L19.7165 49.6517L42.4112 53.3425L43.5547 46.3108Z" fill="#000001"/>
                <path d="M38.2786 31.1118L30.6806 29.8762L29.5445 36.8619L37.1425 38.0975L38.2786 31.1118Z" fill="#000001"/>
                <path d="M20.4335 92.8855L12.8852 91.658L9.46947 112.661L17.0178 113.889L20.4335 92.8855Z" fill="#000001"/>
                <path d="M24.9927 64.8507L17.4444 63.6232L16.3009 70.6549L23.8492 71.8824L24.9927 64.8507Z" fill="#000001"/>
                <path d="M31.8241 22.8444L24.2758 21.6169L23.1322 28.6486L30.6806 29.8761L31.8241 22.8444Z" fill="#000001"/>
              </g>
              <defs>
                <clipPath id="clip0_209_302">
                  <rect width="161" height="149" fill="white" transform="translate(23.9173) rotate(9.23701)"/>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      </div>
    }

    back={
<div className="w-[400px] h-[440px] bg-white font-menlo rounded-md shadow-2xl 
                p-10 text-center flex flex-col justify-between">

        <h2 className="text-3xl text-black font-menlo font-extrabold tracking-wide uppercase">
          PACMAN GAME
        </h2>

        <p className="text-black font-menlo text-lg leading-tight">
          Built a fully functioning pacman game using Java and various coding design patterns to implement featr=ures to ensure highly modular and extensible code.
        </p>

        <div className="text-black font-ztbrosit flex flex-wrap justify-center gap-3 pt-4">
          <span className="px-5 py-2 rounded-full border border-black text-sm font-medium">
            Java
          </span>
          <span className="px-5 py-2 rounded-full bg-[#f5f1e8] text-sm font-medium">
            AWT
          </span>
          <span className="px-5 py-2 rounded-full bg-[#d9dfd6] text-sm font-medium">
            Gradle
          </span>
          <span className="px-5 py-2 rounded-full bg-[#e6e6e6] text-sm font-medium">
            Intellij-IDE
          </span>
        </div>

      </div>
    }
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
    </div>
    </ReactLenis>
  );
}