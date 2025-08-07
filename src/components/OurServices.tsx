import { useEffect, useState } from "react";
import HeadingCard from "./HeadingCard";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const OurServices = () => {
    const services = [
        {
            id: 1,
            img: "/assets/development.png",
            name: "Software Development Services"
        },
        {
            id: 2,
            img: "/assets/cloud-computing.png",
            name: "IT And Cloud Services"
        },
        {
            id: 3,
            img: "/assets/software.png",
            name: "Software Testing And QA"
        },
        {
            id: 4,
            img: "/assets/ai-model.png",
            name: "AI And Machine Learning"
        },
        {
            id: 5,
            img: "/assets/information-technology.png",
            name: "IT Consulting And Support"
        },
        {
            id: 6,
            iimg: "/assets/api-integration.png",
            name: "API Development & Integration"
        },
        {
            id: 7,
            img: "/assets/cyber-security.png",
            name: "Cybersecurity Services"
        },
        {
            id: 8,
            img: "/assets/ux.png",
            name: "UI/UX Design"
        },
    ]
    const [slidesToScroll, setSlidesToScroll] = useState(4)

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
        <div className="w-full max-w-[1535px] bg-[url(/assets/Services-bg.png)]">
            <div className="flex flex-col items-center gap-[24px]">
                <div data-delay='0.2' className="opacity-0 animate-down-on-scroll"><HeadingCard text="Services" /></div>
                <h2 className="opacity-0 animate-down-on-scroll text-[#E1E1E1] 2xl:text-[36px] xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[20px] text-[18px] font-bold leading-[160%]">Our Services</h2>
            </div>
            <div className="opacity-0 animate-up-on-scroll 2xl:mt-[128px] xl:mt-[120px] lg:mt-[110px] md:mt-[105px] sm:mt-[100px] mt-[32px]">
                <Carousel opts={{ align: "start", slidesToScroll}}>
                    <CarouselPrevious />
                    <CarouselNext />
                    <CarouselContent className="items-stretch">
                        {services.map((service: any) => (
                            <CarouselItem className="xl:basis-1/4 lg:basis-1/3 sm:basis-1/2 " key={service.id}>
                                <div className="group [perspective:1000px] h-full sm:w-full w-[73%] mx-auto relative">
                                    <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                        {/* Front side */}
                                        <div className="!min-h-full serviceCard-gradient lg:py-[52px] sm:py-[46px] py-[41px] sm:px-[32px] px-[28px] rounded-[16px] border border-[#6BAAFF4D] cursor-pointer [backface-visibility:hidden]">
                                            <img src={service.img} className="lg:w-[52px] sm:w-[46px] w-[42px]" />
                                            <h3 className="2xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[16px] text-[#E1E1E1] font-bold mb-[12px]  leading-[160%] xl:mt-[48px] lg:mt-[40px] md:mt-[36px] sm:mt-[30px] mt-[24px]">
                                                {service.name}
                                            </h3>
                                        </div>
                                        {/* Back side */}
                                        <div className="absolute left-0 right-0 bottom-0 top-0 !min-h-full serviceCard-gradient flex items-center justify-center rounded-[16px] border border-[#6BAAFF4D] cursor-pointer [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                            <h3 className="2xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[16px] text-[#E1E1E1] font-bold">
                                                Show More
                                            </h3>
                                        </div>

                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    )
}
export default OurServices;