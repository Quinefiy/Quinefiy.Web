 
'use client';

import React from 'react';
import Image from 'next/image';

 
type Props = {
    data: any;
}
export default function InfiniteSlider({data}: Props) {
  const duplicatedLogos = [...data?.logos,...data?.logos,...data?.logos,...data?.logos,...data?.logos]; 
  const slideWidth = 77; // px
  const totalWidth = duplicatedLogos.length * slideWidth;
  const animationDuration = `${8 * 2}s`; // e.g., 7 * 4 = 28s
   console.log("im",data)

  return (
    <div className="slider relative mx-auto w-full  overflow-hidden ">
 

      {/* Dynamic scroll animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-${8 * slideWidth}px); }
          }
        `}
      </style>

      <div
        className="slide-track flex   justify-center"
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
                src={logo.url}
                alt={logo.altrernativeText}
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
