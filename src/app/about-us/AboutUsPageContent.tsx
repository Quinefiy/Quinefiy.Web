"use client";

import HeadingCard from "@/components/HeadingCard";
import StartYourJourney from "@/components/StartYourJourney";
import Image from "next/image";
import { useEffect } from "react";
import { initScrollAnimations } from "@/utils/scrollAnimations";
import { useQuery } from "@tanstack/react-query";
import { motion } from "motion/react";
import { useHasLoadedBefore } from "@/hooks/useHasLoadedBefore";
import { getAboutUsPageData } from "@/utils/fetchData";
import AnimatedLogo from "@/components/Loader";

export default function AboutUsPageContent() {
    const { data, isLoading, isFetched } = useQuery({ queryKey: ["about-us-page-data"], queryFn: getAboutUsPageData, staleTime: 1000 * 60 * 60, })
    const hasLoadedBefore = useHasLoadedBefore();

    useEffect(() => {
        if (!isLoading && isFetched) {
            if (!hasLoadedBefore) {
                console.log("dfdacscaa")
                initScrollAnimations(false); // very first time
            } else {
                initScrollAnimations(true); // subsequent times
            }
        }
    }, [isLoading, isFetched, hasLoadedBefore]);

    if (!isFetched || isLoading) {
        return <AnimatedLogo />;
    }

    return (
        <div className=" w-full flex justify-center 2xl:px-[96px] xl:px-[52px] lg:px-[36px] md:px-[21px] sm:px-[19px] px-[16px] overflow-x-clip relative">
            <div className="absolute h-[50vh] w-full sm:top-[-3%] top-[-4%] left-0 right-0 z-[-1] blue-light opacity-50"></div>
            <div className="w-full max-w-[1535px] flex flex-col xl:gap-[150px] md:gap-[120px] sm:gap-[80px] gap-[68px] items-center ">
                <div className=" flex flex-col items-center lg:w-auto !w-full lg:gap-[24px] md:gap-[22px] gap-[20px] 2xl:mt-[200px] xl:mt-[170px] md:mt-[150px] mt-[140px]">
                    <div data-delay='0.4' className="opacity-0 animate-down-on-scroll">
                        <HeadingCard text="About Us" />
                    </div>
                    <h1 data-delay='0.2' className="opacity-0 animate-down-on-scroll text-[#E1E1E1] 2xl:text-[32px] 2xl:tracking-[3.2px] xl:text-[28px] xl:tracking-[2.8px] lg:text-[26px] lg:tracking-[2.6px] md:text-[24px] md:tracking-[2.4px] sm:text-[22px] sm:tracking-[2.2px] text-[18px] tracking-[1.8px] font-bold leading-[140%] max-w-[767px] text-center">{data?.AboutUsHero.heading}</h1>
                    <p data-delay='0' className="opacity-0 animate-down-on-scroll text-[#FFFFFFD9] tracking-[1.8px] xl:text-[18px] lg:text-[17px] md:text-[16px] sm:text-[15px] text-[14px] font-medium leading-[160%] lg:max-w-[800px] sm:max-w-[85%] text-center">{data?.AboutUsHero.subHeading}</p>
                    <div className="opacity-0 animate-up-on-scroll bg-dust backdrop-blur-3xl w-full 2xl:mt-[50px] xl:mt-[40px] lg:mt-[32px] md:mt-[25px] sm:mt-[20px] mt-[12px] rounded-[16px] sm:p-[24px] p-[16px] border border-[#6BAAFF4D] relative overflow-hidden">
                        <div className="absolute inset-0 backdrop-blur-[1px] bg-[#002C6726]"></div>
                        <div className="relative w-full aspect-[2/1]">
                            <Image
                                src={data?.AboutUsHero.img.url}
                                fill
                                alt={data?.AboutUsHero.img.alternativeText || ""}
                                className="rounded-[16px]"
                                sizes="100vw"
                            />
                        </div>
                    </div>
                </div>
                <div className="max-w-[1369px] flex lg:flex-row flex-col gap-[34px] items-start justify-between w-full relative ">
                    <div className="hero-light absolute lg:w-[470px] lg:h-[350px] sm:w-[400px] w-[330px] sm:h-[300px] h-[220px] lg:left-[-150px] sm:left-[-100px] left-[-70px] opacity-80 sm:top-[-120px] top-[-50px] z-[-1]"></div>
                    <div className="opacity-0 animate-left-on-scroll lg:w-[45%] w-full max-w-[500px] flex flex-col xl:gap-[48px] lg:gap-[44px] md:gap-[40px] sm:gap-[36px] gap-[32px]">
                        <h2 className="text-[#E1E1E1] 2xl:text-[32px] 2xl:tracking-[3.2px] xl:text-[28px] xl:tracking-[2.8px] lg:text-[26px] lg:tracking-[2.6px] md:text-[24px] md:tracking-[2.4px] sm:text-[22px] sm:tracking-[2.2px] text-[18px] tracking-[1.8px] font-bold leading-[140%] sm:max-w-[560px] max-w-[380px]">{data?.manageBusiness.heading}</h2>
                        <div className="flex items-center gap-[16px]">
                            <div className="xl:w-[59px] xl:h-[59px] lg:w-[56px] lg:h-[56px] md:w-[52px] md:h-[52px] sm:w-[48px] sm:h-[48px] w-[45px] h-[45px] border-[0.7px] border-[#6BAAFFB2] rounded-full relative backdrop-blur-lg aspect-[1/1]">
                                <Image fill alt={data?.manageBusiness?.ceo.img.alternativeText || "ceo"} src={data?.manageBusiness?.ceo.img.url} className="rounded-full object-center" sizes="(max-width: 640px) 48px, (max-width: 768px) 52px, (max-width: 1024px) 56px, (max-width: 1280px) 59px, 45px" />
                            </div>
                            <div className="sm:gap-[4px] flex flex-col justify-between">
                                <h4 className="text-[#FFFFFF] xl:text-[18px] xl:tracking-[1.8px] lg:text-[17px] lg:tracking-[1.7px] md:text-[16px] md:tracking-[1.6px] sm:text-[15px] sm:tracking-[1.5px] text-[14px] tracking-[1.4px] font-bold leading-[160%]">{data?.manageBusiness?.ceo.name}</h4>
                                <p className="text-[#FFFFFFBF] xl:text-[16px] xl:tracking-[1.6px] md:text-[15px] md:tracking-[1.5px] text-[14px] tracking-[1.4px] font-normal leading-[160%]">{data?.manageBusiness?.ceo.jobTitle}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 self-center flex flex-col gap-[24px] max-w-[728px]">
                        {data?.manageBusiness?.vision.map((highlight: any, index: number) => (
                            <div key={highlight.id} data-delay={index === 0 ? "0" : "0.3"} className="opacity-0 animate-right-on-scroll bg-dust rounded-[16px] 2xl:p-[48px] xl:p-[44px] lg:p-[40px] md:p-[38px] sm:p-[34px] p-[32px] border border-[#6BAAFF4D] w-full relative overflow-hidden">
                                <div className="absolute inset-0 backdrop-blur-[1px] bg-[#002C6726] "></div>
                                <p className="text-[#FFFFFFD9] 2xl:text-[24px] 2xl:tracking-[2.4px] xl:text-[22px] xl:tracking-[2.2px] lg:text-[20px] lg:tracking-[2px] md:text-[19px] md:tracking-[1.9px] sm:text-[17px] sm:tracking-[1.7px] text-[15px] tracking-[1.5px] font-medium leading-[160%] relative">{highlight.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className=" max-w-[1369px] flex flex-col items-center lg:w-auto !w-full lg:gap-[24px] md:gap-[22px] gap-[20px]">
                    <div data-delay='0.4' className="opacity-0 animate-down-on-scroll">
                        <HeadingCard text="Our Team" />
                    </div>
                    <h2 data-delay='0.2' className="opacity-0 animate-down-on-scroll text-[#E1E1E1] 2xl:text-[32px] 2xl:tracking-[3.2px] xl:text-[28px] xl:tracking-[2.8px] lg:text-[26px] lg:tracking-[2.6px] md:text-[24px] md:tracking-[2.4px] sm:text-[22px] sm:tracking-[2.2px] text-[18px] tracking-[1.8px] font-bold leading-[140%] max-w-[767px] text-center">{data?.team.heading}</h2>
                    <p data-delay='0' className="opacity-0 animate-down-on-scroll text-[#FFFFFFD9] tracking-[1.8px] xl:text-[18px] lg:text-[17px] md:text-[16px] sm:text-[15px] text-[14px] font-medium leading-[160%] lg:max-w-[850px] sm:max-w-[83%] text-center">{data?.team.subHeading}</p>
                    <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[24px] xl:mt-[40px] lg:mt-[34px] md:mt-[28px] sm:mt-[20px] mt-[12px]">
                        {data?.team?.teamMemebers.map((member: any, index: number) => (
                            <div data-delay={index * 0.3} className="opacity-0 animate-up-on-scroll max-w-[324px] mx-auto w-full flex flex-col gap-[24px]" key={member.id}>
                                <div className="w-full border-[0.7px] border-[#6BAAFFB2] rounded-[16px] relative backdrop-blur-lg aspect-[324/369] overflow-hidden">
                                    <Image fill alt={member.photo.alternativeText ? member.photo.alternativeText : "member"} src={member.photo.url} className="" sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" />
                                </div>
                                <div className="sm:gap-[4px] flex flex-col justify-between">
                                    <h4 className="text-[#FFFFFF] xl:text-[18px] xl:tracking-[1.8px] lg:text-[17px] lg:tracking-[1.7px] md:text-[16px] md:tracking-[1.6px] sm:text-[15px] sm:tracking-[1.5px] text-[14px] tracking-[1.4px] font-bold leading-[160%]">{member.fullName}</h4>
                                    <p className="text-[#FFFFFFBF] xl:text-[16px] xl:tracking-[1.6px] md:text-[15px] md:tracking-[1.5px] text-[14px] tracking-[1.4px] font-normal leading-[160%]">{member.jobTitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col items-center 2xl:gap-[64px] xl:gap-[58px] lg:gap-[52px] md:gap-[46px] sm:[40px] gap-[32px] w-full relative">
                    <h2 className="opacity-0 animate-down-on-scroll text-[#E1E1E1] 2xl:text-[32px] 2xl:tracking-[3.2px] xl:text-[28px] xl:tracking-[2.8px] lg:text-[26px] lg:tracking-[2.6px] md:text-[24px] md:tracking-[2.4px] sm:text-[22px] sm:tracking-[2.2px] text-[18px] tracking-[1.8px] font-bold leading-[140%] max-w-[767px] text-center">{data?.ourUsers.heading}</h2>
                    <div className="flex lg:flex-row flex-col gap-[24px]">
                        {data?.ourUsers?.usersQuotes.map((quote: any, index: number) => (
                            <div className={`opacity-0 ${index === 0 ? "animate-left-on-scroll" : "animate-right-on-scroll"} flex-1 border border-[#6BAAFF4D] p-[32px] rounded-[16px] flex flex-col justify-between !min-h-[303px] gap-[32px] `} key={quote.id}>
                                <p className="text-[#FFFFFF] xl:tracking-[1.8px] xl:text-[18px] lg:tracking-[1.7px] lg:text-[17px] md:tracking-[1.6px] md:text-[16px] sm:tracking-[1.5px] sm:text-[15px] tracking-[1.4px] text-[14px] font-bold leading-[160%] ">{quote.quote}</p>
                                <div className="flex items-center gap-[16px]">
                                    <div className="xl:w-[59px] xl:h-[59px] bg-white lg:w-[56px] lg:h-[56px] md:w-[52px] md:h-[52px] sm:w-[48px] sm:h-[48px] w-[45px] h-[45px] border-[0.7px] border-[#6BAAFFB2] rounded-full relative backdrop-blur-lg aspect-[1/1]">
                                        <Image fill alt={quote.Photo.alternativeText ? quote.Photo.alternativeText : "user"} src={quote.Photo.url} className="rounded-full object-cover " sizes="(max-width: 640px) 48px, (max-width: 768px) 52px, (max-width: 1024px) 56px, (max-width: 1280px) 59px, 45px" />
                                    </div>
                                    <div className="sm:gap-[4px] flex flex-col justify-between">
                                        <h4 className="text-[#FFFFFF] xl:text-[18px] xl:tracking-[1.8px] lg:text-[17px] lg:tracking-[1.7px] md:text-[16px] md:tracking-[1.6px] sm:text-[15px] sm:tracking-[1.5px] text-[14px] tracking-[1.4px] font-bold leading-[160%]">{quote.fullName}</h4>
                                        <p className="text-[#FFFFFFBF] xl:text-[16px] xl:tracking-[1.6px] md:text-[15px] md:tracking-[1.5px] text-[14px] tracking-[1.4px] font-normal leading-[160%]">{quote.jobTitle}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <motion.div
                        animate={{ x: [0, -350, 0] }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                        }} className="hero-light absolute w-[400px] h-[400px] top-[0px] opacity-85 inset-x-1/2 z-[-1] lg:flex hidden"></motion.div>
                    <motion.div
                        animate={{ y: [0, -300, 0] }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                        }} className="hero-light absolute sm:w-[400px] sm:h-[400px] w-[300px] h-[300px] inset-y-1/2 opacity-85  z-[-1] lg:hidden flex"></motion.div>
                </div>
                <StartYourJourney btn={data?.startYourJourney.button.text} heading={data?.startYourJourney.heading} />
            </div>
        </div>);
}

