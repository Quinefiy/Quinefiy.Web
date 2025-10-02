"use client";

import CaseStudies from "@/components/CaseStudies";
import HeadingCard from "@/components/HeadingCard";
import AnimatedLogo from "@/components/Loader";
import StartYourJourney from "@/components/StartYourJourney";
import { useHasLoadedBefore } from "@/hooks/useHasLoadedBefore";
import { getCaseStudiesPageData } from "@/utils/fetchData";
import { initScrollAnimations } from "@/utils/scrollAnimations";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export default function CaseStudiesPageContent() {
    const { data, isLoading, isFetched } = useQuery({ queryKey: ["cases-studies-page-content"], queryFn: getCaseStudiesPageData });
    const hasLoadedBefore = useHasLoadedBefore();

    useEffect(() => {
        if (!isLoading && isFetched) {
            if (!hasLoadedBefore) {
                console.log("dfdacscaa")
                initScrollAnimations(false); 
            } else {
                initScrollAnimations(true);
            }
        }
    }, [isLoading, isFetched, hasLoadedBefore]);

    if (!isFetched || isLoading) {
        return <AnimatedLogo />;
    }

    return (
        <div className=" w-full flex justify-center 2xl:px-[96px] xl:px-[52px] lg:px-[36px] md:px-[21px] sm:px-[19px] px-[16px] relative">
            <div className="bg-[url(/assets/case-study-bg.svg)] w-full bg-no-repeat bg-center absolute top-[0px] left-[0px] right-[0px] bottom-[-20%] opacity-20"></div>
            <div className="absolute h-[50vh] w-full top-[-200px] left-0 right-0 z-[-1] blue-light opacity-50"></div>
            <div className="w-full max-w-[1535px] flex flex-col xl:gap-[150px] md:gap-[120px] sm:gap-[80px] gap-[40px] items-center">
                <div className=" flex flex-col items-center lg:w-auto w-full lg:gap-[24px] md:gap-[22px] gap-[20px] 2xl:mt-[200px] xl:mt-[170px] md:mt-[150px] mt-[140px] ">
                    <div data-delay='0.4' className="opacity-0 animate-down-on-scroll"><HeadingCard text="Case Studies" /></div>
                    <h1 data-delay='0.2' className="opacity-0 animate-down-on-scroll text-[#E1E1E1] 2xl:text-[48px] xl:text-[42px] lg:text-[36px] md:text-[30px] sm:text-[24px] text-[20px] font-bold leading-[140%]">{data?.caseStudies.heading}</h1>
                    <p data-delay='0' className="opacity-0 animate-down-on-scroll text-[#FFFFFFD9] xl:text-[18px] lg:text-[17px] md:text-[16px] sm:text-[15px] text-[14px] font-medium leading-[160%] lg:max-w-[800px] sm:max-w-[85%] text-center">{data?.caseStudies.subHeading}</p>
                </div>
                <CaseStudies data={data?.caseStudies} showHeader={false} />
                <StartYourJourney btn={data?.startYourJourney.button.text} heading={data?.startYourJourney.heading} />
            </div>
        </div>);
}