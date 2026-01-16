import { NavLink, Link } from "react-router-dom";
import signature from "../assets/signature.png";
import pfp from "../assets/pfp.jpg";

const navItemClass = ({ isActive }) =>
  `
  relative font-portfolio text-2xl md:text-[32px]
  px-3 py-1
  transition-all duration-300
  ${
    isActive
      ? "before:scale-100"
      : "before:scale-0 hover:before:scale-100"
  }
  before:content-['']
  before:absolute
  before:-inset-2
  before:rounded-full
  before:bg-[rgba(229,186,65,0.44)]
  before:-z-10
  before:transition-transform
  before:duration-300
  `;


export default function Index() {
  return (
    <div className="min-h-screen bg-[#F1EDE2] overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="flex justify-between items-center px-2 py-8 max-w-[1280px] mx-auto">
  <div className="flex gap-8 -translate-x-6">

    {/* Software Portfolio (Homepage) */}
    <NavLink
      to="/software-portfolio"
      end
      className={navItemClass}
    >
      software portfolio
    </NavLink>

    {/* Design Portfolio */}
    <NavLink
      to="/design-portfolio"
      className={navItemClass}
    >
      design portfolio
    </NavLink>
  </div>

  {/* About */}
  <NavLink
    to="/about"
    className={navItemClass}
  >
    about
  </NavLink>
</nav>


      {/* Main */}
      <main className="max-w-[1280px] mx-auto px-6 py-16">

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
  );
}
