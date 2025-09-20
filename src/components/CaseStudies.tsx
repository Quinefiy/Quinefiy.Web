import Link from "next/link";
import HeadingCard from "./HeadingCard"
import Image from "next/image";

type Props = {
    showHeader: boolean;
    data: any;
}

const CaseStudies = ({ data, showHeader }: Props) => {

    const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');

    return (
        <div className="!w-full ">
            {showHeader &&
                <div className="flex flex-col items-center gap-[24px] 2xl:mb-[64px] xl:mb-[58px] lg:mb-[50px] md:mb-[44px] sm:mb-[38px] mb-[32px]">
                    <div data-delay='0.2' className="opacity-0 animate-down-on-scroll"><HeadingCard text="Case Studies" /></div>
                    <h2 className="opacity-0 animate-down-on-scroll  text-[#E1E1E1] 2xl:text-[36px] xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[20px] text-[18px] font-bold leading-[160%]">{data?.head}</h2>
                </div>
            }

            <div className="w-full flex justify-center items-center gap-[24px] flex-wrap ">
                {data?.items?.map((c: any, index: number) => (
                    <div data-delay={index * 0.3} className="sm:w-[33%] w-full max-w-[420px] sm:min-w-[408px] priceCard-gradient rounded-[16px] lg:p-[32px] p-[24px] border border-[#6BAAFF4D] hover:border-[#00429B80] flex flex-col gap-[32px] opacity-0 animate-down-on-scroll" key={c.id}>
                        <div className="w-full h-[224px] relative aspect-[432/224]">
                            <Image fill src={c.icon.url} alt={c.icon.alternativeText} className="rounded-[12px]" />
                        </div>
                        <div>
                            <h4 className="font-bold text-[#E1E1E1] leading-[140%] lg:text-[18px] text-[16px] mb-[16px]">{c.title}</h4>
                            <p className="font-medium text-[#FFFFFFB2] leading-[140%] lg:text-[16px] text-[14px] line-clamp-5">{c.description}</p>
                        </div>
                        <Link href={`/case-studies/${slugify(c.title)}-${c.id}`} className="font-medium text-[#0065FF] leading-[140%] lg:text-[16px] text-[14px] self-end flex items-center group relative gap-0 hover:gap-[6px]">
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