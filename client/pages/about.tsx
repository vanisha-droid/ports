import { Link } from "react-router-dom";
import { ReactLenis } from 'lenis/react';


export default function About() {
  return (
    <div className="min-h-screen bg-[#EEEEEE] overflow-x-hidden">
      {/* Navigation */}
      <nav className="flex items-start justify-between px-6 sm:px-8 lg:px-9 pt-6 sm:pt-7">
        <div className="flex gap-6 sm:gap-12 lg:gap-16">
          <Link
            to="/"
            className="text-[#3A30FF] font-portfolio text-xl sm:text-2xl lg:text-[32px] leading-none hover:opacity-80 transition-opacity"
          >
            software portfolio
          </Link>
          <Link
            to="/design-portfolio"
            className="text-[#3A30FF] font-portfolio text-xl sm:text-2xl lg:text-[32px] leading-none hover:opacity-80 transition-opacity"
          >
            design portfolio
          </Link>
        </div>
        <Link
          to="/about"
          className="text-[#3A30FF] font-portfolio text-xl sm:text-2xl lg:text-[32px] leading-none hover:opacity-80 transition-opacity"
        >
          about
        </Link>
      </nav>

      {/* Main Content */}
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Left Column - Images */}
          <div className="flex flex-col items-start space-y-6 lg:space-y-8">
            {/* Stars */}
            <div className="relative w-full max-w-md -translate-x-[-2rem]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/d4105062545a0b365786574ef649197da4d6a967?width=214"
                alt=""
                className="w-20 sm:w-24 lg:w-[107px] h-auto drop-shadow-md absolute left-12 sm:left-16 lg:left-24 top-0 rotate-[31deg]"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/f5ac8df9420b1a56441ffa6ceb3434cf7ba40ed9?width=214"
                alt=""
                className="w-20 sm:w-24 lg:w-[107px] h-auto drop-shadow-md absolute left-4 sm:left-6 lg:left-8 top-16 sm:top-20 lg:top-24"
              />
            </div>

            {/* Snoopy Image */}
            <div className="relative mt-20 sm:mt-24 lg:mt-28 -translate-y-[-8rem]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/61266fdf58c5c1a08c17d6a16155f04784baa2eb?width=710"
                alt="Snoopy character"
                className="w-full max-w-xs sm:max-w-sm lg:max-w-md drop-shadow-md"
              />
            </div>
          </div>

          {/* Right Column - Text */}
         <div className="relative flex flex-col space-y-6 lg:space-y-8 pt-8 lg:pt-0 -translate-x-[8rem]">
  <div className="font-grotesk2 
    text-lg sm:text-xl lg:text-[50px]
    leading-snug lg:leading-[1.2]
    max-w-4xl">
              <span className="text-[#3A30FF]">
                There are many variations of passages of Lorem Ipsum available,{" "}
              </span>
              <span className="text-[#3A30FF]">
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </span>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="max-w-7xl mx-auto mt-16 sm:mt-20 lg:mt-32 space-y-6 sm:space-y-8 lg:space-y-12">
          {/* LinkedIn */}
          <div className="group">
            <a
              href="https://linkedin.com/in/vanisha-goyal-4722bb2b1
"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 sm:gap-6 lg:gap-8 hover:opacity-80 transition-opacity"
            >
              <h2 className="text-[#3A30FF] font-grotesk text-4xl sm:text-6xl lg:text-[96px] leading-none">
                LinkedIn
              </h2>
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[22px] lg:h-5 flex-shrink-0 mt-2 sm:mt-3 lg:mt-4"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-0.672673 19.2601C-1.08133 19.6316 -1.11145 20.264 -0.73994 20.6727C-0.368433 21.0813 0.264015 21.1115 0.672673 20.7399L0 20L-0.672673 19.2601ZM22.9989 0.0475646C23.0251 -0.504095 22.5992 -0.972599 22.0476 -0.998869L13.0578 -1.42695C12.5061 -1.45322 12.0376 -1.02731 12.0113 -0.475652C11.9851 0.0760078 12.411 0.544512 12.9626 0.570782L20.9536 0.951303L20.573 8.94225C20.5468 9.49391 20.9727 9.96241 21.5244 9.98868C22.076 10.015 22.5445 9.58904 22.5708 9.03738L22.9989 0.0475646ZM0 20L0.672673 20.7399L22.6727 0.73994L22 0L21.3273 -0.73994L-0.672673 19.2601L0 20Z"
                  fill="#3A30FF"
                />
              </svg>
            </a>
            <div className="h-px bg-portfolio-blue mt-2 sm:mt-3 lg:mt-4 max-w-lg"></div>
          </div>

          {/* Resume */}
          <div className="group">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 sm:gap-6 lg:gap-8 hover:opacity-80 transition-opacity"
            >
              <h2 className="text-[#3A30FF] font-grotesk text-4xl sm:text-6xl lg:text-[96px] leading-none">
                Resumé
              </h2>
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[22px] lg:h-5 flex-shrink-0 mt-2 sm:mt-3 lg:mt-4"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-0.672673 19.2601C-1.08133 19.6316 -1.11145 20.264 -0.73994 20.6727C-0.368433 21.0813 0.264015 21.1115 0.672673 20.7399L0 20L-0.672673 19.2601ZM22.9989 0.0475646C23.0251 -0.504095 22.5992 -0.972599 22.0476 -0.998869L13.0578 -1.42695C12.5061 -1.45322 12.0376 -1.02731 12.0113 -0.475652C11.9851 0.0760078 12.411 0.544512 12.9626 0.570782L20.9536 0.951303L20.573 8.94225C20.5468 9.49391 20.9727 9.96241 21.5244 9.98868C22.076 10.015 22.5445 9.58904 22.5708 9.03738L22.9989 0.0475646ZM0 20L0.672673 20.7399L22.6727 0.73994L22 0L21.3273 -0.73994L-0.672673 19.2601L0 20Z"
                  fill="#3A30FF"
                />
              </svg>
            </a>
            <div className="h-px bg-portfolio-blue mt-2 sm:mt-3 lg:mt-4 max-w-md"></div>
          </div>

          {/* Github */}
          <div className="group">
            <a
              href="https://github.com/vanisha-droid"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 sm:gap-6 lg:gap-8 hover:opacity-80 transition-opacity"
            >
              <h2 className="text-[#3A30FF] font-grotesk text-4xl sm:text-6xl lg:text-[96px] leading-none">
                Github
              </h2>
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[22px] lg:h-5 flex-shrink-0 mt-2 sm:mt-3 lg:mt-4"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-0.672673 19.2601C-1.08133 19.6316 -1.11145 20.264 -0.73994 20.6727C-0.368433 21.0813 0.264015 21.1115 0.672673 20.7399L0 20L-0.672673 19.2601ZM22.9989 0.0475646C23.0251 -0.504095 22.5992 -0.972599 22.0476 -0.998869L13.0578 -1.42695C12.5061 -1.45322 12.0376 -1.02731 12.0113 -0.475652C11.9851 0.0760078 12.411 0.544512 12.9626 0.570782L20.9536 0.951303L20.573 8.94225C20.5468 9.49391 20.9727 9.96241 21.5244 9.98868C22.076 10.015 22.5445 9.58904 22.5708 9.03738L22.9989 0.0475646ZM0 20L0.672673 20.7399L22.6727 0.73994L22 0L21.3273 -0.73994L-0.672673 19.2601L0 20Z"
                  fill="#3A30FF"
                />
              </svg>
            </a>
            <div className="h-px bg-portfolio-blue mt-2 sm:mt-3 lg:mt-4 max-w-lg"></div>
          </div>
        </div>

        {/* Business Card */}
<div className="max-w-7xl mx-auto mt-16 sm:mt-20 lg:mt-32 flex justify-center">
          <div
            className="relative w-full max-w-2xl lg:max-w-3xl h-64 sm:h-80 lg:h-[454px]"
            style={{ transform: "rotate(-3.4deg)" }}
          >
            {/* Card Background */}
            <div className="absolute inset-0 bg-white rounded-lg shadow-lg border border-black/5">
            </div>

            {/* Signature */}
            <div className="absolute left-6 sm:left-10 lg:left-14 top-15 sm:top-12 lg:top-14">
              <div className="font-bib text-[#3A30FF] text-6xl sm:text-7xl lg:text-[128px] leading-none">
                V
              </div>
              <div className="font-bib text-[#3A30FF] text-5xl sm:text-6xl lg:text-[128px] leading-none  -mt-14 sm:-mt-16 lg:-mt-20 -ml-1 sm:-ml-2">
                G
              </div>
            </div>

            {/* Decorative line */}
            <svg
              className="absolute left-20 sm:left-28 lg:left-40 top-8 sm:top-10 lg:top-12 w-[60%] sm:w-[65%] lg:w-[537px] h-auto"
              viewBox="0 0 537 97"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.914002 45.3509C0.500935 45.3201 0.14111 45.63 0.110311 46.0431C0.0795123 46.4562 0.389402 46.816 0.802469 46.8468L0.858235 46.0989L0.914002 45.3509ZM34.8387 61.6094L35.5456 61.86L34.8387 61.6094ZM529.633 18.1658C529.764 20.3711 531.658 22.0525 533.863 21.9214C536.068 21.7903 537.75 19.8963 537.618 17.691C537.487 15.4858 535.593 13.8044 533.388 13.9355C531.183 14.0666 529.501 15.9606 529.633 18.1658ZM0.858235 46.0989L0.802469 46.8468C7.02583 47.3108 10.5417 50.704 12.648 54.8396C14.7787 59.0234 15.443 63.9289 15.8951 67.2992C16.0068 68.1323 16.1074 68.8836 16.2154 69.4939C16.3189 70.079 16.444 70.6324 16.6384 71.0141C16.7329 71.1997 16.9039 71.4685 17.2118 71.6156C17.5833 71.793 17.9477 71.7044 18.2058 71.5488C18.4351 71.4105 18.6216 71.2011 18.7741 70.9958C18.9346 70.7798 19.0991 70.5103 19.2703 70.1945C19.9471 68.9461 20.8813 66.6832 22.225 63.1615C23.5747 59.6242 25.3546 54.7702 27.7243 48.3078L27.0201 48.0495L26.316 47.7913C23.9447 54.258 22.1689 59.1009 20.8236 62.6267C19.4724 66.168 18.5725 68.3343 17.9516 69.4796C17.7984 69.7622 17.672 69.964 17.57 70.1014C17.46 70.2494 17.4126 70.2755 17.4313 70.2642C17.4788 70.2356 17.6559 70.1654 17.8585 70.2621C17.9975 70.3285 18.0179 70.4175 17.9751 70.3334C17.8948 70.1758 17.7982 69.8306 17.6925 69.2326C17.5912 68.66 17.495 67.9438 17.3818 67.0998C16.934 63.7616 16.2487 58.6045 13.9846 54.1589C11.696 49.6652 7.77159 45.8623 0.914002 45.3509L0.858235 46.0989ZM27.0201 48.0495L27.7243 48.3078C28.9079 45.0798 29.8277 42.7211 30.5217 41.105C30.869 40.2961 31.1553 39.6839 31.3861 39.246C31.632 38.7794 31.7752 38.5901 31.821 38.5468C31.8696 38.5007 31.7063 38.6921 31.3961 38.6529C31.2182 38.6304 31.0859 38.5408 31.006 38.4541C30.9359 38.3782 30.91 38.3104 30.9045 38.2954C30.8949 38.2692 30.908 38.2947 30.9149 38.4164C30.9211 38.5258 30.9205 38.6757 30.9103 38.8706C30.869 39.661 30.6832 40.9611 30.3766 42.6813C29.1535 49.544 26.1276 62.4631 23.6357 73.8422C22.3923 79.5201 21.2824 84.8127 20.6035 88.751C20.2646 90.7167 20.0293 92.3663 19.9409 93.565C19.8971 94.1597 19.8866 94.6768 19.9272 95.078C19.9473 95.2765 19.9833 95.4837 20.0533 95.6705C20.1171 95.8406 20.2553 96.1176 20.561 96.2737C20.9105 96.4523 21.2503 96.3642 21.4648 96.2518C21.6658 96.1466 21.8321 95.9872 21.9645 95.8377C22.2359 95.5311 22.533 95.0695 22.8594 94.4798C23.5199 93.2863 24.3904 91.4001 25.505 88.7215C27.7377 83.3555 30.9872 74.718 35.5456 61.86L34.8387 61.6094L34.1318 61.3588C29.5751 74.2121 26.3367 82.8182 24.1201 88.1453C23.0099 90.8132 22.1654 92.636 21.547 93.7534C21.2339 94.3191 21.0006 94.6635 20.8414 94.8434C20.7585 94.9371 20.7345 94.941 20.769 94.923C20.817 94.8979 21.014 94.8208 21.2434 94.938C21.429 95.0328 21.4699 95.176 21.4578 95.1438C21.4519 95.1282 21.4335 95.0644 21.4196 94.9269C21.3922 94.6562 21.3951 94.2418 21.4369 93.6753C21.5197 92.5516 21.7448 90.9601 22.0817 89.0058C22.7543 85.104 23.8577 79.8404 25.101 74.1631C27.5824 62.8321 30.6234 49.8455 31.8533 42.9445C32.16 41.2238 32.3616 39.8419 32.4083 38.9488C32.4201 38.7229 32.4228 38.5143 32.4125 38.3314C32.4028 38.1608 32.3794 37.9601 32.3123 37.7777C32.2567 37.6263 32.0679 37.2259 31.5842 37.1648C31.1734 37.1128 30.8872 37.3652 30.7898 37.4575C30.5433 37.6908 30.3011 38.0876 30.0591 38.5466C29.802 39.0345 29.498 39.6874 29.1434 40.5131C28.4335 42.1663 27.5028 44.5547 26.316 47.7913L27.0201 48.0495ZM34.8387 61.6094L35.5456 61.86C39.1027 51.8262 47.284 44.2233 59.2975 38.5428C71.3173 32.8592 87.1058 29.1345 105.736 26.8339C142.996 22.233 191.416 23.3502 243.309 25.7062C295.176 28.061 350.502 31.6527 401.482 31.9804C452.452 32.308 499.178 29.3758 533.847 18.6449L533.625 17.9284L533.404 17.212C498.97 27.87 452.443 30.8079 401.492 30.4804C350.55 30.153 295.286 26.5645 243.377 24.2078C191.496 21.8523 142.955 20.7266 105.553 25.3452C86.8518 27.6545 70.8835 31.4051 58.6563 37.1867C46.4227 42.9714 37.8667 50.8235 34.1318 61.3588L34.8387 61.6094Z"
                fill="#3A30FF"
              />
            </svg>

            {/* Contact Info */}
            <div className="absolute right-6 sm:right-10 lg:right-20 bottom-20 sm:bottom-24 lg:bottom-32 text-right">
              <p className="text-[#3A30FF] font-grotesk2 text-sm sm:text-base lg:text-xl">
                Vanisha Goyal
              </p>
              <p className="text-[#3A30FF] font-grotesk2 text-sm sm:text-base lg:text-xl mt-1">
                vanisha.241204@gmail.com
              </p>
            </div>

            {/* Color squares */}
            <div className="absolute right-6 sm:right-10 lg:right-20 bottom-8 sm:bottom-10 lg:bottom-14 flex gap-2 sm:gap-3">
              <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-[21px] lg:h-5 bg-black"></div>
              <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-[21px] lg:h-5 bg-white border border-black"></div>
              <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-[21px] lg:h-5 bg-[#3A30FF]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
