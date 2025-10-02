"use client";

import HeadingCard from "@/components/HeadingCard";
import SoftwareProduct from "@/components/SoftwareProduct";
import StartYourJourney from "@/components/StartYourJourney";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { initScrollAnimations } from "@/utils/scrollAnimations";
import { useQuery } from "@tanstack/react-query";
import { useHasLoadedBefore } from "@/hooks/useHasLoadedBefore";
import { getServicesPageData } from "@/utils/fetchData";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import AnimatedLogo from "@/components/Loader";

export default function ServicesPageContent() {
    const { data, isLoading, isFetched } = useQuery({ queryKey: ["services-page-content"], queryFn: getServicesPageData });
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
        <div className=" w-full flex justify-center 2xl:px-[96px] xl:px-[52px] lg:px-[36px] md:px-[21px] sm:px-[19px] px-[16px] relative">
            <div className="absolute h-[50vh] w-full top-[-2%] left-0 right-0 z-[-1] blue-light opacity-30"></div>
            <div className="w-full max-w-[1535px] flex flex-col xl:gap-[150px] md:gap-[140px] sm:gap-[100px] gap-[65px] items-center">
                <div className=" relative flex flex-col items-center lg:w-auto !w-full lg:gap-[24px] md:gap-[22px] gap-[20px] 2xl:mt-[200px] xl:mt-[170px] md:mt-[150px] mt-[140px]">
                    <div className="absolute inset-0 bottom-[-350px] top-[-100px] bg-[url(/assets/freepik__adjust__5124.png)] bg-cover bg-center bg-no-repeat opacity-3 z-[-1]"></div>
                    <div data-delay='0.6' className="opacity-0 animate-down-on-scroll"><HeadingCard text="Our Services" /></div>
                    <h1 data-delay='0.4' className="opacity-0 animate-down-on-scroll text-[#E1E1E1] 2xl:text-[32px] 2xl:tracking-[3.2px] xl:text-[28px] xl:tracking-[2.8px] lg:text-[26px] lg:tracking-[2.6px] md:text-[24px] md:tracking-[2.4px] sm:text-[22px] sm:tracking-[2.2px] text-[18px] tracking-[1.8px] font-bold leading-[140%] max-w-[767px] text-center">{data?.servicesHero.heading}</h1>
                    <p data-delay='0.2' className="opacity-0 animate-down-on-scroll text-[#FFFFFFD9] tracking-[1.8px] xl:text-[18px] lg:text-[17px] md:text-[16px] sm:text-[15px] text-[14px] font-medium leading-[160%] lg:max-w-[890px] sm:max-w-[85%] text-center">{data?.servicesHero.subheading}</p>
                    <Link data-delay='0' href="/contact-us" className="opacity-0 animate-down-on-scroll contactBtnGradient p-[1px]  rounded-[12px] sm:mt-[24px] mt-[8px]  glow-on-hover relative">
                        <div className=" px-[32px] py-[16px] bg-[#01070F] rounded-[12px] font-bold text-[#FFFF] leading-[100%] xl:text-[22px] md:text-[18px] text-[14px]">{data?.servicesHero.btn}</div>
                    </Link>
                </div>
                <SoftwareProduct data={data?.softwareProducts} showHeader={false} />
                <div className="flex  flex-col items-center w-full xl:gap-[100px] md:gap-[70px] gap-[48px] justify-center relative">
                    <div className="hero-light absolute lg:w-[550px] lg:h-[550px] w-[400px] h-[400px] lg:right-1/3 right-0  opacity-75 lg:inset-y-1/3 inset-y-1/2 z-[-1] "></div>
                    {data?.services.map((service: any, index: number) => (
                        <div className={`${index % 2 === 0 ? "lg:flex-row-reverse flex-col-reverse" : "lg:flex-row flex-col-reverse"} flex  2xl:gap-[74px] xl:gap-[62px] lg:gap-[56px] md:gap-[48px] sm:gap-[40px] gap-[32px] items-start w-full`} key={service.id}>
                            <div className={`${index % 2 === 0 ? "opacity-0 animate-right-on-scroll" : "opacity-0 animate-left-on-scroll"} flex-1 lg:w-auto w-full self-center lg:max-w-[566px] max-w-[450px] border border-[#6BAAFF4D] p-[24px] rounded-[16px]`}>
                                <div className="w-full relative aspect-[566/488]">
                                    <Image src={service.img.url} fill alt={service.img.alternativeText} className="rounded-[16px]  " sizes="" />
                                </div>
                            </div>
                            <div className={`${index % 2 === 0 ? "opacity-0 animate-left-on-scroll" : "opacity-0 animate-right-on-scroll"} flex-1 flex flex-col gap-[24px] lg:min-w-[500px]`}>
                                <h1 className="text-[#E1E1E1] 2xl:text-[36px] xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[20px] text-[18px] font-bold leading-[160%]">{service.title}</h1>
                                <div className="flex items-start gap-[11.5px]">
                                    <Image width={21} height={21} alt="" src="/assets/blue-star.svg" />
                                    <div className="flex flex-col gap-[12px]">
                                        <p className="text-[#FFFFFF] xl:tracking-[1.8px] xl:text-[18px] lg:tracking-[1.7px] lg:text-[17px] md:tracking-[1.6px] md:text-[16px] sm:tracking-[1.5px] sm:text-[15px] tracking-[1.4px] text-[14px] font-bold leading-[160%]">{service.detailsSection.title}</p>
                                        <ul className="text-[#FFFFFF] space-y-[8px] xl:tracking-[1.8px] xl:text-[18px] lg:tracking-[1.7px] lg:text-[17px] md:tracking-[1.6px] md:text-[16px] sm:tracking-[1.5px] sm:text-[15px] tracking-[1.4px] text-[14px] font-medium leading-[160%] pl-[18px] !list-disc list-inside">
                                            <BlocksRenderer
                                                content={service.detailsSection.content}
                                                blocks={{
                                                    list: ({ children, format }) => {
                                                        const Tag = format === "ordered" ? "ol" : "ul";
                                                        return <Tag className="list-disc">{children}</Tag>;
                                                    },
                                                    "list-item": ({ children }) => <li>{children}</li>,
                                                }}
                                            />
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <StartYourJourney btn={data?.startYourJourney.button.text} heading={data?.startYourJourney.heading} />
            </div>
        </div>
    );
}

