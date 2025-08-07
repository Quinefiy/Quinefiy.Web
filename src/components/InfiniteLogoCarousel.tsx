// 'use client'

// import { useEffect, useState } from 'react'
// import Image from 'next/image'

// const AUTO_SCROLL_INTERVAL = 2000 // ms
// const TRANSITION_DURATION = 500 // ms

// export default function InfiniteLogoCarousel() {
//     const logos = [
//         { id: 1, src: "/assets/owner-Logo.png" },
//         { id: 2, src: "/assets/owner-Logo.png" },
//         { id: 3, src: "/assets/owner-Logo.png" },
//         { id: 4, src: "/assets/owner-Logo.png" },
//         { id: 5, src: "/assets/owner-Logo.png" },
//         { id: 6, src: "/assets/owner-Logo.png" },
//         { id: 7, src: "/assets/owner-Logo.png" },
//         { id: 8, src: "/assets/owner-Logo.png" },
//         { id: 9, src: "/assets/owner-Logo.png" }
//     ]
//     const [visibleLogos, setVisibleLogos] = useState(logos)
//     const [isAnimating, setIsAnimating] = useState(false)

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setIsAnimating(true)

//             // After animation, rotate the array
//             setTimeout(() => {
//                 setVisibleLogos((prev) => {
//                     const [first, ...rest] = prev
//                     return [...rest, first]
//                 })
//                 setIsAnimating(false)
//             }, TRANSITION_DURATION)
//         }, AUTO_SCROLL_INTERVAL)

//         return () => clearInterval(interval)
//     }, [])

//     return (
//         <div className="flex h-[35px] overflow-hidden justify-center xl:gap-[96px] lg:gap-[64px] sm:gap-[42px] gap-[24px] w-full">
//             <div
//                 className={`flex gap-6 transition-transform duration-[${TRANSITION_DURATION}ms] ${isAnimating ? '-translate-x-[calc(100%/4+1.5rem)]' : 'translate-x-0'
//                     }`}
//                 style={{ width: 'max-content' }}
//             >
//                 {visibleLogos.map((logo, i) => (
//                     <div
//                         key={i}
//                         className="lg:w-[77px] sm:w-[68px] w-[60px] relative aspect-[77/34] flex-shrink-0"
//                     >
//                         <Image src={logo.src} alt="" fill className="object-contain" />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }


// "use client";

// import { useEffect, useRef } from "react";
// import clsx from "clsx";

// const tags = ["HTML", "CSS", "JS", "SSG", "webdev", "animation", "UI/UX"];

// export default function InfiniteScroller() {
//   const scrollerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const scroller = scrollerRef.current;
//     if (!scroller) return;

//     const scrollerInner = scroller.querySelector(".scroller__inner");
//     if (!scrollerInner) return;

//     const children = Array.from(scrollerInner.children);

//     children.forEach((child) => {
//       const clone = child.cloneNode(true) as HTMLElement;
//       clone.setAttribute("aria-hidden", "true");
//       scrollerInner.appendChild(clone);
//     });

//     scroller.setAttribute("data-animated", "true");
//   }, []);

//   return (
//     <div
//       ref={scrollerRef}
//       className={clsx(
//         "scroller",
//         "overflow-hidden max-w-[600px]",
//         "mask-gradient"
//       )}
//       data-speed="fast"
//       data-direction="left"
//     >
//       <ul className="scroller__inner flex gap-4 whitespace-nowrap animate-scroll">
//         {tags.map((tag, index) => (
//           <li key={index} className="bg-gray-200 px-4 py-2 rounded whitespace-nowrap">
//             {tag}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


// components/InfiniteLogoSlider.tsx
'use client';

import React from 'react';
import Image from 'next/image';

const logos = [
    { id: 1, src: "/assets/owner-Logo.png" },
    { id: 2, src: "/assets/owner-Logo.png" },
    { id: 3, src: "/assets/owner-Logo.png" },
    { id: 4, src: "/assets/owner-Logo.png" },
    { id: 5, src: "/assets/owner-Logo.png" },
    { id: 6, src: "/assets/owner-Logo.png" },
    { id: 7, src: "/assets/owner-Logo.png" },
    { id: 8, src: "/assets/owner-Logo.png" },
 
    { id: 9, src: "/assets/owner-Logo.png" }
  ]

export default function InfiniteSlider() {
  const duplicatedLogos = [...logos, ...logos]; 
  const slideWidth = 77; // px
  const totalWidth = duplicatedLogos.length * slideWidth;
  const animationDuration = `${logos.length * 2}s`; // e.g., 7 * 4 = 28s

  return (
    <div className="slider relative mx-auto w-full  overflow-hidden ">
 

      {/* Dynamic scroll animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-${logos.length * slideWidth}px); }
          }
        `}
      </style>

      <div
        className="slide-track flex   "
        style={{
          width: `${totalWidth}px`,
          animation: `scroll ${animationDuration} linear infinite`,
        }}
      >
        {duplicatedLogos.map((logo:any,index:number) => (
          <div
            key={index}
            className="lg:min-w-[77px] sm:min-w-[68px] min-w-[60px] relative aspect-[77/34] xl:mx-[46px] lg:mx-[32px] sm:mx-[21px] mx-[12px]"
          >
           <Image
                src={logo.src}
                alt=""
                className="object-contain"
                fill
              />
          </div>
        ))}
      </div>
    </div>
  );
}
