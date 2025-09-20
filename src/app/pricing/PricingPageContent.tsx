"use client"
import HeadingCard from "@/components/HeadingCard";
import Pricing from "@/components/Pricing";
import StartYourJourney from "@/components/StartYourJourney";
import PageWithLoader from "@/components/ui/PageWithLoader";
import { useHasLoadedBefore } from "@/hooks/useHasLoadedBefore";
import { getPricingPlans } from "@/utils/fetchData";
import { initScrollAnimations } from "@/utils/scrollAnimations";
import { useIsFetching, useQuery } from "@tanstack/react-query";
import { motion } from "motion/react";
import { useEffect} from "react";


export default function PricingPageContent() {
    const { data: pricingPlans, isLoading: loadingPricing } = useQuery({ queryKey: ["pricing-palns"], queryFn: getPricingPlans });
    const isLoading = loadingPricing;
    const isFetching = useIsFetching();
    const hasLoadedBefore = useHasLoadedBefore();

    useEffect(() => {
        if (!isLoading && isFetching === 0) {
            if (!hasLoadedBefore) {
                initScrollAnimations(false);
            } else {
                initScrollAnimations(true);
            }
        }
    }, [isLoading, isFetching, hasLoadedBefore]);

    const content = (
        <div className=" !w-full flex flex-col xl:gap-[150px] md:gap-[120px] sm:gap-[80px] gap-[40px] items-center 2xl:px-[96px] xl:px-[52px] lg:px-[36px] md:px-[21px] sm:px-[19px] px-[16px] relative overflow-x-clip">
            <div className=" absolute top-[0px] left-0 right-0 h-[100vh] bg-[url(/assets/pricing-background.svg)]  bg-cover bg-no-repeat lg:bg-right bg-center z-[-1] opacity-25"></div>
            <div className=" flex flex-col items-center lg:w-auto w-full lg:gap-[24px] md:gap-[22px] gap-[20px] 2xl:mt-[200px] xl:mt-[170px] md:mt-[150px] mt-[140px]">
                <div data-delay='0.4' className="opacity-0 animate-down-on-scroll"><HeadingCard text="Pricing" /></div>
                <h1 data-delay='0.2' className="opacity-0 animate-down-on-scroll text-[#E1E1E1] 2xl:text-[48px] xl:text-[42px] lg:text-[36px] md:text-[30px] sm:text-[24px] text-[20px] font-bold leading-[140%]">Pricing Plans</h1>
                <p data-delay='0' className="opacity-0 animate-down-on-scroll text-[#FFFFFFD9] xl:text-[18px] lg:text-[17px] md:text-[16px] sm:text-[15px] text-[14px] font-medium leading-[160%] lg:max-w-[722px] sm:max-w-[80%] text-center">Pricing and plans are designed to offer flexibility and value, catering to businesses of all sizes and needs.</p>
            </div>
            <div className="!w-full flex flex-col xl:gap-[150px] md:gap-[120px] sm:gap-[80px] gap-[40px] items-center relative max-w-[1535px] ">
                <motion.div
                    animate={{ y: [0, 300, 0] }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    }} className="lightBlue-light absolute w-[450px] h-[450px] left-[-100px] opacity-75 inset-y-1/3 z-[-1]"></motion.div>
                <Pricing data={pricingPlans} showHeader={false} />
                <StartYourJourney />
            </div>
        </div>
    );

    if (hasLoadedBefore) {
        return content;
    }

    return <PageWithLoader isLoading={isLoading}>{content}</PageWithLoader>;
}