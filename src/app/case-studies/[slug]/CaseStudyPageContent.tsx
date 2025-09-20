'use client';

import HeadingCard from '@/components/HeadingCard';
import StartYourJourney from '@/components/StartYourJourney';
import { useParams} from 'next/navigation';
import Image from 'next/image';
import { useEffect} from 'react';
import { initScrollAnimations } from '@/utils/scrollAnimations';
import { useIsFetching } from '@tanstack/react-query';
import AnimatedLogo from '@/components/Loader';
import PageWithLoader from '@/components/ui/PageWithLoader';
import { useHasLoadedBefore } from '@/hooks/useHasLoadedBefore';


export default function CaseStudyPageContent() {
    const params = useParams();
    const slug = params.slug as string[] | undefined;
    // const { data: caseStudies, isLoading: loadingCases } = useQuery({ queryKey: ["cases-studies"], queryFn: getCaseStudies });
    const isLoading = false;
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


    if (!slug || slug.length === 0) {
        return <AnimatedLogo />;
    }

    // const id = parseInt(slug[slug.length - 1]);

    const content = (
        <div className=" w-full flex flex-col xl:gap-[150px] md:gap-[120px] sm:gap-[80px] gap-[40px] items-center 2xl:px-[96px] xl:px-[52px] lg:px-[36px] md:px-[21px] sm:px-[19px] px-[16px] relative">
            <div className=" flex flex-col items-center lg:w-auto !w-full lg:gap-[24px] md:gap-[22px] gap-[20px] 2xl:mt-[200px] xl:mt-[170px] md:mt-[150px] mt-[140px]">
                <div data-delay='0.2' className="opacity-0 animate-down-on-scroll"><HeadingCard text="Case Study" /></div>
                <h1 className="opacity-0 animate-down-on-scroll text-[#E1E1E1] 2xl:text-[48px] xl:text-[42px] lg:text-[36px] md:text-[30px] sm:text-[24px] text-[20px] font-bold leading-[140%]">Case Study Title</h1>
                <div className="opacity-0 animate-up-on-scroll relative w-full aspect-[2/1] 2xl:mt-[50px] xl:mt-[40px] lg:mt-[32px] md:mt-[25px] sm:mt-[20px] mt-[12px]">
                    <Image
                        src="/assets/Frame 5.png"
                        fill
                        alt=""
                        className=""
                    />
                </div>
            </div>
            <div className='opacity-0 animate-left-on-scroll w-full h-[50vh] relative'>

                <div className="bg-[url(/assets/case-page-Gradient.svg)] w-full bg-no-repeat  absolute top-[0px] left-[0px] right-[0px] bottom-[0px] opacity-20 bg-cover bg-center"></div>
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[30px] bg-gradient-to-t from-[#01070F] to-transparent"></div>
            </div>

            <StartYourJourney />
        </div>
    );
    if (hasLoadedBefore) {
        return content;
    }

    return <PageWithLoader isLoading={isLoading}>{content}</PageWithLoader>;
}
