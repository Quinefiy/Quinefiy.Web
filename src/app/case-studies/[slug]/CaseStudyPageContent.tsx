'use client';

import HeadingCard from '@/components/HeadingCard';
import Image from 'next/image';
import { useEffect } from 'react';
import { initScrollAnimations } from '@/utils/scrollAnimations';
import { useQuery } from '@tanstack/react-query';
import AnimatedLogo from '@/components/Loader';
import { useHasLoadedBefore } from '@/hooks/useHasLoadedBefore';
import { fetchCaseStudyBySlug } from '@/utils/fetchData';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export default function CaseStudyPageContent({ slug }: { slug: string }) {

    const { data, isLoading,isFetched } = useQuery({
        queryKey: ["case-study", slug],
        queryFn: async () => {
            const result = await fetchCaseStudyBySlug(slug);
            console.log("queryFn result:", result);
            return result;
        },
    });

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

    if (!slug || slug.length === 0 || !data || isLoading || !isFetched) {
        return <AnimatedLogo />;
    }


    return (
        <div className=" w-full flex flex-col xl:gap-[150px] md:gap-[120px] sm:gap-[80px] gap-[40px] items-center 2xl:px-[96px] xl:px-[52px] lg:px-[36px] md:px-[21px] sm:px-[19px] px-[16px] relative">
            <div className=" flex flex-col items-center lg:w-auto !w-full lg:gap-[24px] md:gap-[22px] gap-[20px] 2xl:mt-[200px] xl:mt-[170px] md:mt-[150px] mt-[140px]">
                <div data-delay='0.2' className="opacity-0 animate-down-on-scroll"><HeadingCard text="Case Study" /></div>
                <h1 className="opacity-0 animate-down-on-scroll text-[#E1E1E1] 2xl:text-[48px] xl:text-[42px] lg:text-[36px] md:text-[30px] sm:text-[24px] text-[20px] font-bold leading-[140%]">{data?.title}</h1>
                <div className="opacity-0 animate-up-on-scroll relative w-full aspect-[2/1] 2xl:mt-[50px] xl:mt-[40px] lg:mt-[32px] md:mt-[25px] sm:mt-[20px] mt-[12px]">
                    <Image
                        src={data?.caseImage.url}
                        fill
                        alt={data?.caseImage.alternativeText}
                        className=""
                    />
                </div>
            </div>
                <div className="z-[-1] bg-[url(/assets/case-page-Gradient.svg)] w-full bg-no-repeat  absolute top-[0px] left-[0px] right-[0px] bottom-[0px] opacity-18 bg-bottom"></div>
                <div className="z-[-1] pointer-events-none absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-[#01070F] to-transparent"></div>
            <div className='opacity-0 animate-left-on-scroll w-full  relative text-white '>
                <BlocksRenderer
                    content={data?.fullDescription}
                    blocks={{
                        paragraph: ({ children }) => (
                            <p className="text-base leading-relaxed mb-4">{children}</p>
                        ),
                        heading: ({ children, level }) => {
                            if (level === 1) {
                                return <h1 className="text-3xl font-bold mb-4">{children}</h1>;
                            }
                            if (level === 2) {
                                return <h2 className="text-2xl font-semibold mb-3">{children}</h2>;
                            }
                            if (level === 3) {
                                return <h3 className="text-xl font-medium mb-2">{children}</h3>;
                            }
                            return <h4 className="text-lg font-medium mb-2">{children}</h4>;
                        },
                        list: ({ children }) => (
                            <ul className="list-disc list-inside space-y-2">{children}</ul>
                        ),
                        "list-item": ({ children }) => <li>{children}</li>,
                    }}
                />
            </div>
            {/* <StartYourJourney /> */}
        </div>);
}
