import { ReactLenis } from 'lenis/react';
import grain from "../assets/grain2.jpg";
import redheart from "../assets/redheart.png";
import sparkles from "../assets/glimmer.png";
import me from "../assets/me.jpg";
'use client';
import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import pulp0 from "../assets/PULP-images-0.jpg"
import pulp1 from "../assets/PULP-images-1.jpg"
import pulp2 from "../assets/PULP-images-2.jpg"
import pulp3 from "../assets/PULP-images-3.jpg"
import pulp4 from "../assets/PULP-images-4.jpg"
import pulp5 from "../assets/PULP-images-5.jpg"
import pulp6 from "../assets/PULP-images-6.jpg"
import pulp7 from "../assets/PULP-images-7.jpg"
import pulp8 from "../assets/PULP-images-8.jpg"
import pulp9 from "../assets/PULP-images-9.jpg"
import pulp10 from "../assets/PULP-images-10.jpg"
import pulp11 from "../assets/PULP-images-11.jpg"
import dfk from "../assets/sas.png"

import { Marquee } from "@/components/ui/marquee"

import {
  Carousel,
  Slider,
  SliderContainer,
  SliderDotButton,
  SliderNextButton,
  SliderPrevButton,
} from '@/components/ui/carousel';

import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Design() {
    const OPTIONS: EmblaOptionsType = { loop: false };
  return (
            <ReactLenis root>

<div className="relative bg-white overflow-x-clip min-h-[200vh]">

        {/* Top nav */}
         <img
  src={dfk}
  alt=""
  className="
    absolute
    top-0
    left-20px
    w-4/5
    h-auto
    max-h-screen
    object-cover
    z-0
    -translate-x-[0px]
    -translate-y-[0px]
    origin-top-left
    pointer-events-none
  "
/>

       <div className="font-portfolio relative py-12 border-t border-black/30 z-10">
  <a
    href="/"
    className="absolute left-20 top-1/2 -translate-y-1/2 translate-y-2 text-[32px]"
  >
    ←
  </a>
</div>

        {/* HERO WRAPPER */}
        <section className="relative flex justify-center items-end min-h-[55vh]">

          {/* Headline wrapper */}

          <div className="translate-y-12">

<div className="relative">
  <h1
    className="
      relative
      z-7
      font-grotesk
      whitespace-nowrap
      text-[clamp(4rem,18vw,16rem)]
      leading-none
      translate-y-[14vh]
      translate-x-[-6vh]
      text-black
    "
  >
    creations.
  </h1>

<h1
  className="
    absolute inset-0 z-10
    font-grotesk whitespace-nowrap
    text-[clamp(4rem,18vw,16rem)]
    leading-none
    translate-y-[14vh] translate-x-[-6vh]
    pointer-events-none
  "
  style={{
    color: '#2a2a2a',
    opacity: 0.6,

    WebkitMaskImage: `url(${grain})`,
    WebkitMaskRepeat: 'repeat',
    WebkitMaskSize: '64px 64px',

    maskImage: `url(${grain})`,
    maskRepeat: 'repeat',
    maskSize: '64px 64px',

    filter: `
      contrast(900%)
      brightness(0.9)
      blur(4.5px)
    `,
  }}
>
  creations.
</h1>

</div>
          {/* Yellow wave */}
          <div className="absolute bottom-0 translate-y-[102%] left-1/2 w-[110vw] -translate-x-1/2 border border-white">
            <svg
              className="w-full h-auto"
              viewBox="0 0 1353 933"
              preserveAspectRatio="none"
            >
              <path
                d="M113.418 1H1281C1320.21 1 1352 32.7878 1352 72V509.626C1352 582.199 1249.76 597.732 1228.21 528.434C1214.61 484.715 1161.42 468.186 1125.44 496.497L1070.97 539.357C1044.93 559.839 1008.2 559.598 982.436 538.778L906.134 477.114C878.349 454.66 838.395 455.613 811.712 479.365L693.61 584.494C663.941 610.905 618.376 607.838 592.514 577.688L402.104 355.717C379.034 328.823 339.982 322.378 309.495 340.436L211.463 398.499C191.959 410.051 168.111 411.595 147.28 402.655L51.5049 361.553C21.8175 348.812 4.47339 317.636 9.30273 285.693L43.2158 61.3857C48.4651 26.6671 78.3047 1.00005 113.418 1Z"
                fill="#FFEF3F"
              />
            </svg>
          </div>
</div>
        </section>
        <div className="relative">
<img src={redheart} className="relative h-[80px] w-[80px] rotate-[-7deg] -translate-x-[-60px] -translate-y-[-50px]"> 
</img>
<img
    src={sparkles}
    className="absolute
      top-[-90%]
      left-[85%]
      h-[300px]
      w-auto
      rotate-[5deg]
      -translate-x-1/2
      z-10"
  />
</div>
<div className="px-20 md:px-48 mt-98 md:mt-114 -translate-y-[-430px] -translate-x-[-105px]">
<div className="relative flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-5">
    
    {/* Text */}
    <div className="font-grotesk text-black leading-none text-right -translate-y-[-50px]">
      <p className="text-4xl md:text-5xl lg:text-6xl flex flex-col gap-1 items-end">
        <span className="bg-yellow-300 border-2 border-white px-2 w-fit">software</span>
        <span>by</span>
        <span>profession,</span>
        <span className="bg-blue-200 px-2 w-fit">design</span>
        <span>by</span>
        <span>passion</span>
      </p>
    </div>

    {/* Image */}
    <img
      src={me}
      alt="Me"
      className="h-[320px] md:h-[420px] lg:h-[480px] w-auto"
    />

  </div>
</div>
<div className="px-20 md:px-48 mt-98 md:mt-114 -translate-y-[-35rem]">
  <div className="font-grotesk text-black leading-none text-right">
    <div className="flex items-center justify-end gap-6">

      {/* Horizontal line */}
      <div
  className="
    bg-black
    flex-grow
    max-w-[calc(100%-40px)]
    h-[0.3px]
    -translate-y-5
  "
  style={{ marginLeft: "40px",
    marginRight:"40px",
    opacity:0.8
   }}
/>


      {/* Text */}
      <p className="text-4xl md:text-5xl lg:text-6xl flex flex-col gap-1 items-end">
<span className="px-2 w-fit">
    <span className="font-bib inline-block 
      scale-[1.22] 
      -translate-x-[20px]
      -translate-y-[1px]
      origin-bottom">P</span>ulp: a c<span className="font-pinyon inline-block 
      scale-[1.09]
      -translate-y-[-1px]
      origin-bottom">o</span>ncept
  </span>        <span>magazine</span>
      </p>

    </div>
  </div>


<div className="relative flex flex-col md:flex-row md:items-start gap-6 md:gap-5 w-full md:w-2/3 mx-auto -translate-y-[-50px]">

  <Carousel options={OPTIONS}>
    <SliderContainer className="w-full">
      
      {[pulp0, pulp1, pulp2, pulp3, pulp4, pulp5, pulp6,pulp7, pulp8, pulp9, pulp10, pulp11 ].map((img, i) => (
        <Slider key={i} className="w-full">
          <img
            src={img}
            className="w-full object-cover aspect-[3509/2408] rounded-lg"
            alt=""
          />
        </Slider>
      ))}

    </SliderContainer>

    <SliderPrevButton className="absolute top-1/2 left-4 -translate-y-1/2 p-2 border-2 rounded-full bg-white/25 dark:bg-black/25 dark:border-white backdrop-blur-xs text-primary disabled:opacity-20">
      <ChevronLeft className="w-8 h-8" />
    </SliderPrevButton>

    <SliderNextButton className="absolute top-1/2 right-4 -translate-y-1/2 p-2 border-2 rounded-full bg-white/25 dark:bg-black/25 dark:border-white backdrop-blur-xs text-primary disabled:opacity-20">
      <ChevronRight className="w-8 h-8" />
    </SliderNextButton>

    <div className="flex justify-center py-2">
      <SliderDotButton />
    </div>
  </Carousel>
</div>

</div>
</div>
<div className="w-screen translate-y-[45rem] overflow-hidden">
  <Marquee pauseOnHover className="w-screen [--gap:0px]">
    {Array.from({ length: 6 }).map((_, i) => (
      <span
        key={i}
        className="text-6xl bg-[#FFEF3F] py-5 px-8 font-grotesk border-y border-black whitespace-nowrap"
      >
        some miscs ft. me and my friends
      </span>
    ))}
  </Marquee>
</div>




        </ReactLenis>


      
  );
}
