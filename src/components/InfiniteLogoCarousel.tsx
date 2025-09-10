 
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
                sizes=''
              />
          </div>
        ))}
      </div>
    </div>
  );
}
