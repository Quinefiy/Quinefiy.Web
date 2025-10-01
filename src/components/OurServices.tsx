import { useEffect, useState } from "react";
import HeadingCard from "./HeadingCard";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link";
import Image from "next/image";

const OurServices = ({ data }: any) => {
    const [slidesToScroll, setSlidesToScroll] = useState(4)

    // const getServices = async () => {
    //     return await api.get('/services?populate=*').then(res => res.data.data)
    // }
    // const { data, isSuccess, isLoading } = useQuery({ queryKey: ['services-list'], queryFn: getServices })

    useEffect(() => {
        const updateSlidesToScroll = () => {
            const width = window.innerWidth
            if (width < 640) setSlidesToScroll(1)
            else if (width < 768) setSlidesToScroll(2)
            else if (width < 1024) setSlidesToScroll(3)
            else setSlidesToScroll(4)
        }

        updateSlidesToScroll()
        window.addEventListener("resize", updateSlidesToScroll)
        return () => window.removeEventListener("resize", updateSlidesToScroll)
    }, [])
    return (
        <div className="w-full max-w-[1535px] bg-[url(/assets/Services-bg.png)] relative">
            <div className="flex flex-col items-center gap-[24px]">
                <div data-delay='0.2' className="opacity-0 animate-down-on-scroll"><HeadingCard text="Services" /></div>
                <h2 className="opacity-0 animate-down-on-scroll text-[#E1E1E1] 2xl:text-[36px] xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[20px] text-[18px] font-bold leading-[160%]">{data?.heading}</h2>
            </div>
            <div className="opacity-0 animate-up-on-scroll 2xl:mt-[128px] xl:mt-[120px] lg:mt-[110px] md:mt-[105px] sm:mt-[100px] mt-[32px]">
                <Carousel opts={{ align: "start", slidesToScroll }} >
                    <CarouselPrevious />
                    <CarouselNext />
                    {data?.services.length > 0 &&
                        <CarouselContent className="items-stretch !py-[20px]" >
                            {data?.services.map((service: any) => (
                                <CarouselItem className="xl:basis-1/4 lg:basis-1/3 sm:basis-1/2 " key={service.id}>
                                    <div className="group [perspective:1000px] h-full sm:w-full w-[73%] mx-auto relative">
                                        <div className="relative h-full w-full transition-transform duration-900 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                            {/* Front side */}
                                            <div className="!min-h-full serviceCard-gradient lg:py-[52px] sm:py-[46px] py-[41px] sm:px-[32px] px-[28px] rounded-[16px] border border-[#6BAAFF4D] cursor-pointer [backface-visibility:hidden] relative overflow-hidden">
                                                <div className=" absolute inset-0 bg-[url(/assets/pngwing.com.png)] bg-cover z-[-99] bg-no-repeat opacity-10 rotate-[-45deg] "></div>
                                                <div className="lg:w-[52px] sm:w-[46px] w-[42px] relative aspect-[1/1]">
                                                    <Image fill src="/assets/development.png" alt={service.icon.alternativeText} className="" sizes="(max-width: 640px) 46px, (max-width: 1024px) 52px, 42px" />
                                                </div>
                                                <h3 className="2xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[16px] text-[#E1E1E1] font-bold mb-[12px]  leading-[160%] xl:mt-[48px] lg:mt-[40px] md:mt-[36px] sm:mt-[30px] mt-[24px]">
                                                    {service.title}
                                                </h3>
                                            </div>
                                            {/* Back side */}
                                            <Link href="/services" className="absolute left-0 right-0 bottom-0 top-0 !min-h-full serviceCard-gradient flex items-center justify-center rounded-[16px] border border-[#6BAAFF4D] cursor-pointer [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                                <h3 className="2xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[16px] text-[#E1E1E1] font-bold">
                                                    Show More
                                                </h3>
                                            </Link>

                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    }
                </Carousel>
            </div>
        </div>
    )
}
export default OurServices;