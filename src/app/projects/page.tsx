'use client';

import HeadingCard from "@/components/HeadingCard";
import StartYourJourney from "@/components/StartYourJourney";
import Image from "next/image";
// import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { initScrollAnimations } from "@/utils/scrollAnimations";
import { useEffect } from "react";



export default function Projects() {
    useEffect(() => {
        initScrollAnimations();
      },[])

    const products = [
        {
            id: 1,
            img: "/assets/owner-Logo.png",
            title: "Project title",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident"
        },
        {
            id: 2,
            img: "/assets/owner-Logo.png",
            title: "Project title",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident"
        },
        {
            id: 3,
            img: "/assets/owner-Logo.png",
            title: "Project title",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident"
        },
        {
            id: 4,
            img: "/assets/owner-Logo.png",
            title: "Project title",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident"
        }

    ];

    return (
        <div className=" w-full flex justify-center 2xl:px-[96px] xl:px-[52px] lg:px-[36px] md:px-[21px] sm:px-[19px] px-[16px] relative">
            <div className="absolute h-[50vh] w-full top-[-3%] left-0 right-0 z-[-1] blue-light opacity-70"></div>
            <div className="w-full max-w-[1535px] flex flex-col xl:gap-[150px] md:gap-[120px] sm:gap-[80px] gap-[68px] items-center">
                <div className=" flex flex-col items-center lg:w-auto !w-full lg:gap-[24px] md:gap-[22px] gap-[20px] 2xl:mt-[200px] xl:mt-[170px] md:mt-[150px] mt-[140px]">
                    <div data-delay='0.4' className="opacity-0 animate-down-on-scroll"><HeadingCard text="Our Projects" /></div>
                    <h1 data-delay='0.2' className="opacity-0 animate-down-on-scroll text-[#E1E1E1] 2xl:text-[32px] 2xl:tracking-[3.2px] xl:text-[28px] xl:tracking-[2.8px] lg:text-[26px] lg:tracking-[2.6px] md:text-[24px] md:tracking-[2.4px] sm:text-[22px] sm:tracking-[2.2px] text-[18px] tracking-[1.8px] font-bold leading-[140%] max-w-[767px] text-center">Take a look at our projects</h1>
                    <p data-delay='0' className="opacity-0 animate-down-on-scroll text-[#FFFFFFD9] tracking-[1.8px] xl:text-[18px] lg:text-[17px] md:text-[16px] sm:text-[15px] text-[14px] font-medium leading-[160%] lg:max-w-[890px] sm:max-w-[85%] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="opacity-0 animate-up-on-scroll flex  flex-col items-center w-full xl:gap-[100px] md:gap-[70px] gap-[48px] justify-center relative">
                    <div className="blue-light absolute lg:w-[550px] lg:h-[550px] sm:w-[480px] sm:h-[480px] w-[400px] h-[400px]  lg:left-[-200px] sm:left-[-170px] left-[-150px] top-[60%] sm:opacity-75 opacity-55  z-[-1] "></div>
                    <div className="w-full">
                        <Carousel >
                            <CarouselPrevious />
                            <CarouselNext />
                            <CarouselContent className="">
                                {products.map((service: any) => (
                                    <CarouselItem className="md:basis-1/2 xl:min-w-[73%] lg:min-w-[80%] md:min-w-[85%] w-full " key={service.id}>
                                        <div className=" sm:w-full sm:max-w-full max-w-[385px] w-[77%] sm:mx-0 mx-auto flex sm:flex-row flex-col border border-[#6BAAFF4D] rounded-[16px] overflow-hidden">
                                            <div className="sm:w-[54%] w-full lg:p-[32px] sm:p-[24px] p-[16px] sm:gap-[32px] gap-[20px] !min-h-full flex flex-col justify-between">
                                                <img className="w-[77px]" src="/assets/owner-Logo.png" />
                                                <div>
                                                    <h4 className="font-bold text-[#E1E1E1] leading-[140%] lg:text-[18px] text-[16px] sm:mb-[16px] mb-[10px]">Project title</h4>
                                                    <p className="font-medium text-[#FFFFFFB2] leading-[160%] 2xl:text-[16px] 2xl:tracking-[1.6px] lg:text-[15px] lg:tracking-[1.5px] sm:tracking-[1.4px] sm:text-[14px] text-[13px] tracking-normal  xl:line-clamp-8 lg:line-clamp-7 sm:line-clamp-6 line-clamp-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                                                </div>
                                            </div>
                                            <div className="sm:w-[46%]  max-w-[518px]  relative sm:aspect-[518/476] aspect-[260/170] ">
                                                <Image fill alt="" src="/assets/service.jpg" />
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>

                    </div>
                </div>
                <StartYourJourney />
            </div>
        </div>
    );
}

