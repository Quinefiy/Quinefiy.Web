import Link from "next/link";
import HeadingCard from "./HeadingCard"
import Image from "next/image";

type Props = {
    showHeader: boolean;
    data: any;
}

const CaseStudies = ({ data, showHeader }: Props) => {
    // const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
    console.log("data", data)
    return (
        <div className="!w-full ">
            {showHeader &&
                <div className="flex flex-col items-center gap-[24px] 2xl:mb-[64px] xl:mb-[58px] lg:mb-[50px] md:mb-[44px] sm:mb-[38px] mb-[32px]">
                    <div data-delay='0.2' className="opacity-0 animate-down-on-scroll"><HeadingCard text="Case Studies" /></div>
                    <h2 className="opacity-0 animate-down-on-scroll  text-[#E1E1E1] 2xl:text-[36px] xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[20px] text-[18px] font-bold leading-[160%]">{data?.heading}</h2>
                </div>
            }

            <div className="w-full flex justify-center   gap-[16px] flex-wrap  items-stretch relative">
                {/* <div className="flex justify-center items-end absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[#01070F] to-transparent z-10" >
                    <Link href="/case-studies" className="flex max-w-fit items-center gap-[5px] bg-[linear-gradient(0deg,rgba(0,38,74,0)_0%,rgba(0,101,255,0.12)_100%)] backdrop-blur-xl border-t-[1px] border-t-[#00429B80] rounded-xl py-[9.5px] px-[24px] text-[#0065FF] font-bold text-[12px] leading-[100%] cursor-pointer z-10">See More</Link>
                  </div> */}
                {data?.case_studies?.map((c: any, index: number) => (
                    <div data-delay={index * 0.3} className=" sm:w-[23%] w-full sm:max-w-[350px] max-w-[320px] sm:min-w-[308px] caseStudyCard  rounded-[16px] lg:p-[18px] p-[12px] border border-[#6BAAFF4D] hover:border-[#00429B80] flex flex-col justify-between gap-[32px] opacity-0 animate-down-on-scroll !min-h-full " key={c.id}>

                        <div className="">

                            <div className="w-full h-[184px] relative aspect-[332/184] mb-[26px]">
                                <Image fill src="/assets/Rectangle 8 (4).jpg" alt={c.caseImage.alternativeText || ""} className="rounded-[12px]" />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#E1E1E1] leading-[140%] lg:text-[16px] text-[14px] mb-[16px]">{c.title}</h4>
                                <p className="font-medium text-[#FFFFFFB2] leading-[140%] lg:text-[14px] text-[12px] line-clamp-3">{c.shortDescription}</p>
                            </div>
                        </div>
                        <Link href={`/case-studies/${c.slug}`} className="font-medium text-[#0065FF] leading-[140%] lg:text-[16px] text-[14px] self-end flex items-center group relative gap-0 hover:gap-[6px]">
                            <p>Learn More</p>
                            <Image alt="" width={20} height={10} src="/assets/right-arrow-svgrepo-com.svg" className="w-0 group-hover:w-[20px] transition-all duration-500 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100" />
                        </Link>
                    </div>
                ))}
            </div>
        </div>

    )
}
export default CaseStudies