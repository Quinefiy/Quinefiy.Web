import Image from "next/image";
import HeadingCard from "./HeadingCard";

type Props = {
    showHeader: boolean;
    data: any;
}

const SoftwareProduct = ({ showHeader, data }: Props) => {
    console.log("data", data)

    return (
        // <div className=" w-full max-w-[1535px] relative overflow-x-clip">
        //     <div className="opacity-0 animate-down-on-scroll flex flex-col xl:gap-[24px] lg:gap-[22px] md:gap-[20px] sm:gap-[18px] gap-[16px] items-center">
        //         {showHeader && <HeadingCard text="What Do We Offer?" />}
        //         <h2 className="text-[#E1E1E1] 2xl:text-[36px] xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[20px] text-[18px] font-bold leading-[160%]">{data?.head}</h2>
        //         <p className="text-[#FFFFFFD9] xl:text-[18px] lg:text-[17px] md:text-[16px] sm:text-[15px] text-[14px] font-medium leading-[160%] max-w-[890px] text-center">{data?.subHead}</p>
        //     </div>
        //     <div className=" w-full grid grid-cols-6 2xl:mt-[64px] xl:mt-[58px] lg:mt-[50px] md:mt-[44px] sm:mt-[38px] mt-[32px] 2xl:gap-[24px] lg:gap-[20px] sm:gap-[18px] gap-[16px]">
        //         {data?.items?.map((product: any, index: number) => (
        // <div data-delay={`${index * 0.3}`} className={`${index === 0 || index === 1 ? "xl:col-span-2 md:col-span-3 col-span-6 " : index === 2 ? "xl:col-span-2 md:col-span-3 col-span-6" : index === 3 ? "md:col-span-3 col-span-6" : "xl:col-span-3 col-span-6"}  opacity-0 animate-left-on-scroll animate-down-on-scroll !h-full`} key={product.id}>
        //     <div className="transition-transform hover:translate-y-[-30px] duration-500 rounded-[16px] relative border border-[#6BAAFF4D]  productCard-gradient py-[48px] px-[32px]  overflow-hidden !h-full" >
        //         {/* <div className="absolute top-0 left-0 bottom-0 right-0 bg-[url(/assets/dust.png)] z-10 bg-cover">
        //     </div> */}
        //         <div className="w-[52.5px] h-[52.5px] rounded-full flex items-center justify-center mb-[32px] border-[0.75px] border-[#FFFFFF1A]">
        //             <Image width={32} height={32} src={product.icon.url} alt={product.icon.alternativeText} className="" />
        //         </div>
        //         <h4 className="2xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[16px] text-[#E1E1E1] font-bold mb-[12px]  leading-[160%] ">{product.title}</h4>
        //         <p className="2xl:text-[16px] lg:text-[14.5px] sm:text-[13px] text-[12px] text-[#FFFFFFD9] font-medium leading-[160%]">{product.description}</p>
        //     </div>
        // </div>
        //         ))}
        //     </div>
        //     <div className="blue-light opacity-65 absolute w-[550px] h-[200px] right-[0px] bottom-[-100px] z-[-1]"></div>
        //     <div className="blue-light opacity-65 absolute w-[550px] h-[200px] left-[0px] top-[50%] z-[-1]"></div>
        // </div>

        <div className={`w-full max-w-[1300px] relative  flex justify-center mb-[50px] ${showHeader ? "" : "sm:mt-[150px] mt-[50px]"}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src='/assets/software-bg.svg' className="w-[90%] max-w-[1189px] md:flex hidden" />
            <div className="md:hidden absolute inset-0 bg-[url('/assets/sw-products-bg-res.svg')] bg-center z-[-1]"></div>

            <div className="md:absolute !w-full inset-0 flex flex-col gap-[52px] justify-between  items-center">
                <div className="opacity-0 animate-down-on-scroll flex flex-col xl:gap-[24px] lg:gap-[20px] md:gap-[18px] sm:gap-[16px] gap-[14px] items-center md:mb-0 mb-[28px]">
                    {showHeader && <HeadingCard text="What Do We Offer?" />}
                    <h2 className="text-[#E1E1E1] 2xl:text-[36px] xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[20px] text-[18px] font-bold leading-[160%]">{data?.heading}</h2>
                    <p className="text-[#FFFFFFD9] xl:text-[18px] lg:text-[17px] md:text-[16px] sm:text-[15px] text-[14px] font-medium leading-[160%] max-w-[690px] text-center">{data?.subHeading}</p>
                </div>
                {data?.products.map((product: any, index: number) => (
                    <div className={` md:absolute ${index === 0 ? "xl:right-[50px] right-0 top-1/4 opacity-0 animate-right-on-scroll" : index === 1 ? "xl:right-[50px] right-0 bottom-1/4 opacity-0 animate-right-on-scroll" : index === 2 ? "xl:left-[50px] left-0 top-1/4 opacity-0 animate-left-on-scroll" : index === 3 ? "xl:left-[50px] left-0 bottom-1/4  opacity-0 animate-left-on-scroll" : "mx-auto bottom-0  lg:max-w-[560px] md:max-w-[480px] max-w-[380px]  opacity-0 animate-up-on-scroll"} `} key={product.id}>
                        <div className="transition-transform hover:translate-y-[-30px] duration-500 relative  flex flex-col items-center" >
                            <div className=" shadow-[0px_0px_15px_0px_#13397380] md:shadow-[0px_0px_15px_0px_#13335980] bg-[linear-gradient(0deg,rgba(0,38,74,0)_0%,rgba(0,101,255,0.12)_100%)] backdrop-blur-xl xl:mb-[22px] lg:mb-[20px] md:mb-[18px] sm:mb-[16px] mb-[14px] flex justify-center items-center xl:w-[78px] xl:h-[78px] lg:w-[70px] lg:h-[70px] md:w-[64px] md:h-[64px] w-[82px] h-[82px] rounded-full  md:border-0 border-[0.5px] border-[#19335980] ">
                                <div className="relative aspect-[55/55] xl:w-[46px] lg:w-[42px] md:w-[38px] w-[52px] ">
                                <Image fill src={product.icon.url} alt={product.icon.alternativeText} className="" sizes=" (max-width: 768px) 38px, (max-width: 1024px) 42px, (max-width: 1280px) 46px, 52px" />
                                </div>    
                            </div>
                            <h4 className="2xl:text-[22px] lg:text-[20px] md:text-[16px] text-[18px] text-[#E1E1E1] font-bold mb-[12px]  leading-[160%] ">{product.title}</h4>
                            <p className="2xl:text-[16px] lg:text-[14.5px] md:text-[12px] text-[13px] text-[#FFFFFFD9] font-medium leading-[160%] text-center">{product.description}</p>
                        </div>
                    </div>
                ))}
                {/* <div className={`animate-left-on-scro absolute right-0 bottom-1/4 `}>
                    <div className="transition-transform hover:translate-y-[-30px] duration-500 rounded-[16px] relative   overflow-hidden  flex flex-col items-center" >
                        <div className=" shadow-[0px_4px_4px_0px_#00000025] bg-[linear-gradient(0deg,rgba(0,38,74,0)_0%,rgba(0,101,255,0.12)_100%)] backdrop-blur-xl xl:mb-[22px] lg:mb-[20px] md:mb-[18px] sm:mb-[16px] mb-[14px] flex justify-center items-center w-[72px] h-[72px] rounded-full">

                            <Image width={42} height={42} src='/assets/erp.png' alt="" className="" />
                        </div>

                        <h4 className="2xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[16px] text-[#E1E1E1] font-bold mb-[12px]  leading-[160%] ">Enterprise Software Solutions</h4>
                        <p className="2xl:text-[16px] lg:text-[14.5px] sm:text-[13px] text-[12px] text-[#FFFFFFD9] font-medium leading-[160%]">ERP, CRM, and other business software</p>
                    </div>
                </div>
                <div className={`animate-left-on-scro absolute left-0 top-1/4 `}>
                    <div className="transition-transform hover:translate-y-[-30px] duration-500 rounded-[16px] relative   overflow-hidden  flex flex-col items-center" >
                        <div className=" shadow-[0px_4px_4px_0px_#00000025] bg-[linear-gradient(0deg,rgba(0,38,74,0)_0%,rgba(0,101,255,0.12)_100%)] backdrop-blur-xl xl:mb-[22px] lg:mb-[20px] md:mb-[18px] sm:mb-[16px] mb-[14px] flex justify-center items-center w-[72px] h-[72px] rounded-full">

                            <Image width={42} height={42} src='/assets/saas.png' alt="" className="" />
                        </div>

                        <h4 className="2xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[16px] text-[#E1E1E1] font-bold mb-[12px]  leading-[160%] ">SaaS Development</h4>
                        <p className="2xl:text-[16px] lg:text-[14.5px] sm:text-[13px] text-[12px] text-[#FFFFFFD9] font-medium leading-[160%]">Developing cloud-based software as a service</p>
                    </div>
                </div>
                <div className={`animate-left-on-scro absolute mx-auto bottom-0  max-w-[600px]`}>
                    <div className="transition-transform hover:translate-y-[-30px] duration-500 rounded-[16px] relative   overflow-hidden  flex flex-col items-center" >
                        <div className=" shadow-[0px_4px_4px_0px_#00000025] bg-[linear-gradient(0deg,rgba(0,38,74,0)_0%,rgba(0,101,255,0.12)_100%)] backdrop-blur-xl xl:mb-[22px] lg:mb-[20px] md:mb-[18px] sm:mb-[16px] mb-[14px] flex justify-center items-center w-[72px] h-[72px] rounded-full">

                            <Image width={42} height={42} src='/assets/mobile-development.png' alt="" className="" />
                        </div>

                        <h4 className="2xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[16px] text-[#E1E1E1] font-bold mb-[12px]  leading-[160%] ">Mobile App Development</h4>
                        <p className="2xl:text-[16px] lg:text-[14.5px] sm:text-[13px] text-[12px] text-[#FFFFFFD9] font-medium leading-[160%] text-center">We build custom iOS, Android, and hybrid apps that engage users and meet business needs</p>
                    </div>
                </div>
                <div className={`animate-left-on-scro absolute left-0 bottom-1/4  text-center`}>
                    <div className="transition-transform hover:translate-y-[-30px] duration-500 rounded-[16px] relative   overflow-hidden  flex flex-col items-center" >
                        <div className=" shadow-[0px_4px_4px_0px_#00000025] bg-[linear-gradient(0deg,rgba(0,38,74,0)_0%,rgba(0,101,255,0.12)_100%)] backdrop-blur-xl xl:mb-[22px] lg:mb-[20px] md:mb-[18px] sm:mb-[16px] mb-[14px] flex justify-center items-center w-[72px] h-[72px] rounded-full">

                            <Image width={42} height={42} src='/assets/web-programming.png' alt="" className="" />
                        </div>

                        <h4 className="2xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[16px] text-[#E1E1E1] font-bold mb-[12px]  leading-[160%] ">Web Development</h4>
                        <p className="2xl:text-[16px] lg:text-[14.5px] sm:text-[13px] text-[12px] text-[#FFFFFFD9] font-medium leading-[160%]">Fast, secure, user-friendly websites delivered</p>
                    </div>
                </div> */}

            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src='/assets/q.svg' className="absolute md:inset-0 top-[46.5%] m-auto md:w-[14%] w-[70px] md:opacity-60 opacity-20 z-[-1]" />
        </div>
    )
}

export default SoftwareProduct



