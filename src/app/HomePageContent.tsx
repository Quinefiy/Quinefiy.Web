"use client"

import SoftwareProduct from "@/components/SoftwareProduct";
import OurServices from "@/components/OurServices";
import Pricing from "@/components/Pricing";
import CaseStudies from "@/components/CaseStudies";
import StartYourJourney from "@/components/StartYourJourney";
import InfiniteSlider from "@/components/InfiniteLogoCarousel";
import { initScrollAnimations } from "@/utils/scrollAnimations";
import { useEffect } from "react";
import Hero from "@/components/Hero";
import { useIsFetching, useQuery } from "@tanstack/react-query";
import { fetchServices, getCaseStudies, getHeroSectionData, getPricingPlans, getProducts } from "@/utils/fetchData";
import PageWithLoader from "@/components/ui/PageWithLoader";

export default function HomePageContent() {
  const { data: services, isLoading: loadingServices } = useQuery({ queryKey: ["services"], queryFn: fetchServices });
  const { data: heroData, isLoading: loadingHeroData } = useQuery({ queryKey: ["hero-data"], queryFn: getHeroSectionData });
  const { data: softwareProducts, isLoading: loadingSoftwareProducts } = useQuery({ queryKey: ["software-products"], queryFn: getProducts })
  const { data: pricingPlans, isLoading: loadingPricing } = useQuery({ queryKey: ["pricing-palns"], queryFn: getPricingPlans });
  const { data: caseStudies, isLoading: loadingCases } = useQuery({ queryKey: ["cases-studies"], queryFn: getCaseStudies });

  const isLoading = loadingServices || loadingHeroData || loadingSoftwareProducts || loadingPricing || loadingCases;
  const isFetching = useIsFetching();

  useEffect(() => {
    if (!isLoading && isFetching === 0) {
      initScrollAnimations();
    }
  }, [isLoading, isFetching]);


  return (
    <PageWithLoader isLoading={isLoading}>
      <div className=" w-full flex flex-col xl:gap-[150px] md:gap-[120px] gap-[80px] items-center 2xl:px-[96px] xl:px-[52px] lg:px-[36px] md:px-[21px] sm:px-[19px] px-[16px] ">
        <Hero data={heroData} />
        <div className="w-full max-w-[1535px] py-[30px] flex flex-col items-center 2xl:gap-[60px] xl:gap-[50px] lg:gap-[40px] md:gap-[32px] sm:gap-[24px] gap-[16px]">
          <h3 className="text-[#999999] font-semibold xl:text-[18px] md:text-[17px] sm:text-[15px] text-[13px]">Trusted by 10,000+ founders & business owners.</h3>
          <InfiniteSlider />
        </div>
        <OurServices data={services} />
        <SoftwareProduct data={softwareProducts} showHeader={true} />
        <Pricing data={pricingPlans} showHeader={true} />
        <CaseStudies data={caseStudies} showHeader={true} />
        <StartYourJourney />
      </div>
    </PageWithLoader>

  );
}
