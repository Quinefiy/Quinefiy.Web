"use client";

import SoftwareProduct from "@/components/SoftwareProduct";
import OurServices from "@/components/OurServices";
import Pricing from "@/components/Pricing";
import CaseStudies from "@/components/CaseStudies";
import StartYourJourney from "@/components/StartYourJourney";
import InfiniteSlider from "@/components/InfiniteLogoCarousel";
import { initScrollAnimations } from "@/utils/scrollAnimations";
import { useEffect } from "react";
import Hero from "@/components/Hero";
import { useQuery } from "@tanstack/react-query";
import { useHasLoadedBefore } from "@/hooks/useHasLoadedBefore";
import { getHomePageData } from "@/utils/fetchData";
import AnimatedLogo from "@/components/Loader";
import Image from "next/image";

export default function HomePageContent() {

  const { data, isLoading, isFetched } = useQuery({ queryKey: ['home-page-content'], queryFn: getHomePageData, staleTime: 1000 * 60 * 60, })

  const hasLoadedBefore = useHasLoadedBefore();

  useEffect(() => {
    if (!isLoading && isFetched) {
      if (!hasLoadedBefore) {
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
    <div className="w-full flex flex-col xl:gap-[150px] md:gap-[120px] gap-[80px] items-center 2xl:px-[96px] xl:px-[52px] lg:px-[36px] md:px-[21px] sm:px-[19px] px-[16px] ">
      <Hero data={data?.hero} />
      <SoftwareProduct data={data?.softwareProducts} showHeader={true} />
      <div className="w-full lg:max-w-[1135px] sm:max-w-[830px]  max-w-[480px] sm:py-[30px] py-[10px] flex flex-col items-center 2xl:gap-[60px] xl:gap-[50px] lg:gap-[40px] md:gap-[32px] sm:gap-[24px] gap-[16px] relative  my-[50px]">
        {/* <img src="/assets/Vector 3.svg" className="absolute xl:left-[-210px] sm:left-[-170px] left-[-150px] xl:bottom-[-108%] lg:bottom-[-128%] md:bottom-[-120%] sm:bottom-[-130px] bottom-[-130%] opacity-50 w-[50%] sm:min-w-auto min-w-[230px] max-w-[450px]" /> */}
        <Image src="/assets/Vector 3.svg" alt="decorative shape" fill={false} width={450} height={450} className="absolute xl:left-[-210px] sm:left-[-170px] left-[-150px] xl:bottom-[-108%] lg:bottom-[-128%] md:bottom-[-120%] sm:bottom-[-130px] bottom-[-130%] opacity-50 w-[50%] sm:min-w-auto min-w-[230px] max-w-[450px]" />
        <Image src="/assets/Vector 4.svg" alt="decorative shape" fill={false} width={450} height={450} className="absolute xl:right-[-210px] sm:right-[-170px] right-[-150px] xl:top-[-70%] lg:top-[-93%] md:top-[-90%] top-[-85%] opacity-50 w-[50%] sm:min-w-auto min-w-[230px] max-w-[450px] " />
        {/* <img src="/assets/Vector 4.svg" className="absolute xl:right-[-210px] sm:right-[-170px] right-[-150px] xl:top-[-70%] lg:top-[-93%] md:top-[-90%] top-[-85%] opacity-50 w-[50%] sm:min-w-auto min-w-[230px] max-w-[450px] " /> */}
        <h3 className="text-[#999999] font-semibold xl:text-[18px] md:text-[17px] sm:text-[15px] text-[13px] text-center">
          Trusted by 10,000+ founders & business owners
        </h3>
        <InfiniteSlider data={data?.partners} />
      </div>
      <OurServices data={data?.ourServices} />
      <Pricing data={data?.pricing} showHeader={true} />
      <div className="w-full relative">

        {/* <div className="bg-[url(/assets/contact-us-bg.svg)] z-[-1] w-full bg-no-repeat  lg:bg-cover bg-contain bg-center absolute inset-0 md:opacity-60 opacity-40"></div>  */}
        <CaseStudies data={data?.ourCaseStudies} showHeader={true} />
      </div>
      <StartYourJourney btn={data?.startYourJourney.button.text} heading={data?.startYourJourney.heading} />
    </div>);
}
